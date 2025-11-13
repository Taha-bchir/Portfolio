"use client"

import { useEffect, useRef } from "react"

export function Meteors({ number = 30 }: { number?: number }) {
  const meteorsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!meteorsRef.current) return

    for (let i = 0; i < number; i++) {
      const meteor = document.createElement("div")
      meteor.className = "meteor"
      meteor.style.left = Math.random() * 100 + "%"
      meteor.style.animationDelay = Math.random() * 2 + "s"
      meteor.style.animationDuration = Math.random() * 1 + 2 + "s"
      meteorsRef.current.appendChild(meteor)
    }
  }, [number])

  return (
    <div ref={meteorsRef} className="meteors-container">
      <style>{`
        .meteors-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        .meteor {
          position: absolute;
          top: -10px;
          width: 2px;
          height: 2px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px 1px #3b82f6;
          animation: meteor-fall linear infinite;
        }
        
        @keyframes meteor-fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
          from {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
