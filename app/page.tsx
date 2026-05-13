import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

import { ServicesBlock } from '@/components/services-block'
import { StatsSection } from '@/components/stats-section'
import { About } from '@/components/about'
import { Insights } from '@/components/insights'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesBlock />
      <StatsSection />
      <About />
      <Insights />
      <ContactCTA />
      <Footer />
    </main>
  )
}
