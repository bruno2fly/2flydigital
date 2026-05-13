'use client'

import Link from 'next/link'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/use-in-view'

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center pt-20 lg:pt-24 pb-12 relative overflow-hidden bg-[#08080f]"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <p
            className={`text-sm tracking-widest uppercase text-zinc-500 mb-6 lg:mb-8 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Design + Development + Strategy
          </p>

          {/* Main Headline */}
          <h1 className="space-y-2 lg:space-y-3">
            <span
              className={`block text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-white ${
                isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              We craft digital
            </span>
            <span
              className={`block text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-white ${
                isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'
              }`}
            >
              experiences for
            </span>
            <span
              className={`block text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-[#2563eb] ${
                isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'
              }`}
            >
              ambitious brands.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            className={`mt-8 lg:mt-12 text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed ${
              isInView ? 'animate-fade-in-up stagger-4' : 'opacity-0'
            }`}
          >
            A creative studio helping forward-thinking companies build 
            memorable brands, high-converting websites, and marketing 
            strategies that drive real growth.
          </p>

          {/* CTA Row */}
          <div
            className={`mt-10 lg:mt-14 flex flex-col sm:flex-row gap-4 ${
              isInView ? 'animate-fade-in-up stagger-5' : 'opacity-0'
            }`}
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              <Link href="#contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-zinc-600 bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900">
              <Link href="#work" className="flex items-center gap-2">
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 lg:mt-24 flex flex-wrap gap-x-12 gap-y-4 text-sm ${
              isInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'
            }`}
          >
            <div>
              <span className="text-2xl lg:text-3xl font-serif text-white">100+</span>
              <span className="ml-2 text-zinc-500">clients served</span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-serif text-white">10</span>
              <span className="ml-2 text-zinc-500">years experience</span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-serif text-white">$500K+</span>
              <span className="ml-2 text-zinc-500">ad spend managed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto pt-12 relative z-10">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span>Scroll to explore</span>
        </Link>
      </div>
    </section>
  )
}
