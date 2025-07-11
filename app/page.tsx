"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = {
    languages: ["Python", "C", "HTML", "CSS", "R"],
    frameworks: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    tools: ["Git", "GitHub", "VS Code", "Jupyter", "Anaconda", "Google Colab", "Canva", "Figma"],
  }

  const projects = [
    {
      title: "Facial Expression Detection",
      description:
        "Deep learning model for recognizing facial expressions using LandingAI Lens. Trained on 420+ labeled images to classify emotions: Happy, Sad, Angry, Surprise, Fear, Disgust, and Neutral.",
      image: "/facial-detection-tech.png",
      github: "https://github.com/akshat09105/Facial_Expression_Model",
      demo: "#",
      tags: ["Python", "Deep Learning", "Computer Vision", "LandingAI"],
    },
    {
      title: "Sort Heterogeneous Data ML",
      description:
        "Advanced Python project for sorting heterogeneous data containing mixed types (integers, floats, strings, booleans, None). Implements robust logic with custom sorting functions, edge case handling, and type priority rules for real-world data processing scenarios.",
      image: "/big-data-sorting.png",
      github: "https://github.com/akshat09105/Sort-Heterogeneous-Data-ML",
      demo: "#",
      tags: ["Python", "Data Processing", "Algorithms", "Jupyter"],
    },
    {
      title: "Weather Prediction Model",
      description: "Machine learning model to predict weather patterns using historical data analysis.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["Python", "Machine Learning", "Deep Learning"],
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["HTML", "CSS", "Responsive"],
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600 dark:text-blue-400 animate-pulse">Akshat Gupta</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-700 dark:text-gray-300 hover:rotate-180 transition-all duration-500"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden transition-transform duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-typing">
              Akshat Gupta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium animate-fade-in-up-delayed">
              Aspiring Full-Stack Developer | ML/DL Enthusiast | Strong Leader | Engineering Student | Passionate
              Problem Solver
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-slow">
              First-year Computer Engineering student at Thapar University with completed Machine Learning and ongoing
              Deep Learning expertise. Active GitHub contributor and actively take part in Kaggle competitions,
              passionate about creating innovative AI-powered solutions through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-slower">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce-subtle"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${isVisible.about ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-left">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  I'm a first-year Computer Engineering student at Thapar University with a passion for technology and
                  innovation. Beyond my technical skills, I possess strong leadership abilities and excel at bringing
                  out the best in people through effective collaboration and motivation. My journey in programming began
                  with curiosity about how things work, and it has evolved into a deep love for creating solutions that
                  make a difference.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  I have successfully completed comprehensive Machine Learning training and am currently advancing my
                  expertise in Deep Learning. My focus areas include web development, AI model development, and computer
                  vision applications. I enjoy working on challenging projects that push the boundaries of what's
                  possible with modern AI technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  As a natural leader, I believe in empowering team members and creating an environment where everyone
                  can contribute their unique strengths. I enjoy mentoring peers, organizing collaborative projects, and
                  fostering innovation through effective communication and strategic thinking.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "University", value: "Thapar University" },
                    { label: "Branch", value: "Computer Engineering" },
                    { label: "Year", value: "First Year" },
                    { label: "Specialization", value: "ML/DL, AI, Web Dev, Leadership" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="transform hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center animate-slide-in-right">
              <div className="relative group">
                <div
                  className="w-80 h-80 rounded-full overflow-hidden border-8 border-blue-100 dark:border-blue-900 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                  style={{ marginLeft: "-76px" }}
                >
                  <img
                    src="/akshat-profile.jpg"
                    alt="Akshat Gupta"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: "center -1cm" }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow group-hover:animate-spin-slow transition-all duration-500">
                  <span className="text-white text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${isVisible.skills ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-right">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full animate-expand-delayed"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Programming Languages", icon: "💻", skills: skills.languages, color: "blue" },
              { title: "AI/ML Frameworks", icon: "🤖", skills: skills.frameworks, color: "green" },
              { title: "Tools & Platforms", icon: "🛠️", skills: skills.tools, color: "purple" },
            ].map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`p-6 hover:shadow-xl transition-all duration-500 border-0 shadow-md transform hover:-translate-y-2 hover:rotate-1 animate-slide-in-up`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle hover:animate-spin-slow transition-all duration-300`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`bg-${category.color}-100 text-${category.color}-800 dark:bg-${category.color}-900 dark:text-${category.color}-200 hover:scale-110 transition-transform duration-300 animate-fade-in-scale`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${isVisible.projects ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-left">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-0 shadow-md overflow-hidden animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full hover:scale-110 transition-transform duration-300"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:scale-110 transition-transform duration-300 animate-fade-in-scale"
                        style={{ animationDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${isVisible.contact ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-right">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full animate-expand-delayed"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg animate-fade-in-up-delayed">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "akshat9105@gmail.com", href: "mailto:akshat9105@gmail.com" },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Connect with me",
                    href: "https://www.linkedin.com/in/akshat-gupta-6a27a331a/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "View my repositories",
                    href: "https://github.com/akshat09105",
                  },
                ].map((contact, index) => (
                  <div
                    key={contact.label}
                    className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <contact.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{contact.label}</p>
                      <a
                        href={contact.href}
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 hover:text-blue-800"
                        target={contact.label !== "Email" ? "_blank" : undefined}
                        rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 animate-slide-in-right">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 animate-slide-in-left">
              <p className="text-gray-400">© 2025 Akshat Gupta. All rights reserved.</p>
            </div>

            <div className="flex space-x-6 animate-slide-in-right">
              {[
                { icon: Github, href: "https://github.com/akshat09105" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akshat-gupta-6a27a331a/", target: "_blank" },
                { icon: Mail, href: "mailto:akshat9105@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  target={social.target}
                  rel={social.target ? "noopener noreferrer" : undefined}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center justify-center mx-auto transform hover:scale-110 animate-bounce-subtle"
            >
              <ChevronDown className="h-5 w-5 transform rotate-180 mr-2" />
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
