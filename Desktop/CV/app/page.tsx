'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ChevronUp, Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled 
            ? 'bg-background/90 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-mono">P</span>
              </div>
              <span className="font-mono font-bold gradient-text">paola.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    text-sm font-mono transition-colors hover:text-primary
                    ${activeSection === item.href.substring(1) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className={`
            md:hidden overflow-hidden
            ${isMenuOpen ? 'border-b border-border' : ''}
            bg-background/95 backdrop-blur-md
          `}
        >
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`
                  block w-full text-left py-2 px-3 rounded-lg text-sm font-mono transition-colors
                  hover:bg-primary/10 hover:text-primary
                  ${activeSection === item.href.substring(1) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Experience Section */}
        <div id="experience">
          <ExperienceSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-mono">P</span>
              </div>
              <span className="font-mono font-bold gradient-text text-xl">paola.dev</span>
            </div>
            <p className="text-muted-foreground mb-4 font-mono text-sm">
              Built with Next.js, React, Tailwind CSS, and Framer Motion
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a 
                href="mailto:gislerpaola@gmail.com"
                className="hover:text-primary transition-colors"
              >
                gislerpaola@gmail.com
              </a>
              <span>•</span>
              <a 
                href="https://github.com/gislerpaola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/paolagisler"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-xs text-muted-foreground font-mono">
              <p>© 2024 Paola Gisler. All rights reserved.</p>
              <p className="mt-1">
                <span className="text-primary">$</span> echo "Always learning, always building" 
                <span className="animate-blink text-primary">|</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          scale: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-glow"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Clean noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
          }}
        />
      </div>
    </div>
  )
}