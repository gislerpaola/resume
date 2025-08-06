'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/paolacodes1",
    link: "https://github.com/paolacodes1",
    color: "text-purple-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/paolagisler",
    link: "https://www.linkedin.com/in/paolagisler",
    color: "text-cyan-400"
  }
]

const terminalCommands = [
  { command: "cd /contact", delay: 0 },
  { command: "ls -la", delay: 800 },
  { command: "email.txt  phone.txt  social.txt", delay: 1600, isOutput: true },
  { command: "cat contact_info.json", delay: 2400 },
  { command: "}", delay: 3200, isOutput: true },
  { command: '  "status": "available_for_opportunities",', delay: 3400, isOutput: true },
  { command: '  "response_time": "< 24 hours",', delay: 3600, isOutput: true },
  { command: '  "preferred_contact": "email",', delay: 3800, isOutput: true },
  { command: '  "collaboration": "open_source_welcome"', delay: 4000, isOutput: true },
  { command: "}", delay: 4200, isOutput: true },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [visibleCommands, setVisibleCommands] = useState<number[]>([])

  useState(() => {
    terminalCommands.forEach((cmd, index) => {
      setTimeout(() => {
        setVisibleCommands(prev => [...prev, index])
      }, cmd.delay)
    })
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./get-in-touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let&apos;s discuss how automation, 
            Web3 development, or data analysis can solve your challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className={`p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glow-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Send Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                      placeholder="Project collaboration, consultation, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>
                  
                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-500 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Error sending message. Please try again or email directly.</span>
                    </motion.div>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full font-mono group hover:animate-glow"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4 group-hover:animate-pulse" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="flex space-x-4 mt-6">
              <Button 
                variant="outline" 
                className="flex-1 group hover:border-primary hover:text-primary transition-all"
                onClick={() => window.open('https://github.com/paolacodes1', '_blank')}
              >
                <Github className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 group hover:border-primary hover:text-primary transition-all"
                onClick={() => window.open('https://www.linkedin.com/in/paolagisler', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}