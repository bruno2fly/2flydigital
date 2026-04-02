"use client";

import AnimatedSection from "./AnimatedSection";

const team = [
  {
    name: "Bruno Lima",
    role: "Founder & CEO",
    description: "Brazilian-American entrepreneur who built his own AI marketing tools. Obsessed with data, automation, and results.",
  },
  {
    name: "Milena",
    role: "Social Media Manager",
    description: "Content strategist who manages all client social media with precision and creative flair.",
  },
  {
    name: "Guilherme",
    role: "Designer",
    description: "Visual storyteller creating brand identities and marketing assets that stop the scroll.",
  },
  {
    name: "Igor",
    role: "Designer",
    description: "Creative designer crafting compelling visuals that elevate every campaign we touch.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <AnimatedSection>
            <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">About 2FLY</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#f0ebe4] mb-6">
              Built Different,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                On Purpose
              </span>
            </h2>
            <div className="space-y-4 text-[#c4b8a8] leading-relaxed">
              <p>
                2FLY started with a simple frustration: marketing agencies that charge premium prices
                for guesswork. As a Brazilian-American founder, Bruno brought a different perspective —
                one rooted in hustle, technical skill, and an obsession with measurable outcomes.
              </p>
              <p>
                We didn&apos;t just hire AI consultants — we built our own tools. From automated reporting
                dashboards to predictive content analysis, every piece of our tech stack exists because
                we needed it to deliver better results.
              </p>
              <p>
                Today, 2FLY is a small but mighty team. We move fast, stay transparent, and treat your
                budget like it&apos;s our own. Because when you grow, we grow.
              </p>
            </div>
          </AnimatedSection>

          {/* Team */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#0f0f14] border border-[#1a1a22] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 font-semibold text-sm">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#f0ebe4] font-semibold text-sm">{member.name}</h3>
                    <p className="text-emerald-400/60 text-xs mb-1">{member.role}</p>
                    <p className="text-[#c4b8a8] text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
