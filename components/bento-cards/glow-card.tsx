import { Zap, Shield } from "lucide-react"

interface GlowCardProps {
  title: string
  description: string
  gradient: string
}

export function GlowCard({ title, description, gradient }: GlowCardProps) {
  const isLightning = title.includes("Lightning")
  const Icon = isLightning ? Zap : Shield

  return (
    <div className="group relative h-full min-h-[300px]">
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 flex flex-col justify-center items-center text-center">
        {/* Icon with enhanced glow */}
        <div className="relative mb-6">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
          />
          <div
            className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${gradient} backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-10 h-10 text-whisper" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-whisper mb-4 font-heading">{title}</h3>

        {/* Description */}
        <p className="text-whisper/70 leading-relaxed">{description}</p>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-whisper/20 rounded-full animate-pulse" />
        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-whisper/30 rounded-full animate-bounce delay-1000" />

        {/* Ring glow on hover */}
        <div
          className={`absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-spiro-disco-ball/30 transition-all duration-500`}
        />

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      </div>
    </div>
  )
}
