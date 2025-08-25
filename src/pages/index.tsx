import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, Instagram } from "lucide-react"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const projects = [
    {
      title: "FoodDraft",
      description:
        "An interactive food search platform powered by Open Food Facts API with infinite scrolling, enabling users to explore detailed nutrition data effortlessly.",
      tech: ["Next.js", "TypeScript", "Axios", "@tanstack/react-query"],
      image: "/food.png",
      link: "https://github.com/Biprodeep12/FoodDraft",
    },
    {
      title: "Munchlesson",
      description:
        "A flashcard-based learning app with Firebase integration, allowing users to create, edit, and organize study cards with a sleek and modern design.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/study.png",
      link: "https://github.com/Biprodeep12/MunchLesson",
    },
    {
      title: "HealthTrack",
      description:
        "AI-powered prescription analysis app where users upload prescriptions and receive concise medical summaries using OpenRouter’s LLaMA model.",
      tech: ["Next.js", "TypeScript", "OpenRouter API", "Firebase"],
      image: "/health.png",
      link: "https://github.com/Biprodeep12/HEALTH-TRACK",
    },
  ]

  const techStack = [
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=expressjs" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Html", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "Three.js", icon: "https://skillicons.dev/icons?i=threejs" },
    { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div
        className="fixed -inset-20 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/I8JQEZ2uRwqhckg8C2PiEH7SJVcjtoDgXyJB2QBylUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MTQ2ODYzOS92ZWN0/b3IvYWJzdHJhY3Qt/d2hpdGUtYmFja2dy/b3VuZC1nZW9tZXRy/aWMtdGV4dHVyZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WTU1NlJhbzRhNGJu/YUJ4X0VYMVpHR3Nl/R3dMZUl6ekpKQTUy/cWowSTRkYz0')",
          backgroundSize: "300%",
          transform: `translateY(${scrollY * 0.02}px)`,
          willChange: "transform",
          minHeight: "120vh",
        }}
      ></div>

      <div className="fixed inset-0 bg-black/50 z-0"></div>

      <nav className="absolute top-0 w-full z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-black text-xl text-white drop-shadow-lg">Biprodeep</div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="relative group cursor-pointer text-white/80 hover:text-white transition-all duration-300 font-medium drop-shadow-sm"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="relative group cursor-pointer text-white/80 hover:text-white transition-all duration-300 font-medium drop-shadow-sm"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="relative group cursor-pointer text-white/80 hover:text-white transition-all duration-300 font-medium drop-shadow-sm"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative group cursor-pointer text-white/80 hover:text-white transition-all duration-300 font-medium drop-shadow-sm"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 mt-4 bg-white/10 backdrop-blur-md rounded-lg px-4 -mx-4 shadow-lg">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              scrollY < 100 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >

            <div className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Hi I am <span className="text-white font-semibold">Biprodeep Bose</span>
            </div>

            <div className="font-montserrat font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="mb-2 text-white drop-shadow-2xl block text-nowrap">FullStack Developer</span>
              <span className="block text-white drop-shadow-2xl relative">
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/60 rounded-full"></div>
              </span>
            </div>

            <div className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Crafting digital experiences with <span className="text-white font-semibold">clean code</span> and{" "}
              <span className="text-white font-semibold">thoughtful design</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="group cursor-pointer bg-white text-black px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden font-semibold"
              >
                <span className="relative z-10">View My Work</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group cursor-pointer border-2 border-white/80 text-white px-10 py-4 rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden font-semibold backdrop-blur-sm"
              >
                <span className="relative z-10">Get in Touch</span>
              </button>
            </div>
          </div>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ChevronDown
                className="w-8 h-8 text-white/80 hover:text-white transition-colors cursor-pointer drop-shadow-lg"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative z-10 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["about-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center text-white drop-shadow-lg">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-white/90 drop-shadow-sm">
                  I'm a passionate developer who believes in the power of clean, efficient code and beautiful design.
                  With expertise in modern web technologies, I create digital solutions that are both functional and
                  aesthetically pleasing.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-white/90 drop-shadow-sm">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or enjoying a good cup of coffee while sketching out my next big idea.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 hover:bg-white/30 hover:border-white/50 transition-all duration-200 text-white drop-shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center relative overflow-hidden group shadow-xl border border-white/30">
                  <img
                    src="/Kalo.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div
            id="projects-title"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["projects-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-16 text-center text-white drop-shadow-lg">
              Featured Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                id={`project-${index}`}
                data-animate
                className={`group bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 border border-white/20 hover:bg-white/20 ${
                  isVisible[`project-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-white/10 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-white group-hover:text-white transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed text-sm sm:text-base drop-shadow-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => window.open(project.link, "__blank")}
                    className="flex items-center cursor-pointer space-x-2 text-white/80 hover:text-white transition-all duration-300 group-hover:translate-x-1 font-medium drop-shadow-sm"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div
              id="github-link"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["github-link"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="https://github.com/Biprodeep12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold group"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View More Projects on GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div
            id="experience-title"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["experience-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-16 text-center text-white drop-shadow-lg">
              Experience
            </h2>
          </div>

          <div
            id="experience-card"
            data-animate
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 ${
              isVisible["experience-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2 drop-shadow-sm">
                  Software Development Engineer Intern
                </h3>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl font-semibold text-white/90 drop-shadow-sm">SaffronStays</span>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span className="text-white/80 drop-shadow-sm">Remote</span>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span className="text-white/80 drop-shadow-sm italic">2025</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-white drop-shadow-sm">April - Present</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed drop-shadow-sm">
                Contributed to the frontend development of a luxury vacation rental platform, focusing on building new pages and enhancing user engagement across the website.
              </p>

              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="drop-shadow-sm">
                    Collaborated in the development of a new homepage, ensuring a modern and responsive design for better user experience
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="drop-shadow-sm">
                    Created new sections in the search page, improving discoverability and navigation for users
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="drop-shadow-sm">
                    Built the entire collection page from scratch, enabling organized browsing of villa listings
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="drop-shadow-sm">
                    Implemented an analytics application throughout the website to track user behavior and optimize business insights
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "API Integration"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-6 relative z-10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            id="tech-title"
            data-animate
            className={`transition-all duration-1000 mb-16 ${
              isVisible["tech-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white drop-shadow-lg mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-white/80 text-center max-w-2xl mx-auto drop-shadow-sm">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-marquee space-x-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-row justify-center items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group min-w-[120px]"
                >
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-white/90 text-sm font-medium text-center drop-shadow-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative z-10 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["contact-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-white drop-shadow-lg">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>

            <div className="flex justify-center mb-12">
              <a
                href="mailto:hello@example.com"
                className="bg-white text-black px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Biprodeep12"
                target="_blank"
                className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/30 text-white"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/biprodeep-bose-3b47862ba/"
                target="_blank"
                className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/30 text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/bosebd/"
                target="_blank"
                className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/30 text-white"
                aria-label="LinkedIn"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/20 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/80 text-sm sm:text-base drop-shadow-sm">
            © 2024 Portfolio. Crafted with care and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  )
}
