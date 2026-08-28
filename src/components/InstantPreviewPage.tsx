"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, CheckCircle2, ExternalLink, LockKeyhole, Sparkles } from "lucide-react";
import { formatLaunchPrice, instantPreviewConfig } from "@/config/instant-preview";

const steps = [
  { number: "01", title: "Tell us what you sell", body: "Share the essentials: your business, offer, audience, and the visual direction you have in mind." },
  { number: "02", title: "We build the real page", body: `Within ${instantPreviewConfig.turnaroundHours} hours, we turn your answers into a custom, conversion-focused landing page.` },
  { number: "03", title: "Explore it privately", body: "We send a password-protected link. Click around, read every word, and see the page working before deciding." },
  { number: "04", title: "Unlock only if you love it", body: `Pay ${formatLaunchPrice()} to remove the preview lock and watermark. If it is not for you, pay nothing.` },
];

const portfolio: { title: string; image: string; url: string }[] = [];

const faqs = [
  { question: "How fast will I see my page?", answer: `Your first finished preview is typically ready within ${instantPreviewConfig.turnaroundHours} hours after we receive a clear brief. We will email the private link and password directly to you.` },
  { question: "What is included?", answer: "A focused, mobile-ready landing page with custom messaging, visual direction, responsive design, and a clear conversion path tailored to the offer you submit." },
  { question: "What happens if I do not pay?", answer: `Nothing. Your private preview expires after ${instantPreviewConfig.defaultExpiryHours} hours. There is no invoice, subscription, or awkward sales call.` },
  { question: "Can I request changes?", answer: "Yes. Send us focused feedback after reviewing the preview. We will confirm what can be refined before you decide whether to unlock it." },
];

const inputClass = "mt-2 w-full rounded-xl border border-white/12 bg-black/30 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

