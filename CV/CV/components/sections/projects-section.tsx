"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "BG Payment Operations",
    category: "Fintech Operations",
    description: "Streamlined payment processing workflows and implemented quality assurance protocols for international fintech operations.",
    technologies: ["Process Design", "Quality Assurance", "International Operations", "Team Coordination"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-600 to-purple-700",
    achievements: [
      "Optimized payment processing efficiency by 40%",
      "Implemented cross-functional team coordination protocols",
      "Established quality metrics and reporting systems"
    ]
  },
  {
    id: 2,
    title: "Film Production Management",
    category: "Creative Leadership",
    description: "26 film and TV credits including major productions like Booksmart, The Orville, and Ford v Ferrari.",
    technologies: ["Scheduling", "Cast Coordination", "Crew Management", "Budget Oversight"],
    image: "https://images.unsplash.com/photo-1489599510041-39c2cd16cd17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-amber-600 to-orange-700",
    achievements: [
      "Managed daily schedules for 100+ cast and crew",
      "Coordinated logistics for multi-million dollar productions",
      "Maintained 99% on-time delivery record"
    ]
  },
  {
    id: 3,
    title: "Web3 & Python Learning",
    category: "Technical Development",
    description: "Self-directed learning journey into blockchain technologies and Python development for future tech applications.",
    technologies: ["Python", "Blockchain", "Smart Contracts", "DeFi", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-green-600 to-teal-700",
    achievements: [
      "Developed Python automation scripts",
      "Understanding of blockchain fundamentals",
      "Exploring DeFi and smart contract development"
    ]
  },
  {
    id: 4,
    title: "International Transitions",
    category: "Global Operations",
    description: "Successfully navigated career transitions across three countries, adapting to diverse business cultures.",
    technologies: ["Cultural Adaptation", "International Business", "Remote Collaboration", "Multilingual Communication"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2135&q=80",
    gradient: "from-purple-600 to-pink-700",
    achievements: [
      "Successful transitions: Brazil → USA → Malaysia",
      "Built professional networks across 3 continents",
      "Fluent in 4 languages for global communication"
    ]
  }
]

const categories = ["All", "Fintech Operations", "Creative Leadership", "Technical Development", "Global Operations"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-film-noir to-black">
      <div className="absolute inset-0 film-grain opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            <span className="gold-shimmer bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of leadership, innovation, and problem-solving across 
            film production, fintech operations, and technical development.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'shadow-lg shadow-yellow-400/25' 
                  : 'hover:border-yellow-400/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} p-[2px] cursor-pointer`}
            >
              <div className="bg-black/90 rounded-xl p-6 h-full backdrop-blur-sm">
                {/* Project image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400/90 p-4 rounded-full"
                    >
                      <Play className="w-8 h-8 text-black" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-yellow-400 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-sm rounded-full border border-yellow-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                    {project.category === "Technical Development" && (
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-serif text-3xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h3>
          <Button variant="default" size="lg" className="px-8 py-4">
            Let's Collaborate
          </Button>
        </motion.div>
      </div>
    </section>
  )
}