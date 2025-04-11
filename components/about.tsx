"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-20 h-1 mx-auto mt-2 mb-6 bg-primary rounded-full" />
          <p className="text-muted-foreground">Get to know me and my journey in the tech world</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-lg border dark:border-gray-800">
              <Image
                src="/Image.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold">Who am I ?</h3>
            <p className="text-muted-foreground">
              I'm an IT student passionate about web development, cloud computing, and artificial intelligence. With a
              strong foundation in programming fundamentals and a keen eye for design, I strive to create digital
              experiences that are both functional and beautiful.
            </p>
            <p className="text-muted-foreground">
              Currently pursuing my degree in Information Technology, I'm constantly learning new technologies and
              frameworks to stay at the forefront of the industry. When I'm not coding, you can find me exploring open
              source projects, participating in hackathons, or contributing to tech communities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="mb-1 text-lg font-bold">Education</h4>
                  <p className="text-sm text-muted-foreground">Bachelor of Economics </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="mb-1 text-lg font-bold">Location</h4>
                  <p className="text-sm text-muted-foreground">Tunisia, Kairouan</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
