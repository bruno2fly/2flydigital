"use client";

import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            Ready to elevate your brand? Get a free audit and see what AI-powered marketing can do for you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form
            className="max-w-xl mx-auto space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-[#c4b8a8] mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f14] border border-[#1a1a22] text-[#f0ebe4] placeholder-[#c4b8a8]/40 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm text-[#c4b8a8] mb-1.5">
                Business Name
              </label>
              <input
                id="business"
                type="text"
                placeholder="Your business"
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f14] border border-[#1a1a22] text-[#f0ebe4] placeholder-[#c4b8a8]/40 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm text-[#c4b8a8] mb-1.5">
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f14] border border-[#1a1a22] text-[#c4b8a8] focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                <option>Social Media Management</option>
                <option>Meta Ads</option>
                <option>Google Business Profile</option>
                <option>Content Production</option>
                <option>Brand Strategy</option>
                <option>AI-Powered Marketing</option>
                <option>Full-Service Package</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm text-[#c4b8a8] mb-1.5">
                Monthly Budget
              </label>
              <select
                id="budget"
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f14] border border-[#1a1a22] text-[#c4b8a8] focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select your budget</option>
                <option>Under $500/mo</option>
                <option>$500 - $1,000/mo</option>
                <option>$1,000 - $2,000/mo</option>
                <option>$2,000+/mo</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-[#08080c] font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-sm"
            >
              Get Your Free Audit →
            </button>

            <p className="text-center text-xs text-[#c4b8a8]/50">
              No commitment required. We&apos;ll review your current marketing and show you what&apos;s possible.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
