import { useEffect, useRef } from 'react'

// Subtle canvas of glowing marine-snow / bubble particles drifting upward.
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationId

    const colors = ['rgba(14,165,233,', 'rgba(20,184,166,', 'rgba(240,249,255,']

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      drift: Math.random() * 0.4 - 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.2,
    }))

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    function tick() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.shadowBlur = 6
        ctx.shadowColor = `${p.color}0.8)`
        ctx.fill()
      }
      animationId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-bg" aria-hidden="true" />
}
