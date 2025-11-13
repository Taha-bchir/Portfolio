"use client"

export default function About() {
  const techStack = [
    { label: "Vue 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { label: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
    { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { label: "Blazor", icon: "https://api.iconify.design/simple-icons:blazor.svg" },
    { label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { label: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
    { label: "ASP.NET Core", icon: "https://api.iconify.design/simple-icons:dotnet.svg" },
    { label: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { label: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { label: "Adobe Illustrator / Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { label: "SEO", icon: "https://api.iconify.design/simple-icons:googleanalytics.svg" },
    { label: "Power BI", icon: "https://api.iconify.design/simple-icons:powerbi.svg" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-16 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-4xl md:text-5xl font-bold text-white">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack developer and IT student with a passion for building elegant digital solutions. My
              expertise spans modern web technologies, from frontend frameworks to backend architecture.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm focused on developing scalable applications using modern stacks such as Vue.js, Nuxt.js,
              Laravel, and Next.js. I believe in writing clean, maintainable code and creating intuitive user experiences
              that make a real impact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
              collaborating with fellow developers on innovative projects that push boundaries.
            </p>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img
                src="/h.png"
                alt="Taha Bchir"
                className="w-full rounded object-cover aspect-square border border-border"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-12 text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="group flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={tech.icon}
                  alt={tech.label}
                  className="w-12 h-12 mb-3 object-contain transition-transform duration-300 group-hover:scale-110 filter invert brightness-0"
                />
                <div className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                  {tech.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
