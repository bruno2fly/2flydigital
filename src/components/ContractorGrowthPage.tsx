"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, MapPin, MousePointerClick, Search } from "lucide-react";
import GrowthEngineSection from "./GrowthEngineSection";
import LeadLifecycle from "./LeadLifecycle";
import Logo from "./site/Logo";

const consultationHref = "/consultation";
const phoneDisplay = "(781) 606-2445";
const phoneHref = "tel:+17816062445";

const losses = [
  {
    title: "You are invisible when the best jobs start searching.",
    body: "Homeowners and commercial buyers compare contractors across Google, maps, local pages, reviews, and AI answers before they ever call.",
  },
  {
    title: "Your speed to lead is too slow for today’s buyer.",
    body: "A missed call, delayed text, or late estimate follow-up can hand a ready-to-book job to the contractor who responds first.",
  },
  {
    title: "Your website is not doing sales work.",
    body: "Most contractor sites show services and photos, but they do not qualify intent, route leads, recover visitors, or make the next step obvious.",
  },
  {
    title: "Your marketing data lives in separate places.",
    body: "Ads, SEO, forms, calls, missed opportunities, and close rates rarely connect, so owners cannot see what is actually producing revenue.",
  },
];

const proofStats = [
  {
    value: "5 min",
    label: "lead response target",
  },
  {
    value: "7",
    label: "connected growth layers",
  },
  {
    value: "24/7",
    label: "site qualification",
  },
];

const visibilityChecks = [
  {
    title: "Google visibility",
    body: "How easy it is to find you for profitable services in your actual market.",
  },
  {
    title: "Local presence",
    body: "The trust signals buyers compare across maps, reviews, service pages, and listings.",
  },
  {
    title: "Speed basics",
    body: "Fast checks for obvious page-speed, mobile, and first-impression issues.",
  },
  {
    title: "Missed conversions",
    body: "Where visitors, callers, and estimate requests may be dropping before they book.",
  },
];

const leakMap = [
  {
    stage: "Search demand",
    leak: "Competitors capture the intent before buyers ever see you.",
    fix: "Paid search, local SEO, and AI Search signals around profitable jobs and service areas.",
  },
  {
    stage: "Landing decision",
    leak: "Visitors cannot quickly understand proof, fit, urgency, or next step.",
    fix: "Conversion pages that make the offer, service path, trust signals, and action obvious.",
  },
  {
    stage: "First response",
    leak: "Calls are missed, forms sit too long, and buyers keep shopping.",
    fix: "Instant routing, text/email response, context capture, and owner alerts.",
  },
  {
    stage: "Estimate follow-up",
    leak: "Good opportunities go cold after the first conversation.",
    fix: "Nurture sequences, stale-opportunity recovery, reminders, and pipeline visibility.",
  },
];

const trades = [
  "General contractors",
  "Roofers",
  "Remodelers",
  "HVAC companies",
  "Plumbers",
  "Electricians",
  "Fencing companies",
  "Landscapers",
  "Concrete crews",
  "Home service teams",
];

const pipelineSteps = [
  {
    title: "Attract",
    body: "Capture high-intent demand from Google, local search, service pages, reviews, and AI-assisted research.",
  },
  {
    title: "Qualify",
    body: "Separate urgent, high-value, serviceable jobs from low-fit inquiries before your team wastes time.",
  },
  {
    title: "Route",
    body: "Send the right lead details to the right person with urgency, job type, source, and next action attached.",
  },
  {
    title: "Recover",
    body: "Bring back missed calls, old estimates, stalled forms, and leads that need one more useful nudge.",
  },
  {
    title: "Learn",
    body: "Connect source, quality, speed, booked estimates, and revenue direction so the owner can make better calls.",
  },
];

const offerItems = [
  "Google Ads management and search-term optimization",
  "Local SEO priorities and service-page direction",
  "AI Search / GEO visibility work",
  "Landing page and website conversion improvements",
  "Basic follow-up for new form and call opportunities",
  "Monthly reporting with lead, visibility, and next-action priorities",
];

