import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { About } from "@/components/sections/about"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { FloatingOrbs } from "@/components/floating-orbs"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-rich-black text-whisper">
      <FloatingOrbs />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
