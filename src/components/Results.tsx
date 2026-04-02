"use client";

import AnimatedSection from "./AnimatedSection";

const metrics = [
  { value: "719", label: "Clicks in 30 Days", suffix: "" },
  { value: "5x", label: "Return on Ad Spend", suffix: "" },
  { value: "3.98%", label: "Click-Through Rate", suffix: "" },
  { value: "$1,830", label: "Weekly Ad Spend Managed", suffix: "" },
];

const testimonials = [
  {
    quote: "2FLY completely transformed our online presence. Within the first month, we saw results we hadn't achieved in a year on our own.",
    author: "Local Restaurant Owner",
    role: "Google Business & Social Media Client",
  },
  {
    quote: "The AI-powered approach actually makes a difference. They don't just post content — they know what will work before it goes live.",
    author: "E-commerce Brand Founder",
    role: "Meta Ads & Strategy Client",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Proven Results</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">Numbers Don&apos;t Lie</h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            Real metrics from real campaigns. This is what data-driven marketing looks like.
          </p>
        </AnimatedSection>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-[#0f0f14] border border-[#1a1a22] text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                  {m.value}{m.suffix}
                </div>
                <p className="text-sm text-[#c4b8a8]">{m.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="p-6 rounded-xl bg-[#0f0f14] border border-[#1a1a22] h-full">
                <svg className="w-8 h-8 text-emerald-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-[#c4b8a8] text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-[#f0ebe4] font-medium text-sm">{t.author}</p>
                  <p className="text-emerald-400/60 text-xs">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
