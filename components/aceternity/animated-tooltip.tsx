"use client"

import { useState } from "react"

interface TooltipItem {
  id: number
  name: string
  icon: string
}

interface AnimatedTooltipProps {
  items: TooltipItem[]
}

export function AnimatedTooltip({ items }: AnimatedTooltipProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-200">
            {item.icon.startsWith("http") || item.icon.startsWith("/")
              ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
              )
              : (
                <span className="text-2xl">{item.icon}</span>
              )}
          </div>

          {hoveredId === item.id && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-50 animate-in fade-in">
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
