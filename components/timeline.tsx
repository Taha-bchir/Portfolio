"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
  const timelineItems = [
    {
      title: "SEO Intern Experience",
      organization: "Etnafes",
      period: "January 2024",
      description: [
        "Gained hands-on experience in SEO.",
        "Focused on keyword research to improve search visibility.",
        "Implemented on-page optimization techniques.",
        "Created engaging content to enhance website rankings.",
        "Developed link-building strategies to boost site authority."
      ],
      type: "internship",
      link: null,
    },
    {
      title: "Web Development Intern",
      organization: "Tech Company",
      period: "Summer 2023",
      description: [
        "Developed and maintained the Bid-Bazaar auction platform using Laravel and Vue.js.",
        "Collaborated with the design team to implement responsive UI components.",
        "Ensured seamless user interactions across devices."
      ],
      type: "internship",
      link: null,
    },
    {
      title: "Hackathon Winner",
      organization: "Microsoft Tech Club",
      period: "2024",
      description: [
        "Led a team of three to develop an innovative solution for local community challenges.",
        "Won first place out of 20 teams."
      ],
      type: "achievement",
      link: null,
    },
    {
      title: "Microsoft Tech Member",
      organization: "Microsoft Tech Club",
      period: "2024",
      description: [
        "Microsoft Tech Member in 2024."
      ],
      type: "social",
      link: null,
    },
    {
      title: "Microsoft Tech Committee Member",
      organization: "Microsoft Tech Club",
      period: "2024 - Present",
      description: [
        "Microsoft Tech Committee Member in 2025."
      ],
      type: "social",
      link: null,
    },
    {
      title: "Hackathon Organizer",
      organization: "IDinnovate",
      period: "2024",
      description: [
        "Organized a hackathon called IDinnovate in 2024.",
        "Coordinated logistics, promotion, and participant experience.",
        "Successfully gathered developers, designers, and entrepreneurs to solve real-world challenges."
      ],
      type: "achievement",
      link: null
    }    
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "internship":
        return <Briefcase className="w-5 h-5" />
      case "social":
        return <BookOpen className="w-5 h-5" />
      case "achievement":
        return <Award className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "internship":
        return "Internship"
      case "social":
        return "Social Life"
      case "achievement":
        return "Achievement"
      default:
        return type.charAt(0).toUpperCase() + type.slice(1)
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-green-100 text-green-800 border-green-200"
      case "social":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "achievement":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const internshipItems = timelineItems.filter(item => item.type === "internship")
  const socialItems = timelineItems.filter(item => item.type === "social" || item.type === "achievement")

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

        {/* Section: Internships */}
        <h3 className="mb-6 text-2xl font-semibold text-center text-primary">Internships</h3>
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {internshipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${getTypeColor(item.type).split(" ").slice(0, 2).join(" ")}`}
                      >
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{item.organization}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className={`${getTypeColor(item.type)} px-2 py-1 text-xs font-medium`}>
                      {item.period}
                    </Badge>
                  </div>
                  <div className="flex items-center mt-2 ml-14">
                    <Badge variant="secondary" className="text-xs">
                      {getTypeLabel(item.type)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-8">
                  <ul className="pl-14 space-y-1 list-disc text-muted-foreground">
                    {item.description.map((point, i) => (
                      <li key={i} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {item.link && (
                  <CardFooter className="pt-0 pb-4">
                    <div className="ml-14">
                      <Button variant="ghost" size="sm" className="px-0 text-primary" asChild>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <span>View details</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section: Social Life & Achievements */}
        <h3 className="mb-6 text-2xl font-semibold text-center text-primary">Social Life & Achievements</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {socialItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${getTypeColor(item.type).split(" ").slice(0, 2).join(" ")}`}
                      >
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{item.organization}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className={`${getTypeColor(item.type)} px-2 py-1 text-xs font-medium`}>
                      {item.period}
                    </Badge>
                  </div>
                  <div className="flex items-center mt-2 ml-14">
                    <Badge variant="secondary" className="text-xs">
                      {getTypeLabel(item.type)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-8">
                  <ul className="pl-14 space-y-1 list-disc text-muted-foreground">
                    {item.description.map((point, i) => (
                      <li key={i} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {item.link && (
                  <CardFooter className="pt-0 pb-4">
                    <div className="ml-14">
                      <Button variant="ghost" size="sm" className="px-0 text-primary" asChild>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <span>View details</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button variant="outline" asChild>
            <a href="/Taha Bchir - CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Download Full Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
