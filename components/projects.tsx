"use client"

import { BentoGrid, BentoGridItem } from "./aceternity/bento-grid"

export default function Projects() {
  const projects = [
    {
      title: "Bid-Bazaar",
      description: "Real-time auction platform",
      fullDescription:
        "A real-time auction app with live bidding, notifications, and WebSocket integration for seamless user experience.",
    },
    {
      title: "VoteChaine",
      description: "Decentralized voting platform",
      fullDescription:
        "A secure decentralized voting system leveraging Solana blockchain for transparent and tamper-proof elections.",
    },
    {
      title: "My Blog",
      description: "Full-featured blogging platform",
      fullDescription:
        "Complete blogging platform with CRUD functionality, category filters, and content management built with Next.js and MongoDB.",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-16 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>

        <BentoGrid>
          {projects.map((project, idx) => (
            <BentoGridItem
              key={idx}
              className="col-span-1 h-64 cursor-pointer flex flex-col justify-between group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-lg border border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-300" />

              <div className="relative z-10">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{project.description}</div>
                </div>
                <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                  {project.fullDescription}
                </div>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
