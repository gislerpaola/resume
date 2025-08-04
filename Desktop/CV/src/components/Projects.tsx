'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/components/hooks/useInView'
import { ExternalLink, Github, TrendingUp, Database, Zap, Bot } from 'lucide-react'

const projects = [
  {
    title: 'Crypto Portfolio Tracker',
    description: 'A comprehensive Python application for tracking cryptocurrency investments across multiple wallets and exchanges. Features real-time price updates, portfolio analytics, and performance visualization.',
    technologies: ['Python', 'APIs', 'Data Visualization', 'JSON'],
    icon: TrendingUp,
    features: [
      'Multi-wallet portfolio tracking',
      'Real-time price monitoring',
      'Performance analytics',
      'Automated reporting'
    ],
    status: 'Active Development',
    category: 'Web3 & Finance'
  },
  {
    title: 'Aave DeFi Dashboard',
    description: 'Interactive dashboard for monitoring DeFi positions on the Aave protocol. Provides insights into lending/borrowing positions, yield tracking, and risk assessment.',
    technologies: ['Python', 'Web3.py', 'DeFi Protocols', 'Dashboard'],
    icon: Zap,
    features: [
      'Real-time position monitoring',
      'Yield calculation',
      'Risk assessment tools',
      'Transaction history'
    ],
    status: 'Beta Version',
    category: 'DeFi & Analytics'
  },
  {
    title: 'Process Automation Suite',
    description: 'Collection of Python scripts designed to automate repetitive operational tasks. Includes file processing, data extraction, and workflow optimization tools.',
    technologies: ['Python', 'Automation', 'File Processing', 'Workflow'],
    icon: Bot,
    features: [
      'Automated file processing',
      'Data extraction tools',
      'Workflow optimization',
      'Error handling & logging'
    ],
    status: 'Production Use',
    category: 'Operations & Automation'
  },
  {
    title: 'Data Analysis Pipeline',
    description: 'Modular data processing pipeline for operational metrics analysis. Extracts insights from various data sources to support decision-making processes.',
    technologies: ['Python', 'SQL', 'Data Analysis', 'Reporting'],
    icon: Database,
    features: [
      'Multi-source data integration',
      'Automated analysis workflows',
      'Custom reporting engine',
      'Trend identification'
    ],
    status: 'Continuous Improvement',
    category: 'Data & Analytics'
  }
]

const statusColors = {
  'Active Development': 'bg-blue-100 text-blue-800',
  'Beta Version': 'bg-yellow-100 text-yellow-800',
  'Production Use': 'bg-green-100 text-green-800',
  'Continuous Improvement': 'bg-purple-100 text-purple-800'
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building practical solutions that combine technical skills with real-world problem solving.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                className="group h-full"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="h-full bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-gray-100 rounded-lg mr-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">{project.category}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <motion.a
                      href="https://github.com/gislerpaola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <motion.a
            href="https://github.com/gislerpaola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}