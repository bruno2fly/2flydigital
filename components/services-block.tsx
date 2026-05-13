'use client'

import { useInView } from '@/hooks/use-in-view'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Meta Ads',
    subtitle: 'Facebook & Instagram advertising that converts.',
    description: 'We build, manage, and optimize Meta ad campaigns from the ground up. Creative strategy, audience targeting, A/B testing, and weekly optimization — all focused on your return on ad spend.',
    capabilities: ['Campaign strategy & setup', 'Creative direction & copy', 'Audience segmentation', 'Weekly optimization & reporting', 'Retargeting & lookalike audiences'],
  },
  {
    number: '02',
    title: 'Google Ads',
    subtitle: 'Show up when your customers are searching.',
    description: 'Search, Display, and Performance Max campaigns built for conversion. We use the Google Ads API to manage campaigns with precision across our client portfolio — giving you enterprise-level optimization at agency speed.',
    capabilities: ['Search & Display campaigns', 'Performance Max', 'Keyword strategy', 'Conversion tracking', 'API-powered campaign management'],
  },
  {
    number: '03',
    title: 'Social Media Management',
    subtitle: 'Content that builds your brand every single day.',
    description: 'Strategic content calendars, professional creative, and community management across Instagram, Facebook, TikTok, and LinkedIn. We create content that looks good AND drives results.',
    capabilities: ['Content strategy & calendar', 'Professional creative (photo/video/design)', 'Caption writing & hashtag strategy', 'Community management', 'Monthly performance reports'],
  },
  {
    number: '04',
    title: 'Strategy & Reporting',
    subtitle: "You'll always know what's working — and what's not.",
    description: 'Every client gets monthly strategy sessions, clear dashboards, and honest recommendations. No fluff, no vanity metrics — just data that drives smarter decisions.',
    capabilities: ['Monthly strategy sessions', 'Custom performance dashboards', 'Campaign audits', 'Budget allocation advice', 'Competitor analysis'],
  },
]

export function ServicesBlock() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p
            className={`text-sm tracking-widest uppercase text-muted-foreground mb-3 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            What We Do
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-serif mb-6 ${
              isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            Full-stack marketing for brands that want to grow.
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            From paid ads to content to custom systems — we handle the whole picture.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group border-t border-border py-10 lg:py-14 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm text-muted-foreground font-mono">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl lg:text-3xl font-serif group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="lg:col-span-4">
                  <ul className="space-y-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 ${
            isInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'
          }`}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            <span>Discuss your project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
