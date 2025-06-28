import { Palette, Shield, Sparkles } from "lucide-react"

export function FeatureCard() {
  return (
    <div className="group relative h-full min-h-[300px]">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(14, 204, 237, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14, 204, 237, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          {/* Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8 text-whisper" />
            </div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md rounded-xl">
              <Shield className="w-6 h-6 text-spiro-disco-ball" />
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-spiro-disco-ball/20 to-sapphire/20 backdrop-blur-md rounded-lg">
              <Sparkles className="w-5 h-5 text-whisper animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-bold text-whisper mb-4 font-heading">Beautiful Design</h3>

          {/* Description */}
          <p className="text-lg text-whisper/80 leading-relaxed mb-6">
            Stunning templates that make your invoices stand out. Customizable to match your brand perfectly with
            professional layouts and modern typography.
          </p>

          {/* Features list */}
          <div className="space-y-3">
            {["Professional templates", "Brand customization", "Modern typography", "Responsive design"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-spiro-disco-ball rounded-full" />
                  <span className="text-whisper/70 text-sm">{feature}</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-spiro-disco-ball/30 rounded-full animate-pulse" />
        <div className="absolute bottom-6 right-8 w-2 h-2 bg-sapphire/40 rounded-full animate-bounce delay-500" />

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      </div>
    </div>
  )
}
