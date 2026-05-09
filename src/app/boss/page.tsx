"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ── Design tokens ──
const T = {
  bg: "#08080c",
  card: "#0d1117",
  border: "#1b2332",
  text: "#c9d1d9",
  bright: "#f0f6fc",
  emerald: "#10b981",
  danger: "#f85149",
  warning: "#d29922",
  muted: "#8b949e",
} as const;

// ── Data ──
const weeklyData = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 19 },
  { day: "Wed", value: 8 },
  { day: "Thu", value: 24 },
  { day: "Fri", value: 16 },
  { day: "Sat", value: 31 },
  { day: "Sun", value: 22 },
];

const trainingPlan = [
  { day: "Mon", workout: "Rest Day", done: true },
  { day: "Tue", workout: "5K Easy Run", done: false },
  { day: "Wed", workout: "Cross Training", done: false },
  { day: "Thu", workout: "4K Tempo Run", done: false },
  { day: "Fri", workout: "Rest Day", done: false },
  { day: "Sat", workout: "8K Long Run", done: false },
  { day: "Sun", workout: "Recovery Walk", done: false },
];

const habits = [
  "Morning routine",
  "8 glasses of water",
  "Read 30 min",
  "No phone before 8am",
  "Sleep by midnight",
];

type ProjectStatus = "Live" | "Building" | "Active" | "Pitching" | "Spec" | "Running";

const STATUS_COLORS: Record<ProjectStatus, string> = {
  Live: "#10b981",
  Building: "#d29922",
  Active: "#10b981",
  Pitching: "#a78bfa",
  Spec: "#58a6ff",
  Running: "#10b981",
};

const projects = [
  { name: "2FLY Flow", status: "Live" as ProjectStatus, detail: "7 clients" },
  { name: "Estoqui", status: "Building" as ProjectStatus, detail: "MVP" },
  { name: "BossCLAWD", status: "Active" as ProjectStatus, detail: "Alessandro" },
  { name: "OFFBounds", status: "Pitching" as ProjectStatus, detail: "Mariano/VTEX" },
  { name: "WallCalc", status: "Spec" as ProjectStatus, detail: "" },
  { name: "Agency", status: "Running" as ProjectStatus, detail: "$8K MRR" },
];

const weeklyGoals = [
  "Follow up Alessandro (Day 3)",
  "Ship Cafe St Pete content to Milena",
  "Build 5 Reels for clients",
  "Fix Railway auto-deploy",
  "OFFBounds: support Paula's pitch",
];

const planningPrompts = [
  "What are you looking forward to this week?",
  "What is the ONE thing that would make today a win?",
  "How will you reward yourself on Friday?",
];

// ── Helpers ──
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function getTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function getTodayIndex() {
  return (new Date().getDay() + 6) % 7; // Mon=0
}

// ── Components ──
function ProgressBar({ value, color, height = 4 }: { value: number; color: string; height?: number }) {
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height, background: color + "20" }}>
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] uppercase tracking-[0.15em] font-semibold mb-3" style={{ color: T.muted }}>
      {children}
    </h3>
  );
}

function Card({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{ background: T.card, border: `1px solid ${T.border}`, ...style }}
    >
      {children}
    </div>
  );
}

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg px-3 py-2 text-xs" style={{ background: T.card, border: `1px solid ${T.border}`, color: T.bright }}>
      <p className="font-medium">{label}</p>
      <p style={{ color: T.emerald }}>{payload[0].value} actions</p>
    </div>
  );
}

