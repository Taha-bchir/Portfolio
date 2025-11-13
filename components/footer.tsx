"use client"

import { WavyBackground } from "./aceternity/wavy-background"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-16 overflow-hidden border-t border-border">
      <WavyBackground>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to new opportunities and interesting projects. Feel free to reach out!
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Taha-Bchir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/taha-bchir-472472280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>

              <a
                href="mailto:tahabchir6@gmail.com"
                className="p-3 rounded border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">© 2025 Taha Bchir. All rights reserved.</p>
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}
