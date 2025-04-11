"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(white,transparent_85%)] dark:bg-grid-black/[0.2]" />

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 0.8,
            }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Taha Bchir
              </span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
              IT Student & Aspiring Full-Stack Developer
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              I build accessible, responsive, and functional web applications with modern technologies. Currently
              focused on expanding my knowledge in cloud computing and AI integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 backdrop-blur-sm bg-background/50"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center pt-6 space-x-4"
          >
            <SocialButton icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialButton icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialButton icon={<Twitter className="w-5 h-5" />} label="Twitter" />
            <SocialButton icon={<Mail className="w-5 h-5" />} label="Email" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  )
}

// Social media button with hover effect and link
function SocialButton({ icon, label }) {
  // Define URLs for each social platform
  const getUrl = () => {
    switch (label) {
      case "GitHub":
        return "https://github.com/Taha-Bchir"
      case "LinkedIn":
        return "https://www.linkedin.com/in/taha-bchir-472472280/"
      case "Twitter":
        return "https://x.com/TahaBchir"
      case "Email":
        return "mailto:tahabchir6@gmail.com"
      default:
        return "#"
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.97 }}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={label}
        className="relative overflow-hidden group bg-background/50 backdrop-blur-sm hover:bg-background/80"
        asChild
      >
        <a href={getUrl()} target="_blank" rel="noopener noreferrer">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {icon}
        </a>
      </Button>
    </motion.div>
  )
}

// Animated particles background
function Particles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 4 + 1
        const left = Math.random() * 100
        const top = Math.random() * 100
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}
