'use client'

import { useInView } from '@/hooks/use-in-view'

const stats = [
  { value: '3x', label: 'Average ROAS' },
  { value: '40%', label: 'Lower Cost Per Lead' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '$500K+', label: 'Ad Spend Managed' },
  { value: '10', label: 'Years of Experience' },
  { value: '95%', label: 'Client Retention' },
]

export function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p
            className={`text-sm tracking-widest uppercase text-muted-foreground mb-3 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Results & Impact
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-serif ${
              isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            Numbers that matter
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="text-4xl lg:text-6xl xl:text-7xl font-serif text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