function BrowserPreview() {
  return (
    <motion.div initial={{ opacity: 0, y: 28, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-10 -z-10 bg-blue-600/20 blur-3xl" />
      <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0e1016] shadow-2xl shadow-blue-950/50">
        <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4">
          <i className="size-2.5 rounded-full bg-[#ff5f57]" /><i className="size-2.5 rounded-full bg-[#febc2e]" /><i className="size-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex w-1/2 items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-[10px] text-white/35"><LockKeyhole size={10} /> preview.yourbrand.com</div>
        </div>
        <div className="relative grid min-h-80 place-items-center overflow-hidden p-7 sm:min-h-[430px]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="relative max-w-md text-center">
            <div className="mx-auto mb-7 h-2 w-16 rounded-full bg-blue-500" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-blue-400">Built for your business</p>
            <p className="text-4xl font-black leading-[.95] tracking-[-.05em] text-white sm:text-6xl">Your offer,<br />impossible to ignore.</p>
            <div className="mx-auto mt-7 h-10 w-32 rounded-md bg-blue-600" />
          </div>
          <div className="absolute right-0 top-16 bg-blue-600 px-7 py-2 text-xs font-black tracking-[.25em] text-white shadow-xl">PREVIEW</div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#151821] px-4 py-2 text-xs font-semibold text-white shadow-xl"><CheckCircle2 className="text-blue-400" size={15} /> No payment required</div>
    </motion.div>
  );
}

export default function InstantPreviewPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setError(""); setFieldErrors({});
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/instant-preview/intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json();
      if (!response.ok) { setError(data.error ?? "Please check your details and try again."); setFieldErrors(data.fieldErrors ?? {}); setStatus("idle"); return; }
      setStatus("success"); form.reset();
    } catch { setError("We could not send your brief. Please try again."); setStatus("idle"); }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" aria-label="2FLY home"><Image src="/brand/2fly-mark.svg" alt="2FLY" width={46} height={46} priority /></Link>
        <a href="#start" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold transition hover:border-blue-500 hover:bg-blue-500/10">Start your preview</a>
      </nav>

      <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-16 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pt-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-300"><Sparkles size={14} /> A finished page. Zero upfront risk.</div>
          <h1 className="max-w-4xl text-6xl font-black leading-[.86] tracking-[-.065em] sm:text-7xl lg:text-[6.8rem]">See your finished page <span className="text-blue-500">before you pay a cent.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">We build a real, custom landing page for your business. Love the private preview? Unlock it for {formatLaunchPrice()}. Don’t love it? It expires. You owe nothing.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#start" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-blue-600 px-7 font-extrabold shadow-[0_18px_60px_-18px_rgba(0,82,255,.8)] transition hover:bg-blue-500">Build my preview <ArrowRight size={18} /></a>
            <span className="flex items-center gap-2 text-sm text-white/45"><Check size={16} className="text-blue-400" /> No card. No contract. No catch.</span>
          </div>
        </motion.div>
        <BrowserPreview />
      </section>

      <section id="process" className="border-y border-white/10 bg-white/[.025] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">The whole process</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-6xl">From blank brief to live preview in four moves.</h2>
          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="min-h-64 border-b border-r border-white/10 p-7"><span className="font-mono text-sm text-blue-400">{step.number}</span><h3 className="mt-12 text-2xl font-bold tracking-tight">{step.title}</h3><p className="mt-4 leading-relaxed text-white/50">{step.body}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Selected work</p><h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-6xl">Built to be judged.</h2></div><p className="max-w-sm text-white/45">Real client launches are being prepared for this collection. Every preview receives the same hands-on care.</p></div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {portfolio.length ? portfolio.map(item => <a key={item.title} href={item.url} className="group"><Image src={item.image} alt={item.title} width={800} height={600} className="aspect-[4/3] w-full rounded-xl object-cover" /><span className="mt-4 flex items-center justify-between font-bold">{item.title}<ExternalLink size={16} /></span></a>) : ["Clarity", "Character", "Conversion"].map((word, i) => <div key={word} className="relative flex aspect-[4/3] items-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#11141c] to-[#08090b] p-6"><div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_25%,rgba(0,82,255,.45),transparent_35%)]" /><span className="relative text-2xl font-black">0{i + 1} / {word}</span></div>)}
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-28 sm:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">No fine print</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em]">Questions,<br />answered.</h2></div><div>{faqs.map((faq, i) => <details key={faq.question} className="group border-t border-white/12 py-6" open={i === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold"><span>{faq.question}</span><span className="text-blue-400 transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-relaxed text-white/50">{faq.answer}</p></details>)}</div></div></section>

      <section id="start" className="relative px-5 py-28 sm:px-8"><div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_15%_50%,rgba(0,82,255,.18),transparent_32%)]" /><div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Your turn</p><h2 className="mt-4 text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl">Give us the raw material.</h2><p className="mt-7 max-w-md text-lg leading-relaxed text-white/50">A few useful details are enough to start. We’ll turn them into a page you can actually see, use, and judge.</p><ArrowDown className="mt-10 text-blue-500" /></div>
          <div className="rounded-2xl border border-white/12 bg-[#101218]/90 p-6 shadow-2xl sm:p-9">
            <AnimatePresence mode="wait">{status === "success" ? <motion.div key="success" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className="grid min-h-[570px] place-items-center text-center"><div><CheckCircle2 className="mx-auto text-blue-400" size={52} /><h3 className="mt-6 text-3xl font-black">Brief received.</h3><p className="mx-auto mt-4 max-w-md text-white/55">We’ll review the details and have your private preview ready within {instantPreviewConfig.turnaroundHours} hours.</p><button onClick={() => setStatus("idle")} className="mt-8 text-sm font-bold text-blue-400 hover:text-blue-300">Send another brief</button></div></motion.div> : <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2" noValidate>
              {[["contactName","Your name","Bruno Lima"],["email","Email","you@business.com"],["businessName","Business / brand","North Shore Coffee"],["description","What do you sell?","Small-batch coffee delivered weekly"]].map(([name,label,placeholder]) => <label key={name} className={name === "description" ? "sm:col-span-2" : ""}><span className="text-sm font-semibold text-white/75">{label}</span><input className={inputClass} name={name} placeholder={placeholder} type={name === "email" ? "email" : "text"} aria-invalid={!!fieldErrors[name]} />{fieldErrors[name] && <span className="mt-1 block text-xs text-red-400">{fieldErrors[name]}</span>}</label>)}
              <label className="sm:col-span-2"><span className="text-sm font-semibold text-white/75">Brand colors or vibe</span><textarea className={inputClass} name="vibe" rows={3} placeholder="Electric blue, editorial, confident — no corporate stock-photo feel" aria-invalid={!!fieldErrors.vibe} />{fieldErrors.vibe && <span className="mt-1 block text-xs text-red-400">{fieldErrors.vibe}</span>}</label>
              <label className="sm:col-span-2"><span className="text-sm font-semibold text-white/75">Must-include copy or offer details <em className="font-normal text-white/30">(optional)</em></span><textarea className={inputClass} name="mustInclude" rows={4} placeholder="Pricing, guarantees, testimonials, service area, or anything customers need to know" /></label>
              {error && <p role="alert" className="sm:col-span-2 rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-300">{error}</p>}
              <button disabled={status === "sending"} className="sm:col-span-2 inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-blue-600 px-6 font-extrabold transition hover:bg-blue-500 disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending your brief…" : "Build my preview"}<ArrowRight size={18} /></button>
              <p className="sm:col-span-2 text-center text-xs text-white/35">No payment details required. We’ll only use this information to create and deliver your preview.</p>
            </motion.form>}</AnimatePresence>
          </div></div></section>
      <footer className="border-t border-white/10 px-5 py-8 text-sm text-white/35 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between"><span>© {new Date().getFullYear()} 2FLY Digital</span><Link href="/" className="transition hover:text-white">2flydigital.com</Link></div></footer>
    </main>
  );
}
