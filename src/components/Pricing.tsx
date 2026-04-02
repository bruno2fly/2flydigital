"use client";

import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for small businesses getting started with professional marketing.",
    features: [
      "Social media management (2 platforms)",
      "8 posts per month",
      "Basic analytics report",
      "Google Business Profile setup",
      "Monthly strategy call",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,000",
    description: "For businesses ready to scale with data-driven marketing strategies.",
    features: [
      "Social media management (4 platforms)",
      "16 posts per month",
      "Meta Ads management",
      "AI-powered analytics dashboard",
      "Content production (photo/video)",
      "Bi-weekly strategy calls",
      "2FLY Flow portal access",
    ],
    cta: "Scale Up",
    featured: true,
  },
  {
    name: "Premium",
    price: "$2,000",
    description: "Full-service marketing for brands that demand excellence and growth.",
    features: [
      "Everything in Growth",
      "Unlimited platforms",
      "30+ posts per month",
      "Advanced AI campaign optimization",
      "Brand strategy & positioning",
      "Priority support",
      "Weekly strategy calls",
      "Custom reporting & insights",
    ],
    cta: "Go Premium",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            No hidden fees, no long-term contracts. Just results-driven marketing at every level.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`p-6 rounded-xl border h-full flex flex-col ${
                  plan.featured
                    ? "bg-[#0f0f14] border-emerald-500/30 relative"
                    : "bg-[#0f0f14] border-[#1a1a22]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                )}
                {plan.featured && (
                  <span className="inline-block text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#f0ebe4]">{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-4xl font-bold text-[#f0ebe4]">{plan.price}</span>
                  <span className="text-[#c4b8a8] text-sm">/mo</span>
                </div>
                <p className="text-sm text-[#c4b8a8] mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#c4b8a8]">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                    plan.featured
                      ? "bg-emerald-500 hover:bg-emerald-400 text-[#08080c]"
                      : "border border-[#1a1a22] hover:border-emerald-500/30 text-[#c4b8a8] hover:text-[#f0ebe4]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
