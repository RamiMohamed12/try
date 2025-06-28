import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, Sparkles, ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-navy-blue/20 to-dark-cerulean/10" />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-spiro-disco-ball/20 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <Cube className="w-12 h-12 text-spiro-disco-ball" />
              <Sparkles className="w-4 h-4 text-whisper absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-whisper tracking-wider">INVO</h1>
        </div>

        {/* Main headline */}
        <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-whisper via-spiro-disco-ball to-sapphire mb-6 tracking-tight leading-tight">
          Fresh, Clean Invoicing
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-whisper/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Simplify billing with a sleek, lightweight interface designed for modern freelancers and small businesses who
          demand excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-sapphire to-spiro-disco-ball hover:from-spiro-disco-ball hover:to-sapphire text-rich-black px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-spiro-disco-ball/25 transition-all duration-500"
          >
            <span className="flex items-center gap-2">
              Try It Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-spiro-disco-ball/50 text-whisper hover:text-spiro-disco-ball px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              See Demo
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
