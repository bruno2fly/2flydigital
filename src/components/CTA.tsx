"use client";

import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="cta" className="relative px-6 py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px]" />
      </div>

      <AnimatedSection>
        <div className="relative mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center md:p-16">
          {/* Accent line at top */}
          <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

          <h2 className="text-3xl font-bold text-[var(--color-text-bright)] sm:text-4xl">
            Ready to build something
            <br />
            <span className="text-[var(--color-accent)]">different?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[var(--color-text)]">
            No 12-month contracts. No bloated teams. Just a founder who gives a damn and an AI
            that never stops working. Let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://discord.gg/clawd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-dark)]"
            >
              Start a Conversation
            </a>
            <a
              href="mailto:hello@2flydigital.com"
              className="rounded-lg border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-text-bright)] transition-colors hover:border-[var(--color-accent)]/40"
            >
              hello@2flydigital.com
            </a>
          </div>

          <p className="mt-6 text-xs text-[var(--color-text)]/60">
            No commitment. No pitch deck. Just a real conversation about what you need.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
