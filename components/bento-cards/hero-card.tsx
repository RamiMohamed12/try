import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, Sparkles, ArrowRight, Play } from "lucide-react"

export function HeroCard() {
  return (
    <div className="group relative h-full min-h-[400px] lg:min-h-[500px]">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sapphire/20 to-spiro-disco-ball/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-spiro-disco-ball/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-2xl p-3">
              <Cube className="w-8 h-8 text-spiro-disco-ball" />
              <Sparkles className="w-3 h-3 text-whisper absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-whisper tracking-wider font-heading">INVO</h1>
        </div>

        {/* Hero title */}
        <div className="mb-6">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-whisper via-spiro-disco-ball to-sapphire mb-4 tracking-tight font-heading leading-tight">
            Fresh, Clean
          </h2>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sapphire via-spiro-disco-ball to-whisper tracking-tight font-heading leading-tight">
            Invoicing
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-whisper/80 mb-8 max-w-2xl leading-relaxed">
          Simplify billing with a sleek, lightweight interface designed for modern professionals who demand excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="group/btn relative bg-gradient-to-r from-sapphire to-spiro-disco-ball hover:from-spiro-disco-ball hover:to-sapphire text-rich-black px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-spiro-disco-ball/25 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Try It Free
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="group/btn relative bg-white/5 backdrop-blur-md border border-white/20 hover:border-spiro-disco-ball/50 text-whisper hover:text-spiro-disco-ball px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </span>
          </Button>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl" />
      </div>
    </div>
  )
}
