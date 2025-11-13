"use client"

import { motion } from "framer-motion"

export function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string
  className?: string
}) {
  const wordArray = words.split(" ")

  return (
    <div className={className}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: idx * 0.1,
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  )
}
