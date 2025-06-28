import { BentoGrid } from "@/components/bento-grid"

export function Features() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold text-whisper mb-6 tracking-tight">Why Choose Invo?</h3>
          <p className="text-xl text-whisper/70 max-w-3xl mx-auto leading-relaxed">
            Built for modern professionals who value simplicity, speed, and stunning design
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid />
      </div>
    </section>
  )
}
