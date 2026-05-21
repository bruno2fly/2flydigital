import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = "bruno@2flydigital.com";
const FROM_EMAIL =
  process.env.CONSULTATION_FROM_EMAIL ?? "2FLY Website <onboarding@resend.dev>";

type Payload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof Payload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

function validate(payload: Payload): FieldErrors {
  const errors: FieldErrors = {};
  if (!payload.name) errors.name = "Please enter your name.";
  if (!payload.email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(payload.email)) errors.email = "That email looks invalid.";
  if (!payload.phone) errors.phone = "Please enter your phone number.";
  if (!payload.message || payload.message.length < 10) {
    errors.message = "Tell us a bit more (at least 10 characters).";
  }
  return errors;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(payload: Payload) {
  const lines = [
    `Name:    ${payload.name}`,
    `Email:   ${payload.email}`,
    `Phone:   ${payload.phone}`,
    `Company: ${payload.company || "—"}`,
    "",
    "Needs help with:",
    payload.message,
  ];
  const text = lines.join("\n");

  const html = `<!doctype html>
<html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#f7f9ff; padding:24px; color:#0b1330;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #dde5f3; border-radius:14px; overflow:hidden;">
      <tr>
        <td style="background:linear-gradient(135deg,#0040cc 0%,#0052ff 50%,#2e6bff 100%); padding:20px 24px; color:#ffffff;">
          <div style="font-size:12px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; opacity:.85;">2FLY · New lead</div>
          <div style="font-size:20px; font-weight:800; margin-top:4px;">Consultation request</div>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size:14px; line-height:1.55;">
            <tr><td style="color:#5a6580; width:96px; padding:6px 0;">Name</td><td style="font-weight:600; padding:6px 0;">${escapeHtml(payload.name)}</td></tr>
            <tr><td style="color:#5a6580; padding:6px 0;">Email</td><td style="font-weight:600; padding:6px 0;"><a href="mailto:${escapeHtml(payload.email)}" style="color:#0052ff; text-decoration:none;">${escapeHtml(payload.email)}</a></td></tr>
            <tr><td style="color:#5a6580; padding:6px 0;">Phone</td><td style="font-weight:600; padding:6px 0;"><a href="tel:${escapeHtml(payload.phone)}" style="color:#0052ff; text-decoration:none;">${escapeHtml(payload.phone)}</a></td></tr>
            <tr><td style="color:#5a6580; padding:6px 0;">Company</td><td style="font-weight:600; padding:6px 0;">${escapeHtml(payload.company || "—")}</td></tr>
          </table>
          <div style="margin-top:18px; padding:16px; background:#f1f5ff; border:1px solid #dde5f3; border-radius:10px;">
            <div style="font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#0052ff; margin-bottom:8px;">Needs help with</div>
            <div style="white-space:pre-wrap; font-size:14px; color:#0b1330;">${escapeHtml(payload.message)}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px; border-top:1px solid #dde5f3; font-size:12px; color:#5a6580;">
          Reply directly to this email to reach ${escapeHtml(payload.name)}.
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const subject = `New consultation request — ${payload.name}${payload.company ? ` (${payload.company})` : ""}`;

  return { text, html, subject };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const payload: Payload = {
    name: sanitize(body.name),
    email: sanitize(body.email).toLowerCase(),
    phone: sanitize(body.phone),
    company: sanitize(body.company),
    message: sanitize(body.message),
  };

  const fieldErrors = validate(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const { text, html, subject } = buildEmail(payload);
  const apiKey = process.env.RESEND_API_KEY;

  // Safety net: always log the lead so it is never silently lost,
  // even if the email transport is misconfigured.
  console.info("[consultation] lead received", {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    company: payload.company,
  });

  if (!apiKey) {
    console.error(
      "[consultation] RESEND_API_KEY is not set. Lead was NOT emailed. Payload:",
      payload,
    );
    return NextResponse.json(
      {
        ok: false,
        error: "Email service is not configured yet. Please call (781) 606-2445.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: payload.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[consultation] Resend send failed", response.status, detail);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your message right now. Please try again or call (781) 606-2445.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[consultation] unexpected send error", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end. Please try again or call (781) 606-2445.",
      },
      { status: 500 },
    );
  }
}
