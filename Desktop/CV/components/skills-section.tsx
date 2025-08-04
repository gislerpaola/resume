"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clapperboard, Code, Globe, Palette, Users, Zap } from "lucide-react"
import { skills } from "@/lib/utils"

const skillCategories = {
  creative: {
    title: "Creative Leadership",
    icon: <Clapperboard className="w-8 h-8" />,
    description: "From film sets to boardrooms",
    gradient: "from-pink-500 to-rose-600"
  },
  technical: {
    title: "Technical Innovation",
    icon: <Code className="w-8 h-8" />,
    description: "Building the future of tech",
    gradient: "from-blue-500 to-cyan-600"
  },
  languages: {
    title: "Global Communication", 
    icon: <Globe className="w-8 h-8" />,
    description: "Connecting across cultures",
    gradient: "from-green-500 to-emerald-600"
  }
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>('creative')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-film-reel to-black">
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
              SKILL SET
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-gold to-cinematic-bronze mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A versatile toolkit developed through years of high-pressure environments, 
            international collaboration, and continuous learning.
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={activeCategory === key ? "cinematic" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(key as keyof typeof skills)}
              className={`flex items-center gap-3 px-6 py-4 transition-all duration-300 ${
                activeCategory === key 
                  ? 'shadow-lg shadow-cinematic-gold/25' 
                  : 'hover:border-cinematic-gold/50'
              }`}
            >
              {category.icon}
              <span className="font-semibold">{category.title}</span>
            </Button>
          ))}
        </motion.div>

        {/* Skills display */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${skillCategories[activeCategory].gradient} p-[2px] rounded-xl`}
          >
            <div className="bg-black/90 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="text-cinematic-gold">
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  {skillCategories[activeCategory].description}
                </p>
              </div>

              <div className="grid gap-6">
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-white text-lg group-hover:text-cinematic-gold transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-cinematic-gold font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-gray-800 group-hover:shadow-lg group-hover:shadow-cinematic-gold/20 transition-all duration-300"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-cinematic-gold via-cinematic-bronze to-cinematic-gold rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skill highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Users className="w-12 h-12 text-cinematic-gold" />,
              title: "Team Leadership",
              description: "Coordinated crews of 100+ on major film productions"
            },
            {
              icon: <Zap className="w-12 h-12 text-cinematic-gold" />,
              title: "Under Pressure",
              description: "Thrives in high-stakes, deadline-driven environments"
            },
            {
              icon: <Palette className="w-12 h-12 text-cinematic-gold" />,
              title: "Creative Problem Solving",
              description: "Innovative solutions for complex operational challenges"
            }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-film-noir to-black p-8 rounded-xl border border-cinematic-gold/20 hover:border-cinematic-gold/60 transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4 flex justify-center"
              >
                {highlight.icon}
              </motion.div>
              <h4 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-cinematic-gold transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}