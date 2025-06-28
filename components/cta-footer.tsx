import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube } from "lucide-react"

export function CTAFooter() {
  return (
    <footer className="bg-rich-black text-white">
      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to Get Started?</h3>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who've made invoicing effortless with Invo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-spiro-disco-ball hover:bg-spiro-disco-ball/90 text-rich-black px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-spiro-disco-ball px-8 py-4 text-lg font-medium rounded-xl border-2 border-white/20 hover:border-spiro-disco-ball/50 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-white/60">No setup fees • Cancel anytime • 24/7 support</p>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Cube className="w-8 h-8 text-spiro-disco-ball" />
              <span className="text-2xl font-bold tracking-wider">INVO</span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-white/70 hover:text-spiro-disco-ball transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-spiro-disco-ball transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-spiro-disco-ball transition-colors">
                Contact
              </a>
              <a href="#" className="text-white/70 hover:text-spiro-disco-ball transition-colors">
                Help Center
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Invo. All rights reserved. Made with ❄️ for modern professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
