"use client";

import AnimatedSection from "./AnimatedSection";

const products = [
  {
    name: "2FLY Flow",
    tagline: "Client Portal & Content Engine",
    description:
      "Where clients track campaigns, approve content, and see real-time results. A full production pipeline — from brief to published — powered by AI workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    badge: "SaaS",
  },
  {
    name: "BossCLAWD",
    tagline: "AI Business Intelligence Agent",
    description:
      "An AI agent that understands your business, monitors your metrics, and tells you what to do next. Think of it as a CMO that never sleeps and always has receipts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    badge: "AI Agent",
  },
  {
    name: "2FLY Agency",
    tagline: "Full-Service Digital Marketing",
    description:
      "Social media, Meta ads, Google Business, content production, and brand strategy. 14+ active clients trust us to move fast and get results. No fluff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    badge: "Services",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text-bright)] sm:text-4xl">
            Products &amp; Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-text)]">
            Software we ship. Campaigns we run. Results we own.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.12}>
              <div className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all hover:border-[var(--color-accent)]/30">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent)]/5">
                    {product.icon}
                  </div>
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-text)]">
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-bright)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {product.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text)]">
                  {product.description}
                </p>

                {/* Link */}
                <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 7h12M8 2l5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
