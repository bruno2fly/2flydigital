export type PreviewRecord = {
  slug: string;
  businessName: string;
  passwordHash: string;
  expiresAt: string;
  isPaid: boolean;
  paymentUrl?: string;
};

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

function configuredRecords(): PreviewRecord[] {
  try {
    return JSON.parse(process.env.INSTANT_PREVIEW_RECORDS_JSON ?? "[]") as PreviewRecord[];
  } catch {
    console.error("[instant-preview] INSTANT_PREVIEW_RECORDS_JSON is invalid JSON");
    return [];
  }
}

async function kvCommand<T>(...command: string[]): Promise<T | null> {
  if (!KV_URL || !KV_TOKEN) return null;
  const response = await fetch(KV_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${KV_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`KV command failed (${response.status})`);
  const data = (await response.json()) as { result: T };
  return data.result;
}

export async function saveIntake(payload: Record<string, string>) {
  if (!KV_URL || !KV_TOKEN) {
    throw new Error("KV storage is not configured");
  }
  const record = JSON.stringify({
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ...payload,
  });
  await kvCommand("LPUSH", "instant-preview:intakes", record);
}

export async function getPreview(slug: string): Promise<PreviewRecord | null> {
  const stored = await kvCommand<string>("GET", `instant-preview:preview:${slug}`);
  if (stored) return JSON.parse(stored) as PreviewRecord;
  return configuredRecords().find((record) => record.slug === slug) ?? null;
}

export async function setPreview(record: PreviewRecord) {
  if (!KV_URL || !KV_TOKEN) throw new Error("KV storage is not configured");
  await kvCommand("SET", `instant-preview:preview:${record.slug}`, JSON.stringify(record));
}
