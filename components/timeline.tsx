"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
  const timelineItems = [
    {
      title: "Bachelor of Economics",
      organization: "Dar Al Amen",
      period: "2023",
      description: "A Bachelor of Economics is an undergraduate degree program that focuses on the study of how societies, businesses, and individuals make decisions regarding the allocation of resources. It covers both microeconomics and macroeconomics. ",
      type: "education",
    },
    {
      title: "Web Development Intern",
      organization: "Etnafes",
      period: "Winter 2025",
      description:
        "Developed and maintained the Bid-Bazaar auction platform using Laravel and Vue.js. Collaborated with the design team to implement responsive UI components and ensure seamless user interactions across devices.",
      type: "work",
    },
    {
      title: "Hackathon Winner",
      organization: "Microsoft Tech Club",
      period: "2024",
      description:
        "Led a team of Three to develop an innovative solution for local community challenges. Won first place out of 20 teams.",
      type: "achievement",
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <BookOpen className="w-5 h-5" />
      case "work":
        return <Briefcase className="w-5 h-5" />
      case "certification":
        return <Award className="w-5 h-5" />
      case "achievement":
        return <Award className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  return (
    <section id="timeline" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary rounded-full" />
          <p className="text-muted-foreground">My academic and professional journey</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 w-0.5 h-full bg-border dark:bg-muted md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
            >
              <div
                className={`flex items-center absolute top-5 ${
                  index % 2 === 0 ? "md:-left-4 left-0" : "md:-right-4 left-0"
                }`}
              >
                <div className="z-10 flex items-center justify-center w-8 h-8 text-white rounded-full bg-primary">
                  {getIcon(item.type)}
                </div>
              </div>

              <Card
                className={`relative ml-10 md:ml-0 ${
                  index % 2 === 0
                    ? "md:mr-10 md:before:content-[''] md:before:absolute md:before:right-[-10px] md:before:top-6 md:before:border-t-8 md:before:border-r-0 md:before:border-b-8 md:before:border-l-8 md:before:border-l-background md:before:border-transparent"
                    : "md:ml-10 md:before:content-[''] md:before:absolute md:before:left-[-10px] md:before:top-6 md:before:border-t-8 md:before:border-r-8 md:before:border-b-8 md:before:border-l-0 md:before:border-r-background md:before:border-transparent"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <span className="px-2 py-1 text-xs rounded-full bg-muted">{item.period}</span>
                  </div>
                  <CardDescription>{item.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
