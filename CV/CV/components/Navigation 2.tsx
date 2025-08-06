"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Film, User, Briefcase, Code, Heart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#hero", icon: <User size={16} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
  { label: "Skills", href: "#skills", icon: <Code size={16} /> },
  { label: "Portfolio", href: "#projects", icon: <Film size={16} /> },
  { label: "Manifesto", href: "#manifesto", icon: <Heart size={16} /> },
  { label: "Contact", href: "#footer", icon: <Mail size={16} /> },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        style={{ 
          opacity,
          backdropFilter: `blur(${backdropBlur}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/70 border-b border-yellow-400/20 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <Film className="w-6 h-6 text-yellow-400" />
              <span className="font-serif text-xl font-bold text-white">
                Paola G.
              </span>
            </motion.div>

            {/* Navigation items */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-yellow-400/20 md:hidden"
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Mobile logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <Film className="w-6 h-6 text-yellow-400" />
            <span className="font-serif text-lg font-bold text-white">
              Paola G.
            </span>
          </motion.div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 hover:bg-yellow-400/10"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </Button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-yellow-400 bg-yellow-400/10 border-r-2 border-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating scroll progress indicator */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 right-8 z-40 hidden lg:block"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-[2px]"
        >
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Film className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}