"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "You Talk, We Listen",
    description:
      "We learn your business, your goals, and what hasn't worked before. No 47-page onboarding doc — a real conversation.",
    side: "human",
  },
  {
    num: "02",
    title: "AI Does the Research",
    description:
      "BossCLAWD analyzes your market, competitors, and audience. In minutes, not weeks. It finds patterns humans miss.",
    side: "ai",
  },
  {
    num: "03",
    title: "We Build the Strategy",
    description:
      "Human creativity meets AI insights. We craft campaigns, content, and funnels that are grounded in data — not guesswork.",
    side: "human",
  },
  {
    num: "04",
    title: "Ship, Measure, Iterate",
    description:
      "We launch fast, track everything in 2FLY Flow, and optimize continuously. You see it all — real-time, no black box.",
    side: "ai",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative px-6 py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text-bright)] sm:text-4xl">
            Human Instinct × AI Speed
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-text)]">
            Every step is a collaboration between a human who cares and an AI that never stops learning.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative flex gap-6 md:gap-12">
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:w-[calc(50%-3rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-[var(--color-text-bright)]">
                        {step.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                          step.side === "ai"
                            ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                            : "bg-[var(--color-text-bright)]/5 text-[var(--color-text)]"
                        }`}
                      >
                        {step.side === "ai" ? "AI" : "Human"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
