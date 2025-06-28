import { Zap, Palette, Shield, Sparkles, TrendingUp, Users } from "lucide-react"

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Lightning Fast - spans 1 column */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 h-full min-h-[300px] flex flex-col justify-center items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-10 h-10 text-whisper" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-whisper mb-4">Lightning Fast</h3>
          <p className="text-whisper/70 leading-relaxed">Create and send professional invoices in seconds</p>
        </div>
      </div>

      {/* Beautiful Design - spans 2 columns */}
      <div className="md:col-span-2 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 h-full min-h-[300px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8 text-whisper" />
            </div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md rounded-xl">
              <Sparkles className="w-6 h-6 text-spiro-disco-ball animate-pulse" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-whisper mb-4">Beautiful Design</h3>
          <p className="text-lg text-whisper/80 leading-relaxed mb-6">
            Stunning templates that make your invoices stand out. Customizable to match your brand perfectly.
          </p>
          <div className="grid grid-cols-2 gap-4">
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
      </div>

      {/* Secure & Safe - spans 1 column */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 h-full min-h-[300px] flex flex-col justify-center items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-whisper" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-whisper mb-4">Secure & Safe</h3>
          <p className="text-whisper/70 leading-relaxed">Bank-level encryption protects your data</p>
        </div>
      </div>

      {/* Performance Metrics - spans 2 columns */}
      <div className="md:col-span-2 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-spiro-disco-ball/20 to-sapphire/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 h-full min-h-[300px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiro-disco-ball/20 to-sapphire/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-spiro-disco-ball" />
            </div>
            <h3 className="text-3xl font-bold text-whisper">Trusted Performance</h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Users, value: "10K+", label: "Active Users" },
              { icon: Zap, value: "99.9%", label: "Uptime" },
              { icon: TrendingUp, value: "500%", label: "Growth" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 rounded-xl mb-3">
                  <metric.icon className="w-6 h-6 text-whisper" />
                </div>
                <div className="text-2xl font-bold text-whisper">{metric.value}</div>
                <div className="text-sm text-whisper/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Automation - spans 2 columns */}
      <div className="md:col-span-2 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-spiro-disco-ball/20 to-sapphire/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 group-hover:border-white/20 h-full min-h-[300px] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiro-disco-ball/20 to-sapphire/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-spiro-disco-ball" />
            </div>
            <h3 className="text-3xl font-bold text-whisper">Smart Automation</h3>
          </div>
          <p className="text-lg text-whisper/80 leading-relaxed">
            Automated reminders, recurring invoices, and intelligent insights to grow your business effortlessly.
          </p>
        </div>
      </div>
    </div>
  )
}
