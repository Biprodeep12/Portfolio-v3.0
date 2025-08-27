import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, Instagram, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

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
        "An interactive food search and discovery platform powered by the Open Food Facts API. It features infinite scrolling for seamless browsing, advanced search capabilities, and detailed nutrition insights. Built with React Query for efficient data fetching and caching, the app provides a smooth user experience while helping users make informed food choices.",
      tech: ["Next.js", "TypeScript", "Axios", "@tanstack/react-query"],
      image: "/food.png",
      link: "https://github.com/Biprodeep12/FoodDraft",
      src: "https://food-draft.vercel.app/"
    },
    {
      title: "Munchlesson",
      description:
        "A flashcard-based learning application designed to make studying engaging and efficient. With Firebase integration, users can securely create, edit, and organize personalized flashcards in real-time. The sleek, responsive design with Tailwind CSS ensures accessibility across devices, while the intuitive UI makes learning flexible and enjoyable.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/study.png",
      link: "https://github.com/Biprodeep12/MunchLesson",
      src: "https://futurehaw.vercel.app/"
    },
    {
      title: "HealthTrack",
      description:
        "An AI-powered prescription analysis platform that simplifies healthcare communication. Users can upload handwritten or digital prescriptions, and the system leverages OpenRouter’s models to generate clear and concise medical summaries. Integrated with Firebase for secure storage, HealthTrack bridges the gap between complex prescriptions and patient understanding, offering a reliable digital health assistant.",
      tech: ["Next.js", "TypeScript", "OpenRouter API", "Firebase"],
      image: "/health.png",
      link: "https://github.com/Biprodeep12/HEALTH-TRACK",
      src: "https://health-track-theta.vercel.app/"
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
    <>
      <Head>
        <title>Biprodeep&apos;s Portfolio</title>
        <meta 
          name="description" 
          content="Biprodeep's portfolio showcasing full-stack development skills in Next.js, React, TypeScript, Node.js, and Python. Explore projects, services, and achievements." 
        />
      </Head>
      <div className="min-h-screen bg-background text-foreground relative">
        <div
          className="fixed -inset-20 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/bgk.jpg')",
            backgroundSize: "300%",
            transform: `translateY(${scrollY * 0.02}px)`,
            willChange: "transform",
            minHeight: "120vh",
          }}
        ></div>

        <div className="fixed inset-0 bg-black/50 z-0"></div>

        <nav className={`fixed w-full max-md:backdrop-blur-md z-50 ${scrollY > 50 && window.innerWidth > 768 ? "top-5":"top-0"} transition-all duration-300`}>
          <div className={`mx-auto px-6 border-white rounded-full ${scrollY > 50 && window.innerWidth > 768 ? "max-w-5xl border-2 py-3 bg-white/10  backdrop-blur-md":"py-4 max-w-6xl border-0"} transition-all duration-300` }>
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-4 flex-nowrap items-center">
                <div className="border-1 border-white rounded-full overflow-hidden">
                  <Image
                    src='/Kalo.jpeg'
                    width={40}
                    height={40}
                    alt="Logo"
                  />
                </div>
                <a href="#" className="font-montserrat font-black text-xl text-white drop-shadow-lg">Biprodeep</a>
              </div>
              

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
                isMobileMenuOpen ? "max-h-68 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-4 space-y-2 rounded-2xl mt-4 bg-white/10 backdrop-blur-md px-4">
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

        <section id="about" className="min-h-screen flex justify-center items-center pt-27.5 pb-20 px-6 relative z-10 bg-white/10 backdrop-blur-sm rounded-tl-[50px] rounded-tr-[50px]">
          <div className="max-w-7xl w-full">
            <div
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["about-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-center text-white drop-shadow-lg">
                My Expertise
              </div>
              <div className="flex flex-col items-center">
                  <div className="text-lg px-6 max-w-4xl mx-auto lg:text-xl text-center leading-relaxed mb-12 text-white/90 drop-shadow-sm">
                    I specialize in building{" "}
                    <span className="text-white font-semibold">scalable, high-performance web applications</span> with a
                    strong focus on clean architecture and modern best practices. My technical expertise includes:
                  </div>

                  <div className="flex flex-row justify-center items-center flex-wrap mb-15 max-[500px]:scale-70 max-[500px]:-my-40">
                    <div
                      id="about-1"
                      data-animate
                      className={`flex flex-col w-[375px] transform rotate-12 hover:scale-105 transition-all duration-300 mb-8 sm:mb-0 ${
                        isVisible["about-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ boxShadow: "10px 7px 2px rgba(0, 0, 0, 0.3)", transitionDelay: "200ms" }}
                    >
                      <div className="py-3 px-6 bg-white/20 backdrop-blur-md text-xl text-white leading-relaxed font-semibold border border-white/30">
                        Next.js & React.js
                      </div>

                      <div className="py-6 px-6 bg-white backdrop-blur-md flex flex-col gap-6 border border-white/20 border-t-0">
                        <div className="text-black/50 font-medium text-lg leading-relaxed">
                          Developing fast, SEO-friendly, and dynamic web applications with smooth user experiences
                        </div>

                        <div className="grid grid-cols-4">
                          {["Performance", "Accessibility", "Best Practices", "SEO"].map((metric, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                              <div className="relative w-15 h-15 rounded-full border-4 border-green-500 bg-green-500/10 flex items-center justify-center">
                                <span className="text-green-500 font-bold text-lg">100</span>
                              </div>
                              <div className="text-[12px] text-black/50 text-center font-medium leading-tight max-w-[80px]">{metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      id="about-2"
                      data-animate
                      className={`flex flex-col w-[325px] transform -rotate-11 z-10 drop-shadow-lg hover:scale-105 transition-all duration-300 mb-8 sm:mb-0 ${
                        isVisible["about-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ boxShadow: "9px 10px 2px rgba(0, 0, 0, 0.3)", transitionDelay: "400ms" }}
                    >
                      <div className="py-3 px-6 bg-gray-400 text-xl text-white text-nowrap leading-relaxed font-semibold border border-white/30">
                        TypeScript & JavaScript (ES6+)
                      </div>

                      <div className="pb-6 pt-3 px-6 bg-white backdrop-blur-md flex flex-col gap-1 border border-white/20 border-t-0">
                        <div className="text-black/50 font-medium text-lg leading-relaxed">
                          Writing robust, type-safe, and maintainable code.
                        </div>
                        <div className="w-full bg-blue-950 p-1.5 rounded-xl flex flex-col">
                          <div className="border-b-[1px] border-white p-2 flex flex-row gap-2 items-center">
                            <div className="rounded-full w-2.5 h-2.5 bg-red-400"></div>
                            <div className="rounded-full w-2.5 h-2.5 bg-blue-400"></div>
                            <div className="rounded-full w-2.5 h-2.5 bg-green-400"></div>
                          </div>
                          <div className="flex flex-col p-1">
                            <div className="text-blue-500">interface <span className="text-green-300">ProfileViewer </span><span className="text-yellow-400">{`{`}</span></div>
                            <div className="pl-4 flex flex-col">
                              <div className="text-blue-200">name: <span className="text-green-300">string</span></div>
                              <div className="text-blue-200">description: <span className="text-green-300">string</span></div>
                              <div className="text-blue-200">profileImage: <span className="text-green-300">string</span></div>
                              <div className="text-blue-200">socialLinks: <span className="text-purple-400">{`{`}</span></div>
                              <div className="pl-4 flex flex-col">
                                <div className="text-blue-200">linkedin: <span className="text-green-300">string</span></div>
                                <div className="text-blue-200">email: <span className="text-green-300">string</span></div>
                              </div>
                              <div className="text-purple-400">{`}`}</div>
                            </div>
                            <div className="text-yellow-400">{`}`}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="about-3"
                      data-animate
                      className={`flex flex-col w-[300px] transform rotate-8 max-[500px]:rotate-10 z-20 drop-shadow-2xl hover:scale-105 transition-all duration-300 mb-8 sm:mb-0 ${
                        isVisible["about-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ boxShadow: "10px 7px 2px rgba(0, 0, 0, 0.3)", transitionDelay: "600ms" }}
                    >
                      <div className="py-3 px-6 bg-gray-300 backdrop-blur-md text-xl text-white leading-relaxed font-semibold border border-white/30">
                        Backend Development
                      </div>

                      <div className="py-6 px-8 bg-white backdrop-blur-md flex flex-col gap-6 border border-white/20 border-t-0">
                        {["NodeJs", "Python", "FastApi", "MongoDB"].map((tech, index) => (
                          <div key={index} className="flex flex-row gap-4 items-center">
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                              alt="backend-tech"
                            />
                            <div className="text-black/50 font-medium text-lg leading-relaxed">{tech}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    id="about-4" 
                    data-animate
                    className={`flex flex-col items-center mt-20 lg:gap-20 gap-15 bg-white/10 w-full mx-auto backdrop-blur-sm rounded-3xl px-10 py-18 border border-white/20 transition-all duration-500 ${
                    isVisible["about-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "600ms" }}>
                    <div id="photo-1" data-animate className="flex flex-col lg:flex-row lg:gap-20 gap-5 items-center justify-between">
                      <div className="flex lg:hidden flex-col max-w-xl max-md:text-center">
                        <div className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-2 drop-shadow-sm">UI/UX Implementation</div>
                        <div className="text-lg md:text-xl font-semibold text-white/90 drop-shadow-sm">Crafting responsive, accessible, and user-focused interfaces using modern styling frameworks.</div>
                      </div>
                      <div className="relative max-md:w-[90%]">
                        <div className={`bg-white px-3 pt-15 pb-3 aspect-auto rotate-5 translate-x-5 drop-shadow-2xl transition-all duration-300 ${isVisible["photo-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.2)",transitionDelay: "1200ms"}}>
                          <Image
                            src='/food.png'
                            alt="ui/ux"
                            width={450}
                            height={450}
                            className="object-contain"
                          />
                        </div>
                        <div className={`bg-white px-3 pt-15 pb-3 aspect-auto absolute inset-0 -z-10 -rotate-5 -translate-x-5 transition-all duration-300 ${isVisible["photo-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.2)",transitionDelay: "1000ms" }}>
                          <Image
                            src='/study.png'
                            alt="ui/ux"
                            width={450}
                            height={450}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="lg:flex hidden flex-col max-w-xl">
                        <div className="font-montserrat font-bold text-3xl text-white mb-2 drop-shadow-sm">UI/UX Implementation</div>
                        <div className="text-xl font-semibold text-white/90 drop-shadow-sm">Crafting responsive, accessible, and user-focused interfaces using modern styling frameworks.</div>
                      </div>
                    </div>

                    <div id="photo-3" data-animate className="flex flex-col lg:flex-row lg:gap-20 gap-5 items-center justify-between">
                      <div className="flex flex-col max-w-xl lg:text-right md:text-left text-center">
                        <div className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-2 drop-shadow-sm">Performance Optimization</div>
                        <div className="text-lg md:text-xl font-semibold text-white/90 drop-shadow-sm">Ensuring applications are fast, scalable, and optimized for real-world usage.</div>
                      </div>
                      <div className={`bg-white px-3 aspect-auto py-10 drop-shadow-2xl transition-all duration-300 ${isVisible["photo-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.2)", transitionDelay: "600ms"}}>
                        <Image
                          src='/opt.png'
                          alt="ui/ux"
                            width={450}
                            height={450}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div id="photo-4" data-animate className="flex flex-col lg:flex-row lg:gap-20 gap-5 items-center justify-between">
                      <div className="flex lg:hidden flex-col max-w-xl max-md:text-center">
                        <div className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-2 drop-shadow-sm">Collaboration & Analytics</div>
                        <div className="text-lg md:text-xl font-semibold text-white/90 drop-shadow-sm">Experience integrating analytics, monitoring tools, and working in team-driven environments.</div>
                      </div>
                      <div className="relative">
                        <div className={`bg-white p-3 aspect-auto rounded-xl translate-x-3 -translate-y-3 drop-shadow-2xl transition-all duration-300 ${isVisible["photo-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.2)", transitionDelay: "800ms"}}>
                          <Image
                            src='/ana.png'
                            alt="ui/ux"
                            width={450}
                            height={450}
                            className="object-cover"
                          />
                        </div>
                        <div className={`bg-white p-3 aspect-auto absolute inset-0 -z-10 rounded-xl -translate-x-3 translate-y-3 transition-all duration-300 ${isVisible["photo-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.2)", transitionDelay: "600ms"}}>
                          <Image
                            src='/study.png'
                            alt="ui/ux"
                            width={450}
                            height={450}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="lg:flex hidden flex-col max-w-xl">
                        <div className="font-montserrat font-bold text-3xl text-white mb-2 drop-shadow-sm">Collaboration & Analytics</div>
                        <div className="text-xl font-semibold text-white/90 drop-shadow-sm">Experience integrating analytics, monitoring tools, and working in team-driven environments.</div>
                      </div>
                    </div>

                  <div className="text-lg md:text-xl md:px-6 leading-relaxed text-white/90 drop-shadow-sm max-md:text-center">
                    With this skill set, I aim to deliver{" "}
                    <span className="text-white font-semibold">modern, reliable, and user-friendly web applications</span>{" "}
                    tailored to real-world needs.
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="pt-27.5 pb-20 px-6 flex justify-center items-center min-h-screen relative z-10 bg-black/20 backdrop-blur-sm"
        >
          <div className="max-w-6xl">
            <div
              id="projects-title"
              data-animate
              className={`transition-all duration-1000 text-center mb-20 ${
                isVisible["projects-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-center text-white drop-shadow-lg">
                Featured Projects
              </div>
              <div className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
                A showcase of recent projects that demonstrate my technical skills and creative problem-solving
              </div>
            </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                id={`project-${index}`}
                data-animate
                className={`group transition-all duration-1000 ${
                  isVisible[`project-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={480}
                          height={480}
                          className="w-full h-full object-center group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>

                  <div className={`space-y-6 flex flex-col ${index % 2 === 1 ? "md:items-end md:text-right" : ""}`}>
                    <div className="font-bold text-3xl md:text-4xl text-white drop-shadow-sm group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </div>

                    <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl drop-shadow-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <button
                        onClick={() => window.open(project.src, "_blank")}
                        className="group cursor-pointer flex flex-row gap-2 items-center justify-center bg-white text-black px-5 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden font-semibold"
                      >
                        <ExternalLinkIcon className="w-5 h-5 inline-block mr-2" />
                        <span className="relative z-10">View Live Project</span>
                      </button>
                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className="group cursor-pointer flex flex-row gap-2 items-center justify-center border-2 border-white/80 text-white px-5 py-4 rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden font-semibold backdrop-blur-sm"
                      >
                        <Github className="w-5 h-5 inline-block mr-2" />
                        <span className="relative z-10">Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

            <div className="text-center mt-20">
              <div
                id="github-link"
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible["github-link"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl opacity-50"></div>
                  <a
                    href="https://github.com/Biprodeep12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold group"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>View More Projects on GitHub</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="pt-27.5 pb-20 px-6 relative z-10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div
              id="experience-title"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["experience-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl mb-16 text-center text-white drop-shadow-lg">
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
              <h2 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-center text-white drop-shadow-lg mb-4">
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
                Let&apos;s Work Together
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
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
    </>
  )
}
