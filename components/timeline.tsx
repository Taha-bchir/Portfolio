"use client"

import { TracingBeam } from "@/components/aceternity/tracing-beam"

const timelineItems = [
  {
    title: "Full-Stack Intern @ Etnafes Travel",
    description: "Improved load time by 40% and cut backend errors by 30%",
  },
  {
    title: "SEO Digital Marketing Intern @ Etnafes Travel",
    description: "Grew organic reach by 25%",
  },
  {
    title: "1st Place Winner - GREENLAB v3.0 Hackathon",
    description: "Developed innovative solutions in a competitive environment",
  },
  {
    title: "Designer & Mentor - Microsoft Tech Club ISET Sfax",
    description: "Leading design initiatives and mentoring junior developers",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Career</span> &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Activities</span>
        </h2>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}
