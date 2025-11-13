"use client"

import type React from "react"
import { motion } from "framer-motion"

export function WavyBackground({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 300 Q 300 250 600 300 T 1200 300"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        />
        <motion.path
          d="M 0 350 Q 300 400 600 350 T 1200 350"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.5 }}
        />
      </svg>
      {children}
    </div>
  )
}
