"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "StyleHub",
      description:
        "A full-stack e-commerce application with product listings, shopping cart, user authentication, and payment processing.",
      image: "/Capture ecommerce.jpg",
      tags: ["React.js", "Tailwind CSS", "MySQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "MyBlog",
      description:
        "A platform where ideas, insights, and stories come together. Our blog features a variety of articles on topics ranging from technology, lifestyle, education, and more. Stay informed, inspired, and entertained with fresh content updated regularly.",
      image: "/Capture blog.jpg",
      tags: ["PHP", "MySQL", "Schadcn/UI"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Bid-Bazaar",
      description:
        "Bid-Bazaar aims to provide a seamless and interactive bidding experience for users who want to buy or sell items in real-time",
      image: "/Capture.jpg",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and experience with a modern and responsive design.",
      image: "/Capture d.jpg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary rounded-full" />
          <p className="text-muted-foreground">A selection of my recent work and personal projects</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/Taha-bchir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/Taha-bchir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
