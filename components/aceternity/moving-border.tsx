"use client"

import type React from "react"

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  className?: string
}

export function MovingBorder({ children, duration = 3000, className = "" }: MovingBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
      <button className="relative px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors">
        {children}
      </button>
    </div>
  )
}