const addOns = [
  {
    name: "AI Follow-Up System",
    price: "+$400/month",
    body: "Instant text and email workflows that keep new leads, estimate requests, and open opportunities moving.",
  },
  {
    name: "AI Website Agent",
    price: "+$500/month",
    body: "A trained site agent that answers buyer questions, qualifies intent, collects context, and routes the next step.",
  },
  {
    name: "Lead Dashboard / Intelligence Layer",
    price: "+$300/month",
    body: "A clearer owner view of source, status, response speed, lead quality, and pipeline movement.",
  },
  {
    name: "Missed Lead Recovery",
    price: "+$400/month",
    body: "Recovery sequences for missed calls, stale forms, unscheduled estimates, and old opportunities worth reactivating.",
  },
  {
    name: "Custom Automation / CRM Workflow",
    price: "Starting at +$500/month",
    body: "Custom routing, notifications, CRM cleanup, job-type logic, pipeline automation, and operational workflows.",
  },
  {
    name: "Premium Website / Landing Page Build",
    price: "$1,500 to $3,500+ one-time",
    body: "A premium conversion surface for service lines, campaigns, local pages, and high-intent traffic.",
  },
];

const differences = [
  {
    title: "Built around lead speed, not agency deliverables.",
    body: "Traditional agencies sell channels. 2FLY connects the moment someone searches, lands, calls, fills a form, asks a question, or needs follow-up.",
  },
  {
    title: "Designed for owners who cannot babysit marketing.",
    body: "The system is structured to make priorities visible: what generated demand, what leaked, where response time slipped, and what should improve next.",
  },
  {
    title: "AI is operational, not decorative.",
    body: "The AI layer is there to qualify, route, answer, recover, summarize, and help small teams act faster. It is not a chatbot pasted onto a generic package.",
  },
  {
    title: "Conversion comes before more traffic.",
    body: "Weak pages and slow follow-up waste good media spend. 2FLY tightens the site, lead capture, and follow-up before scaling what already leaks money.",
  },
];

const faqs = [
  {
    question: "Is the $1,000/month offer the full system?",
    answer:
      "It is the core operating system. Some contractors stay there, while others add deeper follow-up, an AI website agent, dashboards, automations, missed-lead recovery, or a premium landing page when the numbers justify it.",
  },
  {
    question: "Is ad spend included?",
    answer:
      "No. Google Ads media spend stays separate and should remain in your own ad account. The monthly fee covers strategy, management, buildout, optimization, and reporting.",
  },
  {
    question: "Do we need a new website first?",
    answer:
      "Not always. If your current site can be improved quickly, we start there. If it is blocking conversion, we will recommend a sharper landing page or rebuild path.",
  },
  {
    question: "What if we already have SEO or ads running?",
    answer:
      "That can help. We audit what exists, keep what is working, remove waste, and connect the pieces into a clearer lead and follow-up system.",
  },
  {
    question: "Can this work for a small contractor team?",
    answer:
      "That is the point. The system is built to help small teams respond faster, qualify better, and recover more opportunities without immediately hiring more office staff.",
  },
  {
    question: "How is this different from hiring a traditional agency?",
    answer:
      "Most agencies manage isolated channels. 2FLY builds the operating system around how contractor revenue actually happens: being found, converting the visit, responding quickly, following up, recovering leaks, and showing the owner what is working.",
  },
];

const nextBuildChecklist = [
  "Lock the website agent to lead capture only, not general support.",
  "Define the exact fields to collect: name, phone, email, trade, city, and need.",
  "Write the short qualification flow and fallback replies.",
  "Choose the low-cost API/model for the website agent.",
  "Build the website chat widget and connect it to the contractor page.",
  "Send captured leads to email first, SMS later if needed.",
  "Test the full lead flow on desktop and mobile before launch.",
];

