"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award, Star } from "lucide-react"
// import { experiences } from "@/lib/utils"
const experiences: any[] = [] // Placeholder for unused component

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-black via-film-noir to-black">
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
              THE REEL STORY
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From coordinating A-list casts to optimizing fintech operations - 
            a journey of leadership, precision, and innovation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-yellow-400 to-transparent z-0"></div>
              )}
              
              {/* Experience card */}
              <div className="relative flex flex-col md:flex-row gap-8 group">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-4 border-black z-10 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse opacity-50"></div>
                  </motion.div>
                </div>

                {/* Movie poster style card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-1 bg-gradient-to-br ${exp.color} p-[2px] rounded-lg film-border group-hover:shadow-2xl group-hover:shadow-yellow-400/20 transition-all duration-500`}
                >
                  <div className="bg-black/90 rounded-lg p-8 h-full backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div className="flex-1">
                        <motion.h3 
                          className="font-serif text-2xl md:text-3xl font-bold text-yellow-400 mb-2"
                          whileHover={{ textShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
                        >
                          {exp.company}
                        </motion.h3>
                        <h4 className="text-xl font-semibold text-white mb-4">{exp.role}</h4>
                      </div>
                      
                      {/* Rating stars (film industry touch) */}
                      <div className="flex gap-1 mb-4 md:mb-0">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-yellow-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} className="text-yellow-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Award size={16} className="text-yellow-400" />
                        <span className="font-semibold text-white">Key Achievements</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement: any, achievementIndex: number) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Film credits showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            26 Film & TV Credits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {["Booksmart", "The Orville", "Ford v Ferrari", "Game Night", "The Disaster Artist", "Baywatch"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-film-noir to-black p-4 rounded-lg border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-white mb-1">{title}</div>
                <div className="text-xs text-gray-400">2nd AD</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}