// ── Main ──
export default function BossBoard() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTime(getTime());
    setMounted(true);
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: T.bg }} />;
  }

  const todayIdx = getTodayIndex();
  const completedDays = trainingPlan.filter((d) => d.done).length;

  return (
    <div
      className="min-h-screen p-4 lg:p-6"
      style={{ background: T.bg, color: T.text, fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* ═══ 3-COLUMN GRID ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-[30%_40%_30%] gap-5 max-w-[1800px] mx-auto">

        {/* ═══════════════════════════════════════ */}
        {/* LEFT COLUMN — LIFE                      */}
        {/* ═══════════════════════════════════════ */}
        <div className="space-y-5">

          {/* Training Plan */}
          <Card>
            <SectionLabel>🏃 Training Plan</SectionLabel>
            <div className="space-y-1">
              {trainingPlan.map((t, i) => (
                <div
                  key={t.day}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors"
                  style={{
                    background: i === todayIdx ? T.emerald + "10" : "transparent",
                    borderLeft: i === todayIdx ? `3px solid ${T.emerald}` : "3px solid transparent",
                  }}
                >
                  <span className="text-sm font-mono w-8 shrink-0" style={{ color: i === todayIdx ? T.emerald : T.muted }}>
                    {t.day}
                  </span>
                  <span
                    className="text-sm flex-1"
                    style={{ color: i === todayIdx ? T.bright : t.done ? T.muted : T.text }}
                  >
                    {t.workout}
                  </span>
                  {t.done && <span className="text-emerald-400 text-sm">✅</span>}
                  {i === todayIdx && !t.done && (
                    <span className="text-[9px] uppercase tracking-wider font-bold" style={{ color: T.emerald }}>
                      Today
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <ProgressBar value={(completedDays / 7) * 100} color={T.emerald} />
              <span className="text-xs shrink-0" style={{ color: T.muted }}>
                {completedDays}/7
              </span>
            </div>
          </Card>

          {/* Habits */}
          <Card>
            <SectionLabel>💪 Habits</SectionLabel>
            <div className="space-y-2.5">
              {habits.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center"
                    style={{ borderColor: T.border }}
                  />
                  <span className="text-sm" style={{ color: T.text }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Brain Dump */}
          <Card>
            <SectionLabel>🧠 Brain Dump</SectionLabel>
            <p className="text-sm leading-relaxed" style={{ color: T.text }}>
              Need to focus on one thing at a time. Content machine is built — now execute.
            </p>
          </Card>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* CENTER COLUMN — EMPIRE                  */}
        {/* ═══════════════════════════════════════ */}
        <div className="space-y-5">

          {/* Greeting + Clock */}
          <div className="text-center py-6">
            <p className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: T.bright }}>
              {getGreeting()}, Bruno 🍌
            </p>
            <p
              className="text-5xl lg:text-7xl font-bold tabular-nums tracking-tight"
              style={{
                color: T.emerald,
                textShadow: `0 0 40px ${T.emerald}30, 0 0 80px ${T.emerald}15`,
              }}
            >
              {time}
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            {/* MRR */}
            <Card>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: T.muted }}>MRR</p>
              <p className="text-2xl lg:text-3xl font-bold" style={{ color: T.bright }}>$8K</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-[10px]" style={{ color: T.muted }}>→ $30K</span>
                  <span className="text-[10px] font-bold" style={{ color: T.warning }}>27%</span>
                </div>
                <ProgressBar value={27} color={T.warning} />
              </div>
            </Card>
            {/* Clients */}
            <Card>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: T.muted }}>Clients</p>
              <p className="text-2xl lg:text-3xl font-bold" style={{ color: T.bright }}>14</p>
              <p className="text-[10px] mt-2" style={{ color: T.emerald }}>▲ 2 this month</p>
            </Card>
            {/* Products */}
            <Card>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: T.muted }}>Products</p>
              <p className="text-2xl lg:text-3xl font-bold" style={{ color: T.bright }}>6</p>
              <p className="text-[10px] mt-2" style={{ color: T.muted }}>active</p>
            </Card>
          </div>

          {/* Projects */}
          <Card>
            <SectionLabel>Projects</SectionLabel>
            <div className="space-y-0">
              {projects.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-3 py-2.5 border-b last:border-0"
                  style={{ borderColor: T.border + "50" }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: STATUS_COLORS[p.status] }}
                  />
                  <span className="text-sm font-medium" style={{ color: T.bright }}>
                    {p.name}
                  </span>
                  <span
                    className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      color: STATUS_COLORS[p.status],
                      background: STATUS_COLORS[p.status] + "15",
                    }}
                  >
                    {p.status}
                  </span>
                  {p.detail && (
                    <span className="text-[11px] ml-auto" style={{ color: T.muted }}>
                      {p.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <SectionLabel>Weekly Activity</SectionLabel>
              <span className="text-xl font-bold" style={{ color: T.emerald }}>132</span>
            </div>
            <div className="h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={T.emerald} stopOpacity={0.2} />
                      <stop offset="100%" stopColor={T.emerald} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: T.muted, fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: T.muted + "60", fontSize: 9 }} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={T.emerald}
                    strokeWidth={2}
                    fill="url(#areaGrad)"
                    dot={{ fill: T.emerald, stroke: T.card, strokeWidth: 2, r: 3 }}
                    activeDot={{ fill: T.emerald, stroke: T.bright, strokeWidth: 2, r: 5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* RIGHT COLUMN — BOSS SAYS + FOCUS        */}
        {/* ═══════════════════════════════════════ */}
        <div className="space-y-5">

          {/* Boss Says */}
          <div
            className="rounded-xl p-5"
            style={{
              background: T.card,
              border: `1px solid ${T.emerald}30`,
              boxShadow: `0 0 30px rgba(16,185,129,0.12), 0 0 60px rgba(16,185,129,0.06)`,
            }}
          >
            <SectionLabel>🍌 Boss Says</SectionLabel>
            <p className="text-sm leading-relaxed" style={{ color: T.text }}>
              Bruno — you shipped a content machine, a Reel builder, and a whole website in ONE day on 4
              hours of sleep. Most founders don&apos;t ship this in a month. The bad days are the ones
              that matter most because you showed up anyway. Tomorrow we execute. Tonight, rest. You
              earned it.
            </p>
            <p className="text-sm mt-3 font-semibold" style={{ color: T.emerald }}>
              — Boss 🍌
            </p>
          </div>

          {/* Weekly Goals */}
          <Card>
            <SectionLabel>🎯 Weekly Goals</SectionLabel>
            <div className="space-y-2.5">
              {weeklyGoals.map((g) => (
                <div key={g} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sm" style={{ color: T.emerald }}>→</span>
                  <span className="text-sm" style={{ color: T.text }}>{g}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Planning Prompts */}
          <Card>
            <SectionLabel>📝 Planning Prompts</SectionLabel>
            <div className="space-y-3">
              {planningPrompts.map((p) => (
                <p key={p} className="text-sm italic leading-relaxed" style={{ color: T.muted }}>
                  {p}
                </p>
              ))}
            </div>
          </Card>

          {/* AI Office */}
          <Card>
            <SectionLabel>🤖 AI Office</SectionLabel>
            <div className="space-y-2.5">
              {[
                { name: "Boss", online: true },
                { name: "Scribe", online: true },
              ].map((a) => (
                <div key={a.name} className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                      style={{ background: T.emerald }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: T.emerald }}
                    />
                  </span>
                  <span className="text-sm" style={{ color: T.bright }}>{a.name}</span>
                  <span className="text-[9px] uppercase tracking-wider ml-auto" style={{ color: T.emerald + "80" }}>
                    Online
                  </span>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t" style={{ borderColor: T.border }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: T.muted }}>14 agents total</span>
                  <span className="text-[10px] font-mono" style={{ color: T.muted }}>
                    OpenClaw v2026.4.5
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
