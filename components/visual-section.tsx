"use client"

import { useEffect, useRef } from "react"

export function VisualSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Ice cube particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      rotation: number
      rotationSpeed: number
    }> = []

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.offsetWidth + particle.size
        if (particle.x > canvas.offsetWidth + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.offsetHeight + particle.size
        if (particle.y > canvas.offsetHeight + particle.size) particle.y = -particle.size

        // Draw ice cube
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = particle.opacity

        // Ice cube gradient
        const gradient = ctx.createLinearGradient(
          -particle.size / 2,
          -particle.size / 2,
          particle.size / 2,
          particle.size / 2,
        )
        gradient.addColorStop(0, "#0ECCED")
        gradient.addColorStop(0.5, "#025EC4")
        gradient.addColorStop(1, "#043780")

        ctx.fillStyle = gradient
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)

        // Ice cube highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size / 3, particle.size / 3)

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-sapphire/5 to-spiro-disco-ball/10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: "100%", height: "100%" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-6xl font-bold text-rich-black mb-8 tracking-tight">
          Cool as Ice,
          <span className="block text-sapphire">Hot Performance</span>
        </h3>
        <p className="text-xl text-navy-blue/80 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect balance of simplicity and power. Invo keeps your invoicing process smooth and
          efficient.
        </p>
      </div>
    </section>
  )
}
