import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Coffee, MapPin, Star } from "lucide-react";
import { instantPreviewConfig } from "@/config/instant-preview";
import { verifyPreviewSession } from "@/lib/instant-preview/auth";
import { getPreview } from "@/lib/instant-preview/storage";
import PreviewAccessForm from "./PreviewAccessForm";

export const metadata: Metadata = { title: "Private Preview | 2FLY", robots: { index: false, follow: false } };

function PreviewPage({ businessName, paymentUrl, isPaid }: { businessName: string; paymentUrl: string; isPaid: boolean }) {
  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#16130f]">
      {!isPaid && <><div className="fixed inset-x-0 top-0 z-50 flex min-h-14 items-center justify-between gap-4 bg-blue-600 px-4 py-3 text-white shadow-xl sm:px-8"><span className="text-xs font-black tracking-[.22em]">PREVIEW · PRIVATE & TIME-LIMITED</span><a href={paymentUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-blue-700 transition hover:bg-blue-50">Love it? Pay to unlock <ArrowRight size={14} /></a></div><div aria-hidden className="pointer-events-none fixed inset-0 z-40 grid place-items-center overflow-hidden"><span className="-rotate-12 select-none text-[18vw] font-black tracking-[-.08em] text-blue-700/[.055]">PREVIEW</span></div></>}
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 ${!isPaid ? "mt-14" : ""}`}><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-[#d65b35] text-white"><Coffee size={19} /></div><span className="text-lg font-black tracking-tight">{businessName}</span></div><a href="#visit" className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-bold">Visit the roastery</a></nav>
      <section className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div><p className="text-xs font-black uppercase tracking-[.25em] text-[#b84627]">Roasted by hand · Delivered fresh</p><h1 className="mt-5 max-w-3xl text-6xl font-black leading-[.88] tracking-[-.065em] sm:text-8xl">Better mornings start with better beans.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-black/60">Small-batch coffee selected for sweetness, roasted for clarity, and shipped while it is still at its best. Your daily cup should feel like something worth slowing down for.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#coffee" className="inline-flex min-h-13 items-center gap-2 rounded-full bg-[#17130f] px-7 font-bold text-white">Shop fresh roasts <ArrowRight size={17} /></a><span className="flex items-center gap-2 px-4 text-sm font-semibold"><Star size={16} fill="#d65b35" className="text-[#d65b35]" /> 4.9 from local coffee people</span></div></div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#c8a37c]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ead0aa,transparent_30%),linear-gradient(145deg,transparent_45%,rgba(66,32,15,.35))]" /><div className="absolute left-1/2 top-1/2 grid aspect-[.72] w-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3 place-items-center rounded-lg bg-[#f4ead8] p-6 text-center shadow-2xl"><Coffee size={46} className="text-[#b84627]" /><p className="mt-4 text-2xl font-black uppercase leading-none">House<br />Morning</p><p className="mt-4 text-[10px] font-bold uppercase tracking-[.2em] text-black/50">Chocolate · Cherry · Honey</p></div></div>
      </section>
      <section id="coffee" className="bg-[#17130f] px-5 py-24 text-white sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#e87955]">Coffee with a point of view</p><div className="mt-5 grid gap-10 lg:grid-cols-2"><h2 className="text-5xl font-black tracking-[-.05em] sm:text-7xl">Freshness you can taste. Sourcing you can trust.</h2><div className="grid gap-6 sm:grid-cols-2">{["Roasted every Tuesday","Whole bean or ground","Free local delivery","Sourced with care"].map(item => <div key={item} className="border-t border-white/20 pt-5"><CheckCircle2 className="text-[#e87955]" /><p className="mt-5 text-lg font-bold">{item}</p></div>)}</div></div></div></section>
      <section id="visit" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2"><div><MapPin className="text-[#b84627]" /><h2 className="mt-5 text-5xl font-black tracking-[-.05em]">Come taste what’s roasting.</h2><p className="mt-5 max-w-lg text-lg text-black/55">Drop into our neighborhood roastery for a pour-over, a fresh bag, and a conversation about what you like in the cup.</p></div><div className="rounded-3xl bg-[#dfc5a5] p-8 sm:p-12"><p className="text-sm font-black uppercase tracking-widest text-[#8f351f]">The roastery</p><p className="mt-6 text-2xl font-bold">142 Market Street<br />Open Tue–Sun, 7am–3pm</p><a href="mailto:hello@example.com" className="mt-8 inline-flex items-center gap-2 font-bold underline decoration-[#b84627] decoration-2 underline-offset-4">Plan your visit <ArrowRight size={17} /></a></div></section>
      <footer className="border-t border-black/10 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-black/45"><span>{businessName}</span><Image src="/brand/2fly-mark.svg" alt="Built by 2FLY" width={35} height={35} /></div></footer>
    </main>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preview = await getPreview(slug);
  if (!preview) notFound();
  // Expiration is intentionally evaluated at request time for this dynamic, private route.
  // eslint-disable-next-line react-hooks/purity
  const expired = !preview.isPaid && Date.parse(preview.expiresAt) <= Date.now();
  if (expired) return <main className="grid min-h-screen place-items-center bg-[#08090b] px-5 text-center text-white"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-400">Preview expired</p><h1 className="mt-4 text-4xl font-black">This private preview is no longer available.</h1><p className="mx-auto mt-4 max-w-lg text-white/45">Contact 2FLY if you would like us to reactivate it.</p></div></main>;
  const token = (await cookies()).get(`preview_${slug}`)?.value;
  const authenticated = preview.isPaid || verifyPreviewSession(token, slug);
  if (!authenticated) return <PreviewAccessForm slug={slug} businessName={preview.businessName} />;
  return <PreviewPage businessName={preview.businessName} isPaid={preview.isPaid} paymentUrl={preview.paymentUrl || instantPreviewConfig.paymentLink} />;
}
