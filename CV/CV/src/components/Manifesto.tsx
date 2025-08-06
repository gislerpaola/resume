'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'
import { Lightbulb, Target, Zap, Heart } from 'lucide-react'

const principles = [
  {
    icon: Lightbulb,
    title: 'Creative Problem Solving',
    description: 'Every challenge is an opportunity to innovate. I approach problems with a creative mindset, drawing from diverse experiences to find unique solutions.'
  },
  {
    icon: Target,
    title: 'Process Excellence',
    description: 'Great outcomes start with great processes. I believe in optimizing workflows, eliminating inefficiencies, and creating systems that scale.'
  },
  {
    icon: Zap,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and so do I. From film production to Web3, I embrace new challenges and constantly expand my skill set.'
  },
  {
    icon: Heart,
    title: 'Human-Centered Design',
    description: 'Behind every process, system, or technology are people. I build solutions that enhance human potential and create meaningful impact.'
  }
]

export function Manifesto() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="manifesto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            My Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At the intersection of creativity and technology, I believe in building solutions that 
            are not just functional, but transformative. Here's what drives my work.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="h-full p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-lg">
            <blockquote className="text-xl md:text-2xl font-light text-gray-800 italic mb-6 leading-relaxed">
              "The future belongs to those who can bridge worlds – combining creative thinking 
              with technical execution, human insight with digital innovation."
            </blockquote>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Paola G.</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">6+</h4>
            <p className="text-gray-600">Years in Film Production</p>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">3+</h4>
            <p className="text-gray-600">Programming Languages</p>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">∞</h4>
            <p className="text-gray-600">Curiosity & Growth Mindset</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}