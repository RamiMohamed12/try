import { Target, Heart, Zap } from "lucide-react"

export function About() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-5xl font-bold text-whisper mb-8 tracking-tight">
              Built for Modern
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-spiro-disco-ball to-sapphire">
                Professionals
              </span>
            </h3>
            <p className="text-xl text-whisper/80 leading-relaxed mb-8">
              We created Invo because we believe invoicing shouldn't be complicated. As freelancers ourselves, we
              experienced the frustration of clunky, outdated billing software that got in the way of doing great work.
            </p>
            <p className="text-lg text-whisper/70 leading-relaxed mb-12">
              Invo is different. It's fresh, minimal, and designed specifically for modern freelancers and small teams
              who value simplicity without sacrificing professionalism.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {[
                { icon: Target, title: "Focused", desc: "Built specifically for freelancers and small businesses" },
                { icon: Heart, title: "Thoughtful", desc: "Every feature designed with user experience in mind" },
                { icon: Zap, title: "Efficient", desc: "Get more done in less time with intelligent automation" },
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-spiro-disco-ball" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-whisper">{value.title}</h4>
                    <p className="text-whisper/70">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">❄️</div>
              <h4 className="text-2xl font-bold text-whisper mb-4">Fresh & Clean</h4>
              <p className="text-whisper/70">
                Like ice, Invo is pure, clear, and refreshingly simple. No bloat, no confusion—just clean invoicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
