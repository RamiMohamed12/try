import { FileText, Send, Eye, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { icon: FileText, title: "Create", desc: "Design your invoice with our beautiful templates" },
    { icon: Send, title: "Send", desc: "Share via email or link with one click" },
    { icon: Eye, title: "Track", desc: "Monitor when clients view and interact" },
    { icon: CreditCard, title: "Get Paid", desc: "Receive payments directly through the platform" },
  ]

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-whisper mb-6 tracking-tight">How It Works</h3>
          <p className="text-xl text-whisper/70">Get paid in 4 simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-spiro-disco-ball/50 to-transparent z-0" />
              )}

              {/* Step card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:bg-white/8 transition-all duration-500 group-hover:border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-spiro-disco-ball" />
                </div>
                <div className="text-sm font-semibold text-spiro-disco-ball mb-2">Step {index + 1}</div>
                <h4 className="text-xl font-bold text-whisper mb-3">{step.title}</h4>
                <p className="text-whisper/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
