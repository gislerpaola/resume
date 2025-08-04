'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Github, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const terminalLines = [
  { prompt: 'guest@portfolio:~$', command: 'whoami', delay: 0 },
  { prompt: '', command: 'paola.gisler', delay: 800, color: 'text-terminal-green' },
  { prompt: 'guest@portfolio:~$', command: 'cat about.txt', delay: 1600 },
  { prompt: '', command: 'Developer & Automation Specialist', delay: 2400, color: 'text-terminal-blue' },
  { prompt: '', command: 'Location: Kuala Lumpur, Malaysia', delay: 2800, color: 'text-terminal-text' },
  { prompt: '', command: 'Specializing in Python, Web3 & Process Automation', delay: 3200, color: 'text-terminal-text' },
  { prompt: 'guest@portfolio:~$', command: 'ls -la skills/', delay: 4000 },
  { prompt: '', command: 'drwxr-xr-x  python/', delay: 4400, color: 'text-terminal-yellow' },
  { prompt: '', command: 'drwxr-xr-x  web3-blockchain/', delay: 4600, color: 'text-terminal-yellow' },
  { prompt: '', command: 'drwxr-xr-x  automation/', delay: 4800, color: 'text-terminal-yellow' },
  { prompt: '', command: 'drwxr-xr-x  data-analysis/', delay: 5000, color: 'text-terminal-yellow' },
  { prompt: 'guest@portfolio:~$', command: '', delay: 5500, cursor: true },
]

interface TerminalLineProps {
  line: typeof terminalLines[0]
  isVisible: boolean
}

const TerminalLine = ({ line, isVisible }: TerminalLineProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const fullText = line.prompt + (line.prompt ? ' ' : '') + line.command
    let currentIndex = 0

    const typingTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingTimer)
        if (line.cursor) {
          setShowCursor(true)
        }
      }
    }, 30)

    return () => clearInterval(typingTimer)
  }, [isVisible, line])

  if (!isVisible) return null

  return (
    <div className="flex items-center font-mono text-sm">
      <span className={line.color || 'text-terminal-text'}>
        {line.prompt && (
          <span className="text-terminal-green">{line.prompt}</span>
        )}
        {line.prompt && ' '}
        <span className={line.color || 'text-terminal-text'}>
          {line.command}
        </span>
        {showCursor && (
          <span className="animate-blink text-terminal-green ml-1">|</span>
        )}
      </span>
    </div>
  )
}

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, line.delay)
    })
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="terminal-window"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-terminal-text text-sm font-mono">
                paola@portfolio: ~/developer
              </span>
            </div>
            <div className="flex items-center">
              <Terminal className="w-4 h-4 text-terminal-text" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="terminal-content min-h-[400px]">
            <div className="space-y-2">
              {terminalLines.map((line, index) => (
                <TerminalLine
                  key={index}
                  line={line}
                  isVisible={visibleLines.includes(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 6 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <Button 
            variant="terminal" 
            size="lg"
            className="group hover:glow-border transition-all duration-300"
            onClick={() => window.open('https://github.com/gislerpaola', '_blank')}
          >
            <Github className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            View GitHub
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-terminal-border hover:border-primary hover:glow-border transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 7 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Kuala Lumpur, Malaysia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>gislerpaola@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+60184024695</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}