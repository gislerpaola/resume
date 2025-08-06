'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Mail, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contactOptions = [
    {
      icon: Phone,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/60184024695?text=Olá%20Paola,%20vi%20seu%20currículo%20e%20gostaria%20de%20conversar!', '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:gislerpaola@gmail.com?subject=Contato%20via%20Currículo', '_blank'),
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Contact options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-4 space-y-3"
              >
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={option.action}
                      className={`${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full`}
                    >
                      <option.icon size={20} />
                      <span className="hidden sm:inline">{option.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main toggle button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                ${isOpen 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700'
                }
                flex items-center justify-center text-black
              `}
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
              </motion.div>
            </Button>
          </motion.div>

          {/* Pulse animation when closed */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}