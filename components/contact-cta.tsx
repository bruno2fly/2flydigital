'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ContactCTA() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [email, setEmail] = useState('')

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2
            className={`text-3xl lg:text-5xl xl:text-6xl font-serif mb-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {"Let's"} build something great together
          </h2>

          {/* Subtext */}
          <p
            className={`text-lg text-background/70 mb-10 max-w-xl mx-auto ${
              isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            Ready to elevate your brand? {"We'd"} love to hear about your project 
            and explore how we can help you achieve your goals.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${
              isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 bg-background text-foreground hover:bg-background/90"
            >
              <Link href="mailto:hello@2flydigital.com" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-background/30 text-background hover:bg-background/10"
            >
              <Link href="tel:+1234567890">
                Schedule a Call
              </Link>
            </Button>
          </div>

          {/* Email Signup */}
          <div
            className={`max-w-md mx-auto ${
              isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'
            }`}
          >
            <p className="text-sm text-background/50 mb-4">
              Or subscribe to our newsletter for insights and updates
            </p>
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission
                setEmail('')
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-background/10 border-background/20 text-background placeholder:text-background/40"
              />
              <Button 
                type="submit"
                size="icon"
                className="rounded-full bg-background text-foreground hover:bg-background/90 h-10 w-10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
