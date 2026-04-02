"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Deep dive into your brand, audience, competitors, and goals. We analyze everything before we plan anything.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "AI-powered insights meet human creativity. We build a custom roadmap designed for measurable growth.",
  },
  {
    num: "03",
    title: "Execute",
    description: "Content goes live, ads launch, profiles optimize. Every move is intentional, tracked, and data-informed.",
  },
  {
    num: "04",
    title: "Optimize",
    description: "Continuous A/B testing, performance analysis, and iteration. We never stop improving your results.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">Our Process</h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            A proven framework that turns strategy into results, every single time.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1a1a22] to-transparent" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div
                  className={`md:flex items-center gap-12 md:py-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-xl bg-[#0f0f14] border border-[#1a1a22] inline-block">
                      <span className="text-emerald-500 text-sm font-mono font-bold">{step.num}</span>
                      <h3 className="text-2xl font-bold text-[#f0ebe4] mt-1 mb-2">{step.title}</h3>
                      <p className="text-[#c4b8a8] text-sm leading-relaxed max-w-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#08080c] shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                  </div>

                  <div className="md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
