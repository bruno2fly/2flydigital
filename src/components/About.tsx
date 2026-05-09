"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500 opacity-[0.02] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f0ebe4] sm:text-4xl">
            A New Kind of Agency
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Story */}
          <AnimatedSection>
            <div className="space-y-5 text-sm leading-relaxed text-[#c4b8a8]">
              <p>
                Most agencies sell you a team of 15 people and then hand your account to an
                overworked intern. We decided to build something different.
              </p>
              <p>
                <strong className="text-[#f0ebe4]">2FLY Digital</strong> is a
                two-person operation: <strong className="text-[#f0ebe4]">Bruno Lima</strong> — founder,
                strategist, and the human who actually cares about your business — and an{" "}
                <strong className="text-emerald-400">AI co-founder</strong> that handles
                research, content production, data analysis, and the kind of work that usually
                requires an entire department.
              </p>
              <p>
                We&apos;re not trying to replace humans. We&apos;re proving that one great human
                with the right AI tools can outperform an entire traditional agency. Lower
                overhead, faster execution, better results.
              </p>
              <p>
                We also build our own tools — <strong className="text-[#f0ebe4]">2FLY Flow</strong> for
                client management and <strong className="text-[#f0ebe4]">BossCLAWD</strong> for
                business intelligence — because we refused to use software that wasn&apos;t built
                for the way we work.
              </p>
            </div>
          </AnimatedSection>

          {/* Team cards */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              {/* Bruno */}
              <div className="rounded-xl border border-[#1a1a22] bg-[#0f0f14] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
                    BL
                  </div>
                  <div>
                    <p className="font-semibold text-[#f0ebe4]">Bruno Lima</p>
                    <p className="text-xs text-[#c4b8a8]">Founder &amp; Strategist</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#c4b8a8]">
                  The human half. Builds the strategy, talks to clients, makes the calls AI
                  can&apos;t. Background in digital marketing and product — obsessed with building
                  things that actually work.
                </p>
              </div>

              {/* AI */}
              <div className="rounded-xl border border-emerald-500/20 bg-[#0f0f14] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f0ebe4]">AI Co-Founder</p>
                    <p className="text-xs text-emerald-400">Always On</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#c4b8a8]">
                  The other half. Handles research, content drafts, data analysis, ad
                  optimization, and client reporting. Works 24/7, never asks for PTO, and gets
                  smarter every week.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
