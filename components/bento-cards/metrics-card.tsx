import { TrendingUp, Users, Zap } from "lucide-react"

export function MetricsCard() {
  const metrics = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
    { icon: TrendingUp, value: "500%", label: "Growth" },
  ]

  return (
    <div className="group relative h-full min-h-[400px] lg:min-h-[500px]">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-spiro-disco-ball/20 to-sapphire/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiro-disco-ball/20 to-sapphire/20 backdrop-blur-md rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-spiro-disco-ball" />
          </div>
          <h3 className="text-2xl font-bold text-whisper font-heading">Performance</h3>
        </div>

        {/* Metrics */}
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 rounded-xl flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-whisper" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-whisper font-heading">{metric.value}</div>
                <div className="text-sm text-whisper/70">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-whisper/60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Trusted by professionals worldwide</span>
          </div>
        </div>

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      </div>
    </div>
  )
}
