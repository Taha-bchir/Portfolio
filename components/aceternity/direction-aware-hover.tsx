"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export function DirectionAwareHover({
  children,
  imageUrl = "/project-management-team.png",
  className = "",
}: {
  children: React.ReactNode
  imageUrl?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [direction, setDirection] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const threshold = 100
    let dir = "center"

    if (x < threshold && y < threshold) dir = "top-left"
    else if (x > rect.width - threshold && y < threshold) dir = "top-right"
    else if (x < threshold && y > rect.height - threshold) dir = "bottom-left"
    else if (x > rect.width - threshold && y > rect.height - threshold) dir = "bottom-right"
    else if (y < threshold) dir = "top"
    else if (y > rect.height - threshold) dir = "bottom"
    else if (x < threshold) dir = "left"
    else if (x > rect.width - threshold) dir = "right"

    setDirection(dir)
  }

  const getInitialPosition = () => {
    const positions: Record<string, [number, number]> = {
      "top-left": [-100, -100],
      top: [0, -100],
      "top-right": [100, -100],
      left: [-100, 0],
      center: [0, 0],
      right: [100, 0],
      "bottom-left": [-100, 100],
      bottom: [0, 100],
      "bottom-right": [100, 100],
    }
    return positions[direction || "center"]
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setDirection(null)
      }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      {children}

      <motion.div
        initial={{ opacity: 0, x: getInitialPosition()[0], y: getInitialPosition()[1] }}
        animate={
          isHovered
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: getInitialPosition()[0], y: getInitialPosition()[1] }
        }
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="text-center space-y-2">
          <p className="text-white text-sm font-medium">View Project Details</p>
          <p className="text-muted-foreground text-xs">Hover for more information</p>
        </div>
      </motion.div>
    </div>
  )
}
