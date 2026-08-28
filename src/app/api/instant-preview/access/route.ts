import { NextResponse } from "next/server";
import { createPreviewSession, passwordMatches } from "@/lib/instant-preview/auth";
import { getPreview } from "@/lib/instant-preview/storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { slug?: string; password?: string };
  const slug = typeof body.slug === "string" ? body.slug.slice(0, 100) : "";
  const password = typeof body.password === "string" ? body.password.slice(0, 200) : "";
  const preview = await getPreview(slug);
  if (!preview || (!preview.isPaid && Date.parse(preview.expiresAt) <= Date.now())) {
    return NextResponse.json({ ok: false, error: "This preview is no longer available." }, { status: 410 });
  }
  if (!passwordMatches(password, preview.passwordHash)) {
    return NextResponse.json({ ok: false, error: "That password isn't correct." }, { status: 401 });
  }
  const expiresAt = preview.isPaid ? new Date(Date.now() + 30 * 864e5).toISOString() : preview.expiresAt;
  const response = NextResponse.json({ ok: true });
  response.cookies.set(`preview_${slug}`, createPreviewSession(slug, expiresAt), {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
    path: `/previews/${slug}`, expires: new Date(expiresAt),
  });
  return response;
}
