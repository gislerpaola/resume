"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Heart, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-film-noir py-16">
      <div className="absolute inset-0 film-grain opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-serif text-3xl font-bold text-cinematic-gold mb-2">
                Paola Gisler
              </h3>
              <p className="text-gray-300 text-lg">
                From Film Sets to Code
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300">
                <MapPin size={18} className="text-cinematic-gold" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300">
                <Mail size={18} className="text-cinematic-gold" />
                <a href="mailto:gislerpaola@gmail.com" className="hover:underline">
                  gislerpaola@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300">
                <Phone size={18} className="text-cinematic-gold" />
                <a href="tel:+60184024695" className="hover:underline">
                  +60184024695
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-serif text-xl font-bold text-white">
              Quick Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Portfolio", href: "#projects" },
                { label: "Manifesto", href: "#manifesto" }
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="block text-gray-300 hover:text-cinematic-gold transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-serif text-xl font-bold text-white">
              Let's Connect
            </h4>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-cinematic-gold/30 hover:border-cinematic-gold hover:bg-cinematic-gold hover:text-black transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/paolagisler" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-cinematic-gold/30 hover:border-cinematic-gold hover:bg-cinematic-gold hover:text-black transition-all duration-300"
              >
                <a href="https://github.com/gislerpaola" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-cinematic-gold/30 hover:border-cinematic-gold hover:bg-cinematic-gold hover:text-black transition-all duration-300"
              >
                <a href="mailto:gislerpaola@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Ready to collaborate on your next project?
              </p>
              <Button 
                variant="cinematic" 
                className="w-full"
                onClick={() => window.open('mailto:gislerpaola@gmail.com', '_blank')}
              >
                <Heart className="mr-2" size={16} />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-cinematic-gold/20 mb-8" />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Film size={16} className="text-cinematic-gold" />
            <span>© 2024 Paola Gisler. Crafted with passion and precision.</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-cinematic-gold mx-1" />
            <span>using Next.js & Framer Motion</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 right-4 w-16 h-16 opacity-10"
        >
          <Film size={64} className="text-cinematic-gold" />
        </motion.div>
      </div>
    </footer>
  )
}