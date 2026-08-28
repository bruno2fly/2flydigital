import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export function hashPreviewPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export function passwordMatches(password: string, expectedHash: string) {
  const actual = Buffer.from(hashPreviewPassword(password), "hex");
  const expected = Buffer.from(expectedHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function secret() {
  return process.env.INSTANT_PREVIEW_SESSION_SECRET ?? "";
}

export function createPreviewSession(slug: string, expiresAt: string) {
  if (!secret()) throw new Error("INSTANT_PREVIEW_SESSION_SECRET is not configured");
  const payload = Buffer.from(JSON.stringify({ slug, expiresAt })).toString("base64url");
  const signature = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyPreviewSession(token: string | undefined, slug: string) {
  if (!token || !secret()) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as {
      slug: string;
      expiresAt: string;
    };
    return data.slug === slug && Date.parse(data.expiresAt) > Date.now();
  } catch {
    return false;
  }
}
