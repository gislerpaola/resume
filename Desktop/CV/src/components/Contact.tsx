'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gislerpaola@gmail.com',
    href: 'mailto:gislerpaola@gmail.com',
    description: 'Best way to reach me'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+60 18 402 4695',
    href: 'tel:+60184024695',
    description: 'Available during business hours'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kuala Lumpur, Malaysia',
    href: null,
    description: 'Open to remote opportunities'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/paolagisler',
    href: 'https://www.linkedin.com/in/paolagisler',
    description: 'Professional networking'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/gislerpaola',
    href: 'https://github.com/gislerpaola',
    description: 'Code repositories & projects'
  }
]

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website')
    const body = encodeURIComponent(
      `Hi Paola,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.location.href = `mailto:gislerpaola@gmail.com?subject=${subject}&body=${body}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Always interested in discussing new opportunities, collaborations, or just having 
            a conversation about technology, creativity, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                const content = (
                  <motion.div
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <Icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{method.label}</h4>
                      <p className="text-gray-700 mb-1">{method.value}</p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                  </motion.div>
                )

                return (
                  <div key={index}>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                )
              })}
            </div>

            <motion.div
              className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-gray-900 mb-3">Currently Interested In</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Python Development Opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Web3 & DeFi Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Operations & Process Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Remote Collaboration</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Paola Gisler. Built with Next.js, React, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}