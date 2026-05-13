'use client'

import { useInView } from '@/hooks/use-in-view'

export function Insights() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="insights" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p
            className={`text-sm tracking-widest uppercase text-muted-foreground mb-3 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Insights
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-serif mb-6 ${
              isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            Selected thinking
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            Coming soon — strategy, marketing, and growth insights from the 2FLY team.
          </p>
        </div>
      </div>
    </section>
  )
}
