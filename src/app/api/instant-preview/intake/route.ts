import { NextResponse } from "next/server";
import { saveIntake } from "@/lib/instant-preview/storage";

export const runtime = "nodejs";

type Field = "contactName" | "email" | "businessName" | "description" | "vibe" | "mustInclude";
type Payload = Record<Field, string>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  const payload: Payload = {
    contactName: clean(body.contactName, 120),
    email: clean(body.email, 254).toLowerCase(),
    businessName: clean(body.businessName, 160),
    description: clean(body.description, 500),
    vibe: clean(body.vibe, 500),
    mustInclude: clean(body.mustInclude),
  };
  const fieldErrors: Partial<Record<Field, string>> = {};
  if (!payload.contactName) fieldErrors.contactName = "Enter your name.";
  if (!EMAIL_RE.test(payload.email)) fieldErrors.email = "Enter a valid email.";
  if (!payload.businessName) fieldErrors.businessName = "Enter your business name.";
  if (payload.description.length < 10) fieldErrors.description = "Tell us a little more about the business.";
  if (!payload.vibe) fieldErrors.vibe = "Describe the colors or feel you want.";
  if (Object.keys(fieldErrors).length) {
    return NextResponse.json({ ok: false, error: "Check the highlighted fields.", fieldErrors }, { status: 422 });
  }

  try {
    await saveIntake(payload);
  } catch (error) {
    console.error("[instant-preview] intake persistence failed", error);
    return NextResponse.json({ ok: false, error: "We couldn't save this yet. Please try again." }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[instant-preview] intake saved but RESEND_API_KEY is missing", payload.email);
    return NextResponse.json({ ok: true, notificationSent: false });
  }
  const details = [
    ["Contact", payload.contactName], ["Email", payload.email], ["Business", payload.businessName],
    ["What they do", payload.description], ["Brand direction", payload.vibe],
    ["Must include", payload.mustInclude || "—"],
  ];
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONSULTATION_FROM_EMAIL ?? "2FLY Website <onboarding@resend.dev>",
        to: [process.env.INSTANT_PREVIEW_NOTIFY_EMAIL ?? "bruno@2flydigital.com"],
        reply_to: payload.email,
        subject: `New Instant Preview — ${payload.businessName}`,
        text: details.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;background:#0a0b0d;color:#fff;padding:28px;border-radius:16px"><p style="color:#6b91ff;font-weight:700">2FLY · INSTANT PREVIEW</p><h1 style="font-size:25px">${escapeHtml(payload.businessName)}</h1>${details.map(([label, value]) => `<p><small style="color:#8a93a6">${label}</small><br>${escapeHtml(value)}</p>`).join("")}</div>`,
      }),
    });
    if (!response.ok) console.error("[instant-preview] notification failed", response.status, await response.text());
    return NextResponse.json({ ok: true, notificationSent: response.ok });
  } catch (error) {
    console.error("[instant-preview] notification failed", error);
    return NextResponse.json({ ok: true, notificationSent: false });
  }
}
