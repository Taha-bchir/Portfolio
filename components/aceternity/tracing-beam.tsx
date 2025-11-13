"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function TracingBeam({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScroll = height + windowHeight
      const currentScroll = windowHeight - top

      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2" viewBox="0 0 1 1">
        <motion.line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="0.01"
          vectorEffect="non-scaling-stroke"
          pathLength={scrollProgress}
        />
      </svg>

      <motion.div
        className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/50"
        style={{
          top: `${scrollProgress * 100}%`,
        }}
      />

      {children}
    </div>
  )
}
