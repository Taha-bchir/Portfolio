"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { BackgroundRippleEffect } from "./aceternity/background-ripple-effect"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { TypewriterEffect } from "./aceternity/typewriter-effect"

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }

      if (Math.random() > 0.75 && trailRef.current) {
        const particle = document.createElement("div")
        particle.className = "cursor-trail-particle"
        particle.style.left = e.clientX + "px"
        particle.style.top = e.clientY + "px"
        trailRef.current.appendChild(particle)

        setTimeout(() => particle.remove(), 800)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Taha_Bchir_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black pt-20 pb-20">
      <BackgroundRippleEffect />

      <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
        <TextGenerateEffect
          words="Taha Bchir"
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-tight"
        />

        <TypewriterEffect
          words={[{ text: "Full-Stack Developer & IT Student" }]}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
        />

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 flex-wrap">
          <Link
            href="#projects"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded font-medium"
          >
            View Work
          </Link>
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 rounded font-medium"
          >
            Download CV
          </button>
        </div>
      </div>

      <div ref={cursorRef} className="cursor-ring" />
      <div ref={trailRef} className="cursor-trail-container" />
    </section>
  )
}
