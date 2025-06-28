import { CuboidIcon as Cube, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-rich-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-spiro-disco-ball/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-sapphire/20 to-spiro-disco-ball/20 backdrop-blur-md border border-white/10 rounded-2xl p-3">
                  <Cube className="w-8 h-8 text-spiro-disco-ball" />
                </div>
              </div>
              <span className="text-3xl font-bold text-whisper tracking-wider">INVO</span>
            </div>
            <p className="text-whisper/60 max-w-md leading-relaxed mb-8">
              The future of invoicing is here. Clean, fast, and beautifully designed for modern professionals.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-spiro-disco-ball/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-whisper/70 group-hover:text-spiro-disco-ball transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-whisper font-semibold mb-6">Product</h4>
            <div className="space-y-4">
              {["Features", "Pricing", "Templates", "Integrations"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-whisper/60 hover:text-spiro-disco-ball transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-whisper font-semibold mb-6">Support</h4>
            <div className="space-y-4">
              {["Help Center", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-whisper/60 hover:text-spiro-disco-ball transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-whisper/60 text-sm">
            © {new Date().getFullYear()} Invo. All rights reserved. Made with ❄️ for modern professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
