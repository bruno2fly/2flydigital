"use client";

import { Activity, Bot, Gauge, Globe2, LineChart, MousePointerClick, Radar, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const sectionCopy = {
  eyebrow: "CONTRACTOR GROWTH SYSTEM",
  headline: "One connected system, not disconnected marketing tactics.",
  body: "Built to help contractors get found, followed up with, and chosen. Each channel feeds the next, so the business sees one operating picture instead of scattered reports and missed leads.",
};

const stats = [
  { label: "Visibility", value: "96" },
  { label: "Response", value: "37s" },
  { label: "Pipeline", value: "Live" },
];

type ModuleCard = {
  title: string;
  label: string;
  metric: string;
  status: string;
  icon: LucideIcon;
};

const leftModules: ModuleCard[] = [
  {
    title: "Google Ads",
    label: "Demand Capture",
    metric: "+42%",
    status: "High-intent search live",
    icon: MousePointerClick,
  },
  {
    title: "SEO",
    label: "Organic Visibility",
    metric: "Top 3",
    status: "Service-area pages indexed",
    icon: Search,
  },
  {
    title: "AI Search",
    label: "GEO Visibility",
    metric: "82",
    status: "Answer-engine presence rising",
    icon: Globe2,
  },
];

const rightModules: ModuleCard[] = [
  {
    title: "Website",
    label: "Conversion Layer",
    metric: "6.8%",
    status: "Quote paths optimized",
    icon: Gauge,
  },
  {
    title: "AI Agent",
    label: "Instant Qualification",
    metric: "24/7",
    status: "Website conversations captured",
    icon: Bot,
  },
  {
    title: "Follow-Up",
    label: "Speed to Lead",
    metric: "0:37",
    status: "AI response sequence armed",
    icon: Activity,
  },
  {
    title: "Intelligence",
    label: "Lead Reporting",
    metric: "Live",
    status: "Pipeline signals unified",
    icon: LineChart,
  },
];

const paths = [
  "M220 116 C315 134 365 190 438 256",
  "M220 246 C315 248 368 270 438 302",
  "M220 376 C315 360 370 336 438 318",
  "M740 96 C640 122 592 184 522 256",
  "M740 206 C642 222 592 258 522 292",
  "M740 316 C642 314 592 306 522 306",
  "M740 426 C638 394 590 346 522 326",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function ModuleCardView({ module, align = "left" }: { module: ModuleCard; align?: "left" | "right" }) {
  const Icon = module.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-md border border-white/10 bg-[#11131b]/92 p-4 shadow-xl shadow-black/20 backdrop-blur"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded border border-accent/20 bg-accent/8 text-accent">
            <Icon size={17} strokeWidth={2} />
          </div>
          <p className="text-[10px] font-black uppercase leading-4 text-accent">{module.label}</p>
        </div>
        <motion.span
          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_16px_var(--glow)]"
          animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.24, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
      </div>
      <div className={`flex items-end justify-between gap-4 ${align === "right" ? "md:flex-row-reverse md:text-right" : ""}`}>
        <div>
          <h4 className="text-xl font-black leading-tight text-[#f0ebe4]">{module.title}</h4>
          <p className="mt-3 text-xs leading-5 text-[#c4b8a8]">{module.status}</p>
        </div>
        <p className="shrink-0 rounded border border-accent/20 bg-accent/8 px-3 py-2 text-sm font-black text-accent">
          {module.metric}
        </p>
      </div>
    </motion.div>
  );
}

function EngineCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardVariants}
      className="relative z-20 mx-auto w-full max-w-[360px] rounded-md border border-accent/35 bg-[#07110d]/95 p-6 text-center shadow-2xl shadow-[0_0_24px_var(--glow)] backdrop-blur"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded border border-accent/30 bg-accent/10 text-accent">
        <Radar size={21} strokeWidth={2} />
      </div>
      <p className="text-xs font-black uppercase text-accent">2FLY GROWTH ENGINE</p>
      <h3 className="mt-3 text-2xl font-black leading-tight text-[#f0ebe4]">
        Contractor Growth System
      </h3>
      <div className="mt-6 rounded border border-white/10 bg-white/[0.04] p-4 text-left">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase text-[#c4b8a8]">Opportunity Score</p>
          <p className="text-sm font-black text-[#f0ebe4]">94/100</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-accent shadow-[0_0_16px_var(--glow)]"
            initial={{ width: reduceMotion ? "94%" : "18%" }}
            whileInView={{ width: "94%" }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 1.4, ease: "easeOut", delay: 0.35 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function GrowthEngineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="system" className="relative overflow-hidden px-5 py-20 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={cardVariants} className="text-sm font-bold uppercase text-accent">
            {sectionCopy.eyebrow}
          </motion.p>
          <motion.h2
            variants={cardVariants}
            className="mt-4 text-3xl font-black leading-[1.05] text-[#f0ebe4] sm:text-4xl md:text-5xl"
          >
            {sectionCopy.headline}
          </motion.h2>
          <motion.p variants={cardVariants} className="mt-5 text-base leading-7 text-[#c4b8a8] sm:text-lg">
            {sectionCopy.body}
          </motion.p>
          <motion.div variants={containerVariants} className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants} className="rounded-md border border-white/10 bg-[#101219] p-5">
                <p className="text-sm font-black uppercase leading-5 text-accent">{stat.label}</p>
                <p className="mt-4 text-3xl font-black leading-none text-[#f0ebe4]">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-md border border-white/10 bg-[#0b0e13] p-5 shadow-2xl shadow-black/35 md:min-h-[650px] md:p-8"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(240,235,228,.75) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,228,.75) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_38%),radial-gradient(circle_at_18%_78%,rgba(240,235,228,.07),transparent_26%)]" />

          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 960 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="growth-engine-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="color-mix(in srgb, var(--accent) 4%, transparent)" />
                <stop offset="48%" stopColor="var(--accent-hover)" />
                <stop offset="100%" stopColor="color-mix(in srgb, var(--accent) 8%, transparent)" />
              </linearGradient>
              <filter id="growth-engine-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {paths.map((path, index) => (
              <g key={path}>
                <path d={path} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#growth-engine-line)"
                  strokeDasharray="20 130"
                  strokeLinecap="round"
                  strokeWidth="2"
                  filter="url(#growth-engine-glow)"
                  animate={reduceMotion ? undefined : { strokeDashoffset: [0, -150] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "linear", delay: index * 0.28 }}
                />
              </g>
            ))}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15 md:block"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 hidden h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:block"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 grid gap-4 md:hidden">
            <EngineCard />
            {[...leftModules, ...rightModules].map((module) => (
              <ModuleCardView key={module.title} module={module} />
            ))}
          </div>

          <div className="relative z-10 hidden min-h-[590px] md:block">
            <div className="absolute left-0 top-2 grid w-[29%] gap-4">
              {leftModules.map((module) => (
                <ModuleCardView key={module.title} module={module} />
              ))}
            </div>
            <div className="absolute right-0 top-2 grid w-[31%] gap-4">
              {rightModules.map((module) => (
                <ModuleCardView key={module.title} module={module} align="right" />
              ))}
            </div>
            <div className="absolute left-1/2 top-[46%] w-[min(42%,380px)] -translate-x-1/2 -translate-y-1/2">
              <EngineCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
