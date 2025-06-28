import { Zap, Palette, Shield, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create and send professional invoices in seconds. No lag, no waiting, just pure efficiency.",
      gradient: "from-yellow-400/20 to-orange-500/20",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning templates that make your invoices stand out. Customizable to match your brand perfectly.",
      gradient: "from-purple-400/20 to-pink-500/20",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption. Compliant with all major standards.",
      gradient: "from-green-400/20 to-blue-500/20",
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description: "Automated reminders, recurring invoices, and intelligent insights to grow your business.",
      gradient: "from-spiro-disco-ball/20 to-sapphire/20",
    },
  ]

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold text-whisper mb-6 tracking-tight font-heading">
            Why Choose Invo?
          </h3>
          <p className="text-xl text-whisper/70 max-w-3xl mx-auto leading-relaxed">
            Built for the modern professional who values simplicity, speed, and stunning design
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sapphire/20 to-spiro-disco-ball/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:border-white/20 h-full">
                {/* Icon container */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} backdrop-blur-md rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-whisper" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-whisper mb-4 font-heading">{feature.title}</h4>
                <p className="text-whisper/70 leading-relaxed">{feature.description}</p>

                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
