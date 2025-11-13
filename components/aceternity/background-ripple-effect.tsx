"use client"

import { useEffect, useRef } from "react"

export function BackgroundRippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ripples: Array<{
      x: number
      y: number
      radius: number
      maxRadius: number
      opacity: number
    }> = []

    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 200,
        opacity: 0.8,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i]
        ripple.radius += 3
        ripple.opacity -= 0.01

        if (ripple.opacity <= 0) {
          ripples.splice(i, 1)
          continue
        }

        ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity * 0.5})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        createRipple(e.clientX, e.clientY)
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}
