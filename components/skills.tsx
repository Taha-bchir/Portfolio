"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Layout className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Vue.js", level: 65 },
        { name: "NuxtJs", level: 65 },
        { name: "React", level: 70 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications",
      icon: <Server className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "PHP", level: 70 },
        { name: "Python", level: 75 },
        { name: "C", level: 60 },
        { name: "C++", level: 60 },
        { name: "Laravel", level: 80 },
        { name: "Java", level: 60 },
        { name: "Java JEE", level: 65 },
      ],
    },
    {
      title: "Database Management",
      description: "Storing and retrieving data efficiently",
      icon: <Database className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />,
      skills: [
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 80 },
        { name: "PL/SQL", level: 65 },
      ],
    },
    {
      title: "Other Skills",
      description: "Additional technical competencies",
      icon: <Code className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />,
      skills: [
        { name: "Testing", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary rounded-full" />
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {category.icon}
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid gap-6 mt-12 md:grid-cols-3"
        >
          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Globe className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />
              </div>
              <CardTitle className="mt-2">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Building responsive websites and web applications with modern frameworks and tools.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Smartphone className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />
              </div>
              <CardTitle className="mt-2">Software Engineering & Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developing problem-solving skills and applying programming languages like Java, Python, and C++ to real-world projects and algorithms.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Database className="w-10 h-10 p-2 text-primary bg-primary/10 dark:bg-primary/20 rounded-lg" />
              </div>
              <CardTitle className="mt-2">Database Design & Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
              Learning and implementing database design, querying with SQL, and managing data using systems like MySQL and PL/SQL.              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
