'use client'

import { useInView } from '@/hooks/use-in-view'
import { WorkCard } from '@/components/work-card'

const projects = [
  {
    title: 'Meridian Wellness',
    description: 'Complete brand identity and e-commerce platform for a premium wellness brand, resulting in 3x revenue growth.',
    category: 'Brand Strategy / E-commerce',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop',
    featured: true,
  },
  {
    title: 'Apex Ventures',
    description: 'Website redesign and digital strategy for a leading venture capital firm.',
    category: 'Web Design / Development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    title: 'Nomad Coffee Co.',
    description: 'Performance marketing campaign that drove 150% increase in online orders.',
    category: 'Performance Marketing',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
  },
  {
    title: 'Urban Atelier',
    description: 'Full digital transformation for a boutique architecture studio.',
    category: 'Brand / Web / Marketing',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
  },
]

export function FeaturedWork() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="work" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p
              className={`text-sm tracking-widest uppercase text-muted-foreground mb-3 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Selected Work
            </p>
            <h2
              className={`text-3xl lg:text-5xl font-serif ${
                isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              Projects that speak<br className="hidden lg:block" /> for themselves
            </h2>
          </div>
          <p
            className={`text-muted-foreground max-w-md lg:text-right ${
              isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            A curated selection of work across brand strategy, web design, development, and performance marketing.
          </p>
        </div>

        {/* Projects Grid - Asymmetrical */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 ${
            isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'
          }`}
        >
          {projects.map((project, index) => (
            <WorkCard
              key={project.title}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
