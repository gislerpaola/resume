'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'

const experiences = [
  {
    company: 'BG Meios de Pagamento',
    role: 'Operations Coordinator',
    period: 'Jun 2024 - Present',
    description: 'Leading process optimization initiatives in the payment processing sector. Streamlining operations and implementing efficiency improvements.',
    location: 'Remote',
    type: 'current'
  },
  {
    company: 'Freelance Film Production',
    role: '2nd Assistant Director',
    period: 'Feb 2018 - Jun 2024',
    description: 'Managed production workflows for major film and television projects. Coordinated between departments, managed schedules, and ensured seamless on-set operations.',
    location: 'Brazil & International',
    type: 'past'
  },
  {
    company: 'Various Administrative Roles',
    role: 'Administrative Professional',
    period: '2016 - 2018',
    description: 'Built foundation in operations management and process optimization across different industries in Brazil.',
    location: 'Brazil',
    type: 'past'
  }
]

export function Journey() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="journey" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From creative storytelling to technical operations, each role has shaped my approach to problem-solving and innovation.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                exp.type === 'current' ? 'bg-blue-500' : 'bg-gray-400'
              } shadow-lg z-10`}></div>

              {/* Content card */}
              <motion.div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${
                      exp.type === 'current' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">{exp.company}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{exp.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4">Education</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-gray-900">Bachelor's in Film Production</h4>
            <p className="text-gray-600">Full Sail University</p>
            <p className="text-gray-500 text-sm">2016 - 2017</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}