function PrimaryCta({ children }: { children: ReactNode }) {
  return (
    <Link
      href={consultationHref}
      className="bg-accent-gradient shadow-accent-glow inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
    >
      {children}
    </Link>
  );
}

function SecondaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-white/70 px-6 py-3 text-sm font-bold text-text backdrop-blur transition hover:border-accent/60 hover:text-accent hover:shadow-card"
    >
      {children}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-[1.05] text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{body}</p>
    </div>
  );
}

function HeroSystemVisual() {
  const signalLabels = ["Ads", "SEO", "AI", "Site", "Calls", "SMS"];

  return (
    <div className="shadow-card-lg relative min-h-[520px] overflow-hidden rounded-2xl border border-border bg-white/85 p-5 backdrop-blur-xl">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,19,48,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,19,48,.06) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(circle at 50% 45%, black 35%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,82,255,0.18),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(46,107,255,0.12),transparent_55%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25 bg-accent/[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
      />

      {signalLabels.map((label, index) => {
        const positions = [
          "left-5 top-16 sm:left-7",
          "right-5 top-20 sm:right-10",
          "left-6 top-56 sm:left-12",
          "right-6 top-60 sm:right-12",
          "left-5 bottom-24 sm:left-10 sm:bottom-20",
          "right-5 bottom-20 sm:right-10 sm:bottom-16",
        ];

        return (
          <motion.div
            key={label}
            className={`absolute ${positions[index]} shadow-card rounded-lg border border-border bg-white/95 px-4 py-3 text-sm font-bold text-text backdrop-blur`}
            animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.35 }}
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,82,255,0.6)]" />
            {label}
          </motion.div>
        );
      })}

      <motion.div
        className="shadow-card-lg absolute left-1/2 top-1/2 w-[min(78%,360px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-accent/25 bg-white/95 p-6 text-center backdrop-blur"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-accent">2FLY Operating System</p>
        <p className="mt-3 text-2xl font-black leading-tight text-text">
          Leads routed, qualified, followed up, and reported.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-muted">
          {["24/7 agent", "Fast reply", "Owner view"].map((item) => (
            <div key={item} className="rounded-md border border-border bg-accent-soft/60 px-2 py-2 font-medium">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2 text-xs text-muted sm:gap-3">
        {["Lead quality", "Response time", "Booked jobs"].map((metric, index) => (
          <motion.div
            key={metric}
            className="shadow-card rounded-lg border border-border bg-white/90 p-2 backdrop-blur sm:p-3"
            animate={{ borderColor: ["rgba(221,229,243,1)", "color-mix(in srgb, var(--accent) 45%, transparent)", "rgba(221,229,243,1)"] }}
            transition={{ duration: 5, repeat: Infinity, delay: index * 0.7 }}
          >
            <div className="h-1.5 rounded-full bg-accent-soft">
              <motion.div
                className="bg-accent-gradient h-full rounded-full"
                animate={{ width: ["35%", "78%", "48%"] }}
                transition={{ duration: 4.8, repeat: Infinity, delay: index * 0.5 }}
              />
            </div>
            <p className="mt-2 font-medium leading-tight text-text">{metric}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VisibilityCheckSection() {
  const [businessName, setBusinessName] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const hasSearchInput = businessName.trim().length > 0 || serviceArea.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="visibility-check" className="border-y border-border bg-surface-2/60 px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Free visibility check</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.04] text-text sm:text-5xl">
            See what buyers find before they ever call you.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Give us your business and service area. We will review the practical places contractor leads
            are won or lost: Google visibility, local presence, speed/performance basics, and missed
            conversion issues.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {visibilityChecks.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white/80 p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent-soft text-accent">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-black text-text">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="shadow-card-lg relative overflow-hidden rounded-2xl border border-accent/25 bg-white p-5 sm:p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(0,82,255,0.14),transparent_42%)]" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-accent">Search-style review</p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-text">
                  Check my contractor visibility
                </h3>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent-soft text-accent sm:inline-flex">
                <Search size={22} aria-hidden="true" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface-2/70 p-3">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                    Business name
                  </span>
                  <div className="flex min-h-12 items-center gap-2 rounded-lg border border-border bg-white px-3 transition focus-within:border-accent/60 focus-within:ring-2 focus-within:ring-accent/20">
                    <Search size={17} className="shrink-0 text-accent" aria-hidden="true" />
                    <input
                      value={businessName}
                      onChange={(event) => setBusinessName(event.target.value)}
                      placeholder="Riverside Roofing"
                      className="min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted/55"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                    City or service area
                  </span>
                  <div className="flex min-h-12 items-center gap-2 rounded-lg border border-border bg-white px-3 transition focus-within:border-accent/60 focus-within:ring-2 focus-within:ring-accent/20">
                    <MapPin size={17} className="shrink-0 text-accent" aria-hidden="true" />
                    <input
                      value={serviceArea}
                      onChange={(event) => setServiceArea(event.target.value)}
                      placeholder="Boston, MA"
                      className="min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted/55"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="bg-accent-gradient shadow-accent-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg md:self-end"
                >
                  Check
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Search demand", icon: Search },
                { label: "Site speed basics", icon: Gauge },
                { label: "Lead path", icon: MousePointerClick },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-border bg-white/85 p-3">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                  <p className="mt-2 text-xs font-black uppercase leading-5 tracking-wider text-text">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-accent/25 bg-accent-soft/70 p-5">
              <p className="text-sm font-black text-text">
                {submitted
                  ? "Your visibility check is ready to claim."
                  : "No fake score. No instant pretend audit."}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {submitted && hasSearchInput
                  ? "We will use those details to prepare the review before your call."
                  : "The form stages the request; 2FLY completes the actual review before the strategy call."}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={{
                    pathname: consultationHref,
                    query: { source: "visibility-check" },
                  }}
                  className="bg-accent-gradient shadow-accent-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                >
                  Claim My Free Check
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-white/80 px-6 py-3 text-sm font-bold text-text transition hover:border-accent/60 hover:text-accent"
                >
                  Call Now {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContractorGrowthPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-bg text-muted">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <Logo className="text-xl" />
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            <a className="transition hover:text-text" href="#system">
              System
            </a>
            <a className="transition hover:text-text" href="#visibility-check">
              Free Check
            </a>
            <a className="transition hover:text-text" href="#agent">
              AI Agent
            </a>
            <a className="transition hover:text-text" href="#trades">
              Trades
            </a>
            <a className="transition hover:text-text" href="#offer">
              Pricing
            </a>
            <a className="transition hover:text-text" href="#addons">
              Add-ons
            </a>
            <a className="transition hover:text-text" href="#faq">
              FAQ
            </a>
          </nav>
          <div className="hidden sm:block">
            <PrimaryCta>Claim a free check</PrimaryCta>
          </div>
          <Link
            href={consultationHref}
            className="bg-accent-gradient shadow-accent-glow inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg sm:hidden"
          >
            Book
          </Link>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-6 lg:pt-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,19,48,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,19,48,.05) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse at 50% 30%, black 35%, transparent 80%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,82,255,0.16),transparent_38%),radial-gradient(circle_at_78%_38%,rgba(46,107,255,0.12),transparent_36%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/80 px-4 py-2 text-sm font-bold text-accent shadow-card backdrop-blur"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,82,255,0.6)]" />
                AI-powered growth operating system for contractors
              </motion.p>
              <motion.h1
                className="mt-7 max-w-4xl text-5xl font-black leading-[0.96] text-text sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                The <span className="text-gradient">unfair AI advantage</span> for contractors.
              </motion.h1>
              <motion.p
                className="mt-6 max-w-2xl text-lg leading-8 text-muted"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
              >
                2FLY helps contractors get found, convert faster, qualify leads instantly, recover
                missed opportunities, and see what is working without needing a bigger team.
              </motion.p>
              <motion.div
                className="mt-9 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.36 }}
              >
                <PrimaryCta>Claim my free visibility check</PrimaryCta>
                <SecondaryCta href={phoneHref}>Call Now {phoneDisplay}</SecondaryCta>
              </motion.div>
              <motion.div
                className="mt-9 grid max-w-2xl gap-3 text-sm text-muted sm:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {["More qualified leads", "Faster follow-up", "Clearer owner reporting"].map((item) => (
                  <div key={item} className="border-l-2 border-accent/45 pl-4 font-medium">
                    {item}
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="shadow-card mt-10 grid max-w-2xl gap-3 rounded-xl border border-border bg-white/80 p-3 backdrop-blur sm:grid-cols-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.62 }}
              >
                {proofStats.map((stat) => (
                  <div key={stat.label} className="border-border px-2 py-3 sm:border-l sm:first:border-l-0">
                    <p className="text-2xl font-black leading-none text-text">{stat.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-wider text-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <HeroSystemVisual />
          </div>
        </section>

        <VisibilityCheckSection />

        <section className="border-y border-border bg-surface-2/60 px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro
              eyebrow="The reframe"
              title="Contractors are not losing because the trade got weaker."
              body="They are losing because the buying journey got faster, more fragmented, and more automated than the average contractor’s marketing stack."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {losses.map((item) => (
                <div
                  key={item.title}
                  className="shadow-card rounded-xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-card-lg"
                >
                  <h3 className="text-xl font-black leading-tight text-text">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Revenue leak map"
              title="Most contractor marketing leaks happen after the click."
              body="The page is built around the practical places revenue slips away: not enough qualified demand, weak conversion, slow response, poor follow-up, and unclear owner visibility."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {leakMap.map((item, index) => (
                <motion.div
                  key={item.stage}
                  className="shadow-card rounded-xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-card-lg"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/25 bg-accent-soft text-sm font-black text-accent">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-black leading-tight text-text">{item.stage}</h3>
                  <p className="mt-4 text-sm font-bold leading-6 text-muted">{item.leak}</p>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted">
                    {item.fix}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GrowthEngineSection />

        <section id="agent" className="border-y border-border bg-surface-2/60 px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <LeadLifecycle />
            <SectionIntro
              eyebrow="Small-team advantage"
              title="Convert more leads without hiring more office staff."
              body="The AI website agent gives visitors immediate answers, captures context, qualifies urgency, and pushes the right lead into follow-up. Your team stays focused on selling and doing the work."
            />
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Lead pipeline"
              title="From search intent to booked work, every handoff gets tighter."
              body="The system is designed around how contractor revenue actually moves, so each channel, page, agent, message, and report has a job."
              align="center"
            />
            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="shadow-card relative overflow-hidden rounded-xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-card-lg"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-80" />
                  <p className="text-xs font-black uppercase tracking-wider text-accent">Step {index + 1}</p>
                  <h3 className="mt-3 text-xl font-black text-text">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="trades" className="px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <SectionIntro
              eyebrow="Built for the trades"
              title="For contractors where one better job can change the month."
              body="The system is built around service areas, job types, proof of work, urgent requests, estimate cycles, and the reality that most teams are busy in the field."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {trades.map((trade) => (
                <div
                  key={trade}
                  className="shadow-card rounded-xl border border-border bg-white px-4 py-5 text-sm font-bold text-text transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-card-lg"
                >
                  {trade}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offer" className="border-y border-border bg-surface-2/60 px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="shadow-card-lg rounded-2xl border border-border bg-white p-7 md:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">Starting offer</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-text sm:text-5xl">
                Contractor Growth System
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
                Start with the essential operating system for lead generation, conversion, AI
                visibility, basic follow-up, and reporting. Expand when the data shows where the ceiling is.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {offerItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-surface-2/70 p-4 text-sm leading-6 text-text"
                  >
                    <span className="mr-2 font-black text-accent">/</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-card shadow-card-lg relative overflow-hidden rounded-2xl border border-accent/30 p-7 text-white md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(46,107,255,0.35),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(0,82,255,0.25),transparent_55%)]" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Starting at</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-black leading-none text-white">$1,000</span>
                  <span className="pb-2 text-sm font-bold text-white/70">/month</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/75">
                  Built for contractors who need more leads, better follow-up, more estimates, and
                  more jobs without immediately hiring more people. Ad spend is separate.
                </p>
                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Core includes</p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Google Ads, SEO / local visibility, AI Search / GEO visibility, website conversion
                    improvement, basic follow-up, and monthly reporting.
                  </p>
                </div>
                <div className="mt-7">
                  <Link
                    href={consultationHref}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-bold text-navy shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-navy"
                  >
                    Request a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="addons" className="px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <SectionIntro
                eyebrow="Expansion modules"
                title="Add only the layers your growth system needs next."
                body="The base offer gives you the core system. These add-ons deepen automation, intelligence, conversion, and recovery without turning the engagement into a vague agency retainer."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {addOns.map((addOn, index) => (
                  <motion.div
                    key={addOn.name}
                    className="shadow-card rounded-xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-card-lg"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.42, delay: index * 0.04 }}
                  >
                    <div className="flex min-h-12 items-start justify-between gap-5">
                      <h3 className="text-lg font-black leading-tight text-text">{addOn.name}</h3>
                      <p className="shrink-0 rounded-md border border-accent/25 bg-accent-soft px-3 py-2 text-right text-xs font-black text-accent">
                        {addOn.price}
                      </p>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-muted">{addOn.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface-2/60 px-5 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {differences.map((item) => (
                <div
                  key={item.title}
                  className="shadow-card rounded-xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-card-lg"
                >
                  <h3 className="text-xl font-black leading-tight text-text">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <SectionIntro
              eyebrow="Why 2FLY is different"
              title="This is not a generic contractor marketing package."
              body="It is an operating system for contractor growth: get found, qualify demand, follow up fast, convert better, recover leaks, and make decisions from one clearer view."
            />
          </div>
        </section>

        <section id="faq" className="px-5 py-20 sm:px-6 md:py-28">
          <SectionIntro
            eyebrow="Objections"
            title="Practical answers before we talk."
            body="A good contractor growth system should be clear about cost, scope, ownership, and what happens next."
            align="center"
          />
          <div className="shadow-card mx-auto mt-12 max-w-4xl divide-y divide-border rounded-2xl border border-border bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-lg font-black text-text">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="relative px-5 py-20 sm:px-6 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,82,255,0.16),transparent_45%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Next step</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-text sm:text-5xl">
              Put an <span className="text-gradient">unfair growth system</span> behind your contracting company.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
              We will review your market, current site, search visibility, lead response, and where
              the fastest win should come from.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryCta>Book My Free Consultation</PrimaryCta>
              <SecondaryCta href={phoneHref}>Call Now {phoneDisplay}</SecondaryCta>
            </div>

            <div className="shadow-card mt-12 rounded-2xl border border-border bg-white p-6 text-left">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">Contractors page checklist</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {nextBuildChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-surface-2/70 px-4 py-3 text-sm leading-6 text-text"
                  >
                    <span className="mr-2 font-black text-accent">/</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white/60 px-5 py-10 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
          <Logo className="text-xl" />
          <p>AI-powered contractor growth operating system.</p>
          <a className="transition hover:text-accent" href="mailto:hello@2flydigital.com">
            hello@2flydigital.com
          </a>
        </div>
      </footer>
    </div>
  );
}
