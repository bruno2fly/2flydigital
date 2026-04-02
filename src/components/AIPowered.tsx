"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function AIPowered() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Our Edge</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">
            While Other Agencies Guess,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              We Know
            </span>
          </h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            We built our own AI tools. Not because it&apos;s trendy — because guessing with your money isn&apos;t a strategy.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="text-center p-8 rounded-xl bg-[#0f0f14] border border-[#1a1a22]">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f0ebe4] mb-2">AI Analysis</h3>
              <p className="text-sm text-[#c4b8a8]">Proprietary tools that analyze your market, audience, and competitors in real time.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center p-8 rounded-xl bg-[#0f0f14] border border-emerald-500/20 relative">
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl font-bold text-emerald-400">+</span>
              </motion.div>
              <h3 className="text-lg font-semibold text-[#f0ebe4] mb-2">Human Creativity</h3>
              <p className="text-sm text-[#c4b8a8]">AI gives us data. Humans give it soul. The combination is unbeatable.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center p-8 rounded-xl bg-[#0f0f14] border border-[#1a1a22]">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f0ebe4] mb-2">Better Results</h3>
              <p className="text-sm text-[#c4b8a8]">Data-driven decisions mean less waste, faster growth, and higher ROI.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
