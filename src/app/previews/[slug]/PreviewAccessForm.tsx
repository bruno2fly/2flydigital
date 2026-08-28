"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function PreviewAccessForm({ slug, businessName }: { slug: string; businessName: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    try {
      const response = await fetch("/api/instant-preview/access", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug, password }) });
      const data = await response.json();
      if (!response.ok) { setError(data.error ?? "Unable to open this preview."); setLoading(false); return; }
      router.refresh();
    } catch { setError("Unable to connect. Please try again."); setLoading(false); }
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#08090b] px-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,82,255,.2),transparent_38%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      <section className="relative w-full max-w-md rounded-2xl border border-white/12 bg-[#101218]/95 p-7 text-center shadow-2xl sm:p-10">
        <Image src="/brand/2fly-mark.svg" alt="2FLY" width={48} height={48} className="mx-auto" priority />
        <div className="mx-auto mt-8 grid size-12 place-items-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400"><LockKeyhole size={21} /></div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-blue-400">Private client preview</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">{businessName}</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/45">Enter the password from your preview email to see the finished page.</p>
        <form onSubmit={submit} className="mt-8">
          <label htmlFor="preview-password" className="sr-only">Preview password</label>
          <input id="preview-password" type="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="current-password" required autoFocus placeholder="Preview password" className="w-full rounded-xl border border-white/12 bg-black/30 px-4 py-3.5 text-center text-white outline-none transition placeholder:text-white/25 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
          {error && <p role="alert" className="mt-3 text-sm text-red-400">{error}</p>}
          <button disabled={loading} className="mt-4 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 font-bold transition hover:bg-blue-500 disabled:opacity-60">{loading ? "Opening preview…" : "Open my preview"}<ArrowRight size={17} /></button>
        </form>
        <p className="mt-6 text-xs text-white/30">This private link is time-limited and intended only for the recipient.</p>
      </section>
    </main>
  );
}
