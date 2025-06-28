export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Large background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-sapphire/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-spiro-disco-ball/8 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-dark-cerulean/15 rounded-full blur-3xl animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-sapphire/8 rounded-full blur-3xl animate-pulse delay-500" />
    </div>
  )
}
