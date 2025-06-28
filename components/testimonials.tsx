import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      content: "Invo completely transformed my invoicing workflow. The interface is gorgeous and incredibly intuitive.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Agency Owner",
      content: "Finally, an invoicing tool that doesn't feel like work. My clients love the professional presentation.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Consultant",
      content: "The automation features save me hours every week. Best investment I've made for my business.",
      rating: 5,
      avatar: "EW",
    },
  ]

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-bold text-whisper mb-6 tracking-tight font-heading">
            Loved by Professionals
          </h3>
          <p className="text-xl text-whisper/70">Join thousands who've revolutionized their invoicing</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-spiro-disco-ball/20 to-sapphire/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:border-white/20 h-full">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-spiro-disco-ball/60 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-spiro-disco-ball text-spiro-disco-ball" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-whisper/80 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sapphire to-spiro-disco-ball rounded-full flex items-center justify-center text-rich-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-whisper">{testimonial.name}</p>
                    <p className="text-whisper/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
