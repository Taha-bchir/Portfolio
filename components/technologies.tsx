"use client"

import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip"

const technologies = [
  // Frontend
  { id: 1, name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 2, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 3, name: "Vue 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { id: 4, name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { id: 5, name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: 6, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 7, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { id: 8, name: "Shadcn/UI", icon: "https://api.iconify.design/simple-icons:shadcnui.svg" },
  { id: 9, name: "Blazor", icon: "https://api.iconify.design/simple-icons:blazor.svg" },

  // Backend
  { id: 10, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 11, name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { id: 12, name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { id: 13, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: 14, name: "ASP.NET Core", icon: "https://api.iconify.design/simple-icons:dotnet.svg" },
  { id: 15, name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { id: 16, name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { id: 17, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

  // Databases
  { id: 18, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 19, name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: 20, name: "PL/SQL", icon: "https://api.iconify.design/simple-icons:oracle.svg" },

  // Mobile
  { id: 21, name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { id: 22, name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },

  // Tools & Other
  { id: 23, name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { id: 24, name: "Adobe Illustrator / Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { id: 25, name: "SEO", icon: "https://api.iconify.design/simple-icons:googleanalytics.svg" },
  { id: 26, name: "Power BI", icon: "https://api.iconify.design/simple-icons:powerbi.svg" },
  { id: 27, name: "Unit Testing", icon: "https://api.iconify.design/simple-icons:junit5.svg" },
  { id: 28, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 29, name: "Agile", icon: "https://api.iconify.design/simple-icons:scrumalliance.svg" },
]

export default function Technologies() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          <AnimatedTooltip items={technologies} />
        </div>
      </div>
    </section>
  )
}
