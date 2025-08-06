'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function StaticContactDots() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 8 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Contact Dots */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <Button
              size="sm"
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/60184024695?text=Hi%20Paola,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!', '_blank')}
            >
              <MessageCircle size={20} />
            </Button>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                WhatsApp
              </div>
            </div>
          </motion.div>

          {/* Email Dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <Button
              size="sm"
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300"
              onClick={() => window.open('mailto:gislerpaola@gmail.com?subject=Portfolio%20Contact', '_blank')}
            >
              <Mail size={20} />
            </Button>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Email
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}