"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion, type Variants } from "framer-motion";
import { Check, Clock, Phone, UserRound, WandSparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const ENTRY: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EXIT: [number, number, number, number] = [0.4, 0, 0.2, 1];
const STAGE_MS = 1500;
const OVERLAP_MS = 200;
const HOLD_MS = 1000;
const TOTAL_STAGES = 6;

type StageIdx = 0 | 1 | 2 | 3 | 4 | 5;

const stages = [
  {
    label: "Missed call",
    sub: "Sarasota · Roof leak",
    tone: "rose",
    accent: "from-rose-500/30 to-amber-500/20",
    glow: "0 0 0 1px rgba(244,63,94,.30), 0 18px 50px -20px rgba(244,63,94,.35)",
  },
  {
    label: "2FLY AI captured",
    sub: "Parsing transcript · 1.2s",
    tone: "amber",
    accent: "from-accent/25 to-accent/15",
    glow: "0 0 0 1px color-mix(in srgb, var(--accent) 25%, transparent), 0 18px 50px -20px color-mix(in srgb, var(--accent) 25%, transparent)",
  },
  {
    label: "Qualified · Urgent",
    sub: "Confidence 94%",
    tone: "emerald",
    accent: "from-accent/20 to-accent/10",
    glow: "0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent), 0 18px 50px -20px color-mix(in srgb, var(--accent) 30%, transparent)",
  },
  {
    label: "Routed to owner",
    sub: "Mike Harlan · SLA rule",
    tone: "emerald",
    accent: "from-accent/20 to-accent/10",
    glow: "0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent), 0 18px 50px -20px color-mix(in srgb, var(--accent) 35%, transparent)",
  },
  {
    label: "Estimate sent",
    sub: "response time",
    tone: "emerald",
    accent: "from-accent/20 to-accent/10",
    glow: "0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent), 0 20px 60px -16px color-mix(in srgb, var(--accent) 40%, transparent)",
  },
  {
    label: "Booked job",
    sub: "Tomorrow · 10:30 AM",
    tone: "emerald",
    accent: "from-accent/35 to-accent/15",
    glow: "0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent), 0 24px 70px -10px color-mix(in srgb, var(--accent) 55%, transparent)",
  },
] as const;

const chipsParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const chipItem: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: ENTRY } },
  exit: { opacity: 0, y: -6, scale: 0.96, transition: { duration: 0.3, ease: EXIT } },
};

function ResponseTimer({ active }: { active: boolean }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    const start = performance.now();
    const duration = 1300;

    const step = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setSeconds(Math.round(eased * 47));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <span className="font-medium tabular-nums tracking-tight text-accent">
      00:{(active ? seconds : 0).toString().padStart(2, "0")}
    </span>
  );
}

function StageIcon({ stage, paused }: { stage: StageIdx; paused: boolean }) {
  if (stage === 0) {
    return (
      <span className="relative inline-flex items-center justify-center">
        <Phone size={18} className="text-rose-300" />
        <motion.span
          aria-hidden
          className="absolute -inset-1 rounded-full ring-2 ring-rose-400/50"
          animate={paused ? { opacity: 0.25, scale: 1.05 } : { opacity: [0.7, 0, 0.7], scale: [0.85, 1.4, 0.85] }}
          transition={paused ? { duration: 0.5, ease: EXIT } : { duration: 1.4, ease: "linear", repeat: Infinity }}
        />
      </span>
    );
  }
  if (stage === 1) return <WandSparkles size={18} className="text-amber-200" />;
  if (stage === 2) return <Check size={18} className="text-accent" />;
  if (stage === 3) return <UserRound size={18} className="text-accent" />;
  if (stage === 4) return <Clock size={18} className="text-accent" />;
  return <Check size={18} className="text-accent" />;
}

