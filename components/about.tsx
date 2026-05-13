'use client'

import { useInView } from '@/hooks/use-in-view'
import Image from 'next/image'

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-muted order-2 lg:order-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="2FLY Digital team collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p
              className={`text-sm tracking-widest uppercase text-muted-foreground mb-3 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              About Us
            </p>
            <h2
              className={`text-3xl lg:text-5xl font-serif mb-8 ${
                isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              Partners, not vendors
            </h2>
            <div
              className={`space-y-6 text-muted-foreground leading-relaxed ${
                isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
              }`}
            >
              <p className="text-lg">
                {"We're"} a lean, senior team based in New York City, NY — serving clients across the US and Brazil. 
                No account managers, no runaround — you work directly with the people doing the work.
              </p>
              <p>
                {"We've"} managed over $500K in ad spend and helped 14+ businesses grow through 
                performance marketing that actually performs.
              </p>
              <p>
                We believe in collaboration over transactions, strategy over tactics, 
                and results over reports. When you work with us, you get a team that 
                cares about your success as much as you do.
              </p>
            </div>

            {/* Values */}
            <div
              className={`mt-10 grid grid-cols-2 gap-6 ${
                isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'
              }`}
            >
              <div>
                <h4 className="font-medium mb-1">Strategy First</h4>
                <p className="text-sm text-muted-foreground">
                  Every decision backed by data and insight
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Direct Access</h4>
                <p className="text-sm text-muted-foreground">
                  Work with senior talent, always
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Results Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Focused on outcomes, not outputs
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Long-term Partners</h4>
                <p className="text-sm text-muted-foreground">
                  Building relationships that last
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
