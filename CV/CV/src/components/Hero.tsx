'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const contactItems = [
    { icon: Linkedin, text: 'linkedin.com/in/paolagisler', href: 'https://www.linkedin.com/in/paolagisler' },
    { icon: Github, text: 'github.com/paolacodes1', href: 'https://github.com/paolacodes1' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight"
          variants={itemVariants}
        >
          Paola G.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          variants={itemVariants}
        >
          Creative background → film AD (6 years) → operations/BPO → learning Python/Web3. 
          Problem solver, process optimizer, building at intersection of storytelling, crypto, and tech.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={itemVariants}
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const content = (
              <div className="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Icon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            )

            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="#journey"
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <span className="text-sm font-medium">Explore my journey</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}