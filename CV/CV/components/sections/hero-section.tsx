"use client"

import { motion } from "framer-motion"
import { Film, Camera, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain opacity-20"></div>
      
      {/* Animated film reels */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Film size={128} className="text-yellow-400" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Camera size={96} className="text-yellow-400" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
                <span className="gold-shimmer bg-clip-text text-transparent">
                  PAOLA
                </span>
              </h1>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold">
                <span className="gold-shimmer bg-clip-text text-transparent">
                  GISLER
                </span>
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold text-lg md:text-xl tracking-wider"
            >
              CURRÍCULO PROFISSIONAL
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-gray-100 mb-4">
            FROM FILM SETS TO CODE
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A cinematic journey from Assistant Director on major Hollywood productions 
          to Operations Coordinator, building the future of fintech and Web3 technologies.
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-100 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
            <MapPin size={20} className="text-yellow-400" />
            <span className="text-base md:text-lg font-medium">Kuala Lumpur, Malaysia</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-yellow-400/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-yellow-400/30">
            <Mail size={20} className="text-yellow-400" />
            <span className="text-base md:text-lg font-semibold">gislerpaola@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-yellow-400/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-yellow-400/30">
            <Phone size={20} className="text-yellow-400" />
            <span className="text-base md:text-lg font-semibold">+60184024695</span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            variant="default" 
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Film className="mr-2" size={20} />
            Explore My Journey
          </Button>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/paolagisler" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/gislerpaola" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}