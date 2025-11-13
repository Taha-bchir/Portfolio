"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Intern",
      company: "Etnafes Travel",
      period: "2024",
      achievements: ["Built a real-time auction platform with Vue.js, Nuxt, and Laravel", "Improved load time by 40% through SPA routing and component tuning"],
    },
    {
      title: "Full-Stack Development Intern",
      company: "Etnafes Travel",
      period: "2025",
      achievements: ["Built Bid-Bazaar real-time auction app", "mplemented real-time functionality and responsive user interface components"],
    },
    {
      title: "1st Place Winner",
      company: "GREENLAB v3.0 Hackathon",
      period: "2024",
      achievements: ["Led team to victory", "Built innovative solution"],
    },
    {
      title: "Designer & Mentor",
      company: "Microsoft Tech Club ISET Sfax",
      period: "2023 - Present",
      achievements: ["Mentored students", "Led design workshops"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-16 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-4xl md:text-5xl font-bold text-white">Experience & Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="relative p-6 border border-border rounded hover:border-accent hover:bg-card transition-all duration-300 bg-card/40">
                {/* Timeline indicator */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-accent rounded-full border-2 border-background group-hover:scale-110 transition-transform duration-300" />

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-accent text-sm font-medium">{exp.company}</p>
                  <span className="text-muted-foreground text-xs">{exp.period}</span>

                  <ul className="space-y-2 pt-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-accent flex-shrink-0 font-medium">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
