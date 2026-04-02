"use client";

import AnimatedSection from "./AnimatedSection";

export default function ClientPortal() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Client Portal</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-4">
            Your Marketing, Transparent
          </h2>
          <p className="text-[#c4b8a8] max-w-2xl mx-auto">
            Every client gets access to 2FLY Flow — our custom dashboard where you can see
            exactly what we&apos;re doing, track results in real time, and approve content before it goes live.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-[#1a1a22] bg-[#0f0f14] overflow-hidden">
              {/* Browser chrome mockup */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0f] border-b border-[#1a1a22]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#1a1a22]" />
                  <div className="w-3 h-3 rounded-full bg-[#1a1a22]" />
                  <div className="w-3 h-3 rounded-full bg-[#1a1a22]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#0f0f14] rounded-md px-3 py-1 text-xs text-[#c4b8a8]/50 text-center">
                    app.2flyflow.com
                  </div>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[#f0ebe4] font-semibold">Campaign Dashboard</h3>
                    <p className="text-xs text-[#c4b8a8]/60">Last updated: Real-time</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">Live</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#08080c] border border-[#1a1a22]">
                    <p className="text-xs text-[#c4b8a8]/60 mb-1">Impressions</p>
                    <p className="text-lg font-bold text-[#f0ebe4]">24.8K</p>
                    <p className="text-xs text-emerald-400">+12.4%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#08080c] border border-[#1a1a22]">
                    <p className="text-xs text-[#c4b8a8]/60 mb-1">Engagement</p>
                    <p className="text-lg font-bold text-[#f0ebe4]">4.2%</p>
                    <p className="text-xs text-emerald-400">+0.8%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#08080c] border border-[#1a1a22]">
                    <p className="text-xs text-[#c4b8a8]/60 mb-1">Conversions</p>
                    <p className="text-lg font-bold text-[#f0ebe4]">186</p>
                    <p className="text-xs text-emerald-400">+23.1%</p>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 rounded-lg bg-[#08080c] border border-[#1a1a22] flex items-end justify-around px-4 pb-4 pt-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="w-full max-w-[20px] bg-gradient-to-t from-emerald-500/40 to-emerald-500/80 rounded-sm mx-0.5"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
