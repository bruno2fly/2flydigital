"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "14+", label: "Active Clients", detail: "and growing" },
  { value: "50K+", label: "Content Pieces Shipped", detail: "posts, ads, stories" },
  { value: "2", label: "Team Members", detail: "1 human + 1 AI" },
  { value: "24/7", label: "AI Never Sleeps", detail: "always optimizing" },
];

export default function Results() {
  return (
    <section id="results" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Results
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f0ebe4] sm:text-4xl">
            Real Numbers, No Fluff
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#c4b8a8]">
            We don&apos;t sell vanity metrics. We build systems that grow businesses.
          </p>
        </AnimatedSection>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08}>
              <div className="rounded-xl border border-[#1a1a22] bg-[#0f0f14] p-6 text-center">
                <p className="text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[#f0ebe4]">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-[#c4b8a8]">{stat.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Social proof note */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 rounded-xl border border-[#1a1a22] bg-[#0f0f14] p-8 md:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <svg className="mx-auto h-8 w-8 text-accent/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 text-lg leading-relaxed text-[#f0ebe4]">
                We&apos;re not here to tell you we &quot;10x&apos;d&quot; someone&apos;s ROAS with a magic funnel.
                We build real systems — AI-powered content pipelines, automated ad management,
                and client dashboards that give you full visibility. Our clients stick around
                because the work speaks for itself.
              </p>
              <p className="mt-4 text-sm text-[#c4b8a8]">
                — The 2FLY approach
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
