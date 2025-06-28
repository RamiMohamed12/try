import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent" />

        <div className="relative">
          <h3 className="text-5xl md:text-7xl font-bold text-whisper mb-8 tracking-tight">
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-spiro-disco-ball to-sapphire">
              Your Invoicing?
            </span>
          </h3>

          <p className="text-xl text-whisper/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who've made invoicing effortless, beautiful, and profitable with Invo.
          </p>

          <Button
            size="lg"
            className="group bg-gradient-to-r from-spiro-disco-ball to-sapphire hover:from-sapphire hover:to-spiro-disco-ball text-rich-black px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-spiro-disco-ball/25 transition-all duration-500 mb-6"
          >
            <span className="flex items-center gap-2">
              Try Invo Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <p className="text-sm text-whisper/60">No credit card needed • Cancel anytime • 24/7 support</p>
        </div>
      </div>
    </section>
  )
}