function LeadCard({ stage, paused }: { stage: StageIdx; paused: boolean }) {
  const current = stages[stage];
  const isBooked = stage === 5;

  return (
    <motion.article
      layout
      layoutId="lead-card"
      transition={{ layout: { duration: 0.7, ease: ENTRY } }}
      animate={{ boxShadow: current.glow }}
      className="relative overflow-hidden rounded-md bg-[#101219]/80 backdrop-blur"
      style={{ willChange: "transform" }}
    >
      <motion.div
        aria-hidden
        animate={isBooked && !paused ? { opacity: [0.45, 0.95, 0.45] } : { opacity: 0.7 }}
        transition={isBooked && !paused ? { duration: 2.2, ease: "linear", repeat: Infinity } : { duration: 0.6, ease: ENTRY }}
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${current.accent}`}
      />

      <div className="px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex items-start gap-3">
          <motion.span
            key={`icon-${stage}`}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: ENTRY }}
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/[0.04] ring-1 ring-white/10"
          >
            <StageIcon stage={stage} paused={paused} />
          </motion.span>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`label-${stage}`}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -4, opacity: 0 }}
                transition={{ duration: 0.4, ease: ENTRY }}
                className="truncate text-[13px] font-bold tracking-tight text-[#f0ebe4]"
              >
                {current.label}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`sub-${stage}`}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 0.78 }}
                exit={{ y: -4, opacity: 0 }}
                transition={{ duration: 0.4, ease: ENTRY, delay: 0.04 }}
                className="mt-0.5 flex items-center gap-1.5 truncate text-[11.5px] text-[#c4b8a8]"
              >
                {stage === 4 ? (
                  <>
                    <span>response time</span>
                    <span aria-hidden>·</span>
                    <ResponseTimer active={!paused} />
                  </>
                ) : (
                  current.sub
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-3 min-h-[26px]">
          <AnimatePresence mode="wait" initial={false}>
            {stage === 1 && (
              <motion.p
                key="transcript"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: ENTRY }}
                className="font-mono text-[11px] leading-snug text-[#c4b8a8]/75"
              >
                &ldquo;...ceiling started leaking after the storm last night...&rdquo;
              </motion.p>
            )}
            {stage === 2 && (
              <motion.div
                key="chips"
                variants={chipsParent}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-wrap gap-1.5"
              >
                {["Urgent", "Residential", "Insurance · Yes", "~$8,400"].map((chip) => (
                  <motion.span
                    key={chip}
                    variants={chipItem}
                    className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-medium text-[#d8cfc2] ring-1 ring-white/10 first:bg-accent/15 first:text-accent first:ring-accent/30"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            )}
            {stage === 3 && (
              <motion.div
                key="owner"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: ENTRY }}
                className="flex items-center gap-2 text-[11.5px] text-[#c4b8a8]"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-[10px] font-bold text-accent ring-1 ring-accent/30">
                  M
                </span>
                <span>Pinged via SLA rule · 12s</span>
              </motion.div>
            )}
            {stage === 5 && (
              <motion.div
                key="booked"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: ENTRY }}
                className="flex items-center gap-2 text-[11.5px] text-accent/90"
              >
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px] shadow-[0_0_24px_var(--glow)]" />
                <span>On owner&apos;s calendar</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

function Lane({
  label,
  sub,
  icon,
  highlight,
  empty,
  children,
}: {
  label: string;
  sub?: string;
  icon?: ReactNode;
  highlight: boolean;
  empty: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="mb-2 flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.16em] text-[#c4b8a8]/55">
        {icon}
        <span>{label}</span>
        {sub && <span className="ml-1 normal-case tracking-normal text-[#c4b8a8]/45">· {sub}</span>}
      </div>
      <motion.div
        animate={{
          borderColor: highlight ? "color-mix(in srgb, var(--accent) 28%, transparent)" : "rgba(255,255,255,0.08)",
          backgroundColor: highlight ? "color-mix(in srgb, var(--accent) 3.5%, transparent)" : "rgba(255,255,255,0.012)",
        }}
        transition={{ duration: 0.7, ease: ENTRY }}
        className="relative min-h-[124px] rounded-md border border-dashed p-3"
      >
        {children}
        {empty && (
          <div className="absolute inset-0 flex items-center justify-center text-[11px] text-[#c4b8a8]/45">
            {label === "Owner inbox" ? "Awaiting routed lead..." : "Idle"}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function LeadLifecycle() {
  const reducedMotion = useReducedMotion() ?? false;
  const [stage, setStage] = useState<StageIdx>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || paused) return;

    const isLast = stage === TOTAL_STAGES - 1;
    const wait = isLast ? STAGE_MS + HOLD_MS : STAGE_MS - OVERLAP_MS;
    const id = setTimeout(() => {
      setStage((current) => ((current + 1) % TOTAL_STAGES) as StageIdx);
    }, wait);

    return () => clearTimeout(id);
  }, [stage, paused, reducedMotion]);

  const displayStage: StageIdx = reducedMotion ? 5 : stage;
  const inOwnerLane = displayStage >= 3;

  return (
    <MotionConfig reducedMotion="user" transition={reducedMotion ? { duration: 0 } : undefined}>
      <motion.div
        role="img"
        aria-label="A contractor lead moves through 2FLY: missed call captured by AI, qualified as urgent, routed to the owner, estimate sent in 47 seconds, job booked."
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
        animate={{ opacity: paused && !reducedMotion ? 0.78 : 1 }}
        transition={{ duration: 0.6, ease: ENTRY }}
        className="group relative isolate w-full overflow-hidden rounded-md border border-accent/20 bg-[#08110d] p-5 outline-none shadow-2xl shadow-[0_0_24px_var(--glow)] focus-visible:ring-2 focus-visible:ring-accent/40 sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_55%),radial-gradient(circle_at_85%_100%,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px]"
        />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c4b8a8]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px] shadow-[0_0_24px_var(--glow)]" />
            <span>Live lead pipeline</span>
          </div>
          <div className="flex items-center gap-1.5">
            {stages.map((_, index) => (
              <motion.span
                key={index}
                animate={{
                  width: index === displayStage ? 20 : 6,
                  backgroundColor: index <= displayStage ? "var(--accent)" : "rgba(255,255,255,0.12)",
                  opacity: index <= displayStage ? 1 : 0.7,
                }}
                transition={{ duration: 0.6, ease: ENTRY }}
                className="h-1 rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-6">
          <Lane label="Incoming" highlight={!inOwnerLane} empty={inOwnerLane}>
            {!inOwnerLane && <LeadCard stage={displayStage} paused={paused} />}
          </Lane>
          <Lane
            label="Owner inbox"
            sub="Mike"
            icon={<UserRound size={12} />}
            highlight={inOwnerLane}
            empty={!inOwnerLane}
          >
            {inOwnerLane && <LeadCard stage={displayStage} paused={paused} />}
          </Lane>
        </div>

        <div className="mt-5 flex items-center justify-between text-[10.5px] text-[#c4b8a8]/50">
          <span>{reducedMotion ? "Static preview · reduced motion" : paused ? "Paused" : "Auto-playing · hover to pause"}</span>
          <span className="tabular-nums">9.00s loop</span>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
