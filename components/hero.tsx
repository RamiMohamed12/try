import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, Sparkles, ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-navy-blue/20 to-dark-cerulean/10" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(2, 94, 196, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2, 94, 196, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo with glare effect */}
        <div className="flex items-center justify-center gap-4 mb-12 group">
          <div className="relative">
            <div className="absolute inset-0 bg-spiro-disco-ball/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <Cube className="w-12 h-12 text-spiro-disco-ball" />
              <Sparkles className="w-4 h-4 text-whisper absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-whisper tracking-wider font-heading">INVO</h1>
        </div>

        {/* Main heading with shimmer effect */}
        <div className="relative mb-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-whisper via-spiro-disco-ball to-sapphire mb-6 tracking-tight font-heading leading-none">
            Fresh, Clean
          </h2>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sapphire via-spiro-disco-ball to-whisper tracking-tight font-heading leading-none">
            Invoicing
          </h2>

          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-1000" />
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-whisper/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Simplify billing with a sleek, lightweight interface designed for modern professionals who demand excellence.
        </p>

        {/* CTA Buttons with glow effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-sapphire to-spiro-disco-ball hover:from-spiro-disco-ball hover:to-sapphire text-rich-black px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-spiro-disco-ball/25 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Try It Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="group relative bg-white/5 backdrop-blur-md border border-white/20 hover:border-spiro-disco-ball/50 text-whisper hover:text-spiro-disco-ball px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </span>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-whisper/60">No credit card required • Free 14-day trial</p>
          <div className="flex items-center gap-2 text-xs text-whisper/40">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>10,000+ professionals trust Invo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
