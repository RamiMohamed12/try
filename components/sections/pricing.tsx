import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: ["5 invoices per month", "Basic templates", "Email support", "PDF export"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For growing businesses",
      features: [
        "Unlimited invoices",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Recurring invoices",
      ],
      cta: "Try Pro",
      popular: true,
    },
    {
      name: "Team",
      price: "$24",
      period: "per month",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Client portal",
        "API access",
        "White-label option",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-whisper mb-6 tracking-tight">Simple Pricing</h3>
          <p className="text-xl text-whisper/70">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="group relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-spiro-disco-ball to-sapphire text-rich-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Recommended
                  </div>
                </div>
              )}

              <div
                className={`absolute -inset-1 rounded-3xl blur transition-opacity duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-r from-spiro-disco-ball/30 to-sapphire/30 opacity-75 group-hover:opacity-100"
                    : "bg-gradient-to-r from-spiro-disco-ball/20 to-sapphire/20 opacity-0 group-hover:opacity-100"
                }`}
              />

              <div
                className={`relative bg-white/5 backdrop-blur-md border rounded-3xl p-8 hover:bg-white/8 transition-all duration-500 h-full ${
                  plan.popular ? "border-spiro-disco-ball/30" : "border-white/10 group-hover:border-white/20"
                }`}
              >
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-whisper mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-whisper">{plan.price}</span>
                    <span className="text-whisper/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-whisper/70">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-spiro-disco-ball flex-shrink-0" />
                      <span className="text-whisper/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-500 ${
                    plan.popular
                      ? "bg-gradient-to-r from-spiro-disco-ball to-sapphire hover:from-sapphire hover:to-spiro-disco-ball text-rich-black shadow-2xl hover:shadow-spiro-disco-ball/25"
                      : "bg-white/10 backdrop-blur-md border border-white/20 hover:border-spiro-disco-ball/50 text-whisper hover:text-spiro-disco-ball hover:bg-white/15"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
