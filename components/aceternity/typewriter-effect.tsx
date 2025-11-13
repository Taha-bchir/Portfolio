"use client"

import { useEffect, useState } from "react"

export function TypewriterEffect({
  words,
  className = "",
}: {
  words: Array<{ text: string; className?: string }>
  className?: string
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const allText = words.map((w) => w.text).join(" ")

    if (charIndex < allText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(allText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [charIndex, words])

  return (
    <div className={className}>
      <span>{displayedText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}
