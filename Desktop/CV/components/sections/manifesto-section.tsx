"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Heart, Globe, Zap, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const manifestoPoints = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion-Driven Excellence",
    description: "Every project, from film sets to fintech operations, deserves the same level of dedication and creative problem-solving."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Perspective",
    description: "International experience across Brazil, USA, and Malaysia has taught me that the best solutions come from diverse viewpoints."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Adaptive Innovation",
    description: "The film industry taught me to think fast, adapt quickly, and find creative solutions under pressure - skills that translate perfectly to tech."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision & Leadership",
    description: "Coordinating million-dollar film productions requires the same precision and leadership skills needed in operations and tech development."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Continuous Learning",
    description: "From mastering film production to exploring Web3 and Python - I believe in constant growth and embracing new technologies."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Building the Future",
    description: "Combining creative vision with operational excellence to build technologies that make a meaningful impact on people's lives."
  }
]

export function ManifestoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-film-projection to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cinematic-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cinematic-bronze/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
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
              MY MANIFESTO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-gold to-cinematic-bronze mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "From coordinating A-list casts on Hollywood sets to optimizing fintech operations 
            in Southeast Asia, I've learned that great work transcends industries. 
            It's about people, processes, and the passion to build something meaningful."
          </p>
        </motion.div>

        {/* Main manifesto content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left side - Personal statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-cinematic-gold/10 to-cinematic-bronze/10 p-8 rounded-xl border border-cinematic-gold/20 backdrop-blur-sm">
              <h3 className="font-serif text-3xl font-bold text-cinematic-gold mb-6">
                The Journey Continues
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">From Brazil to Hollywood to Malaysia</strong>, 
                  my career has been a story of adaptation, learning, and growth. 
                  Each transition taught me something new about leadership, creativity, and resilience.
                </p>
                <p>
                  <strong className="text-white">The film industry</strong> gave me precision under pressure, 
                  the ability to coordinate complex operations, and an understanding that every role 
                  matters in creating something extraordinary.
                </p>
                <p>
                  <strong className="text-white">Operations and tech</strong> represent the next chapter - 
                  applying that same level of dedication and creative problem-solving to build 
                  the infrastructure of tomorrow.
                </p>
                <p>
                  <strong className="text-white">Web3 and emerging technologies</strong> excite me because 
                  they represent the ultimate fusion of creativity and functionality - 
                  building systems that empower people globally.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Core values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {manifestoPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-film-noir to-black rounded-lg border border-cinematic-gold/10 hover:border-cinematic-gold/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-cinematic-gold group-hover:text-cinematic-bronze transition-colors duration-300"
                >
                  {point.icon}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cinematic-gold transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-cinematic-gold/10 to-cinematic-bronze/10 p-12 rounded-2xl border border-cinematic-gold/20 backdrop-blur-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                "Great storytelling happens both on screen and in code. 
                Whether it's managing a film set or optimizing operations, 
                success comes from understanding that every detail matters, 
                every person contributes, and every challenge is an opportunity to innovate."
              </blockquote>
              <cite className="text-cinematic-gold font-semibold text-lg">
                — Paola Gisler
              </cite>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring creativity, precision, and innovation to your next project? 
            Let's create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cinematic" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => window.open('mailto:gislerpaola@gmail.com', '_blank')}
            >
              <Heart className="mr-2" size={20} />
              Start a Conversation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-cinematic-gold text-cinematic-gold hover:bg-cinematic-gold hover:text-black"
              onClick={() => window.open('https://www.linkedin.com/in/paolagisler', '_blank')}
            >
              <Globe className="mr-2" size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}