import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/site/Logo";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation | 2FLY",
  description:
    "Tell us about your business and we will map out the fastest growth wins. No commitment, no pitch deck — just a real working session.",
};

const PHONE_DISPLAY = "(781) 606-2445";
const PHONE_HREF = "tel:+17816062445";

const bullets = [
  "We review your market, current visibility, and lead flow.",
  "We pinpoint where leads are leaking and what to fix first.",
  "You walk away with a clear next step — even if we never work together.",
];

export default function ConsultationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-muted">
      <header className="relative z-10 px-5 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Logo className="text-xl" />
          <Link
            href="/"
            className="text-sm font-medium text-muted transition hover:text-text"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="relative px-5 pb-24 pt-8 sm:px-6 sm:pt-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(0,82,255,0.14),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(46,107,255,0.12),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <section className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/80 px-4 py-2 text-sm font-bold text-accent shadow-card backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,82,255,0.6)]" />
              Free strategy session
            </p>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              Book your <span className="text-gradient">free consultation</span>.
            </h1>
            <p className="mt-5 text-lg leading-7 text-muted">
              Tell us what you need help with. We will reach out within one business day to
              schedule a working session and map your fastest growth wins.
            </p>

            <ul className="mt-8 space-y-3 text-sm leading-6 text-text">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.5L4.7 8.5L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="shadow-card mt-10 rounded-2xl border border-border bg-white/80 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Prefer to talk now?
              </p>
              <a
                href={PHONE_HREF}
                className="mt-3 inline-flex items-center gap-3 text-2xl font-black leading-none text-text transition hover:text-accent sm:text-3xl"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent-soft text-accent"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-sm text-muted">
                Direct line. Mon–Fri, 9a–6p ET.
              </p>
            </div>
          </section>

          <section className="relative">
            <div className="bg-accent-gradient-soft pointer-events-none absolute -inset-3 rounded-3xl blur-2xl" />
            <div className="shadow-card-lg relative rounded-2xl border border-border bg-white p-6 sm:p-8">
              <ConsultationForm phoneDisplay={PHONE_DISPLAY} phoneHref={PHONE_HREF} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
