import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent" />

          <div className="relative">
            <h3 className="text-5xl md:text-7xl font-bold text-whisper mb-8 tracking-tight font-heading">
              Ready to Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-spiro-disco-ball to-sapphire">
                Your Invoicing?
              </span>
            </h3>

            <p className="text-xl text-whisper/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who've made invoicing effortless, beautiful, and profitable with Invo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-spiro-disco-ball to-sapphire hover:from-sapphire hover:to-spiro-disco-ball text-rich-black px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-spiro-disco-ball/25 transition-all duration-500"
              >
                Start Free Trial
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-spiro-disco-ball/50 text-whisper hover:text-spiro-disco-ball px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-500 hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-whisper/60">No setup fees • Cancel anytime • 24/7 support</p>
          </div>
        </div>
      </section>

      {/* Footer content */}
      <div className="border-t border-white/10 bg-rich-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Logo and description */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-spiro-disco-ball/20 rounded-2xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-2xl p-3">
                    <Cube className="w-8 h-8 text-spiro-disco-ball" />
                  </div>
                </div>
                <span className="text-3xl font-bold text-whisper tracking-wider font-heading">INVO</span>
              </div>
              <p className="text-whisper/60 max-w-md text-center lg:text-left">
                The future of invoicing is here. Clean, fast, and beautifully designed for modern professionals.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-6">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-spiro-disco-ball/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-whisper/70 group-hover:text-spiro-disco-ball transition-colors duration-300" />
                  <div className="absolute inset-0 bg-spiro-disco-ball/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-whisper/60 text-sm">
              © {new Date().getFullYear()} Invo. All rights reserved. Made with ❄️ for modern professionals.
            </p>

            <nav className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Contact", "Help Center"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-whisper/60 hover:text-spiro-disco-ball transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
