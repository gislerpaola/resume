'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Code2, Database, Bot, Coins, Terminal, Clipboard } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    name: "Crypto Price Tracker",
    description: "Python-based cryptocurrency price tracking application with real-time price monitoring and personalized coin lists. Features data from CoinMarketCap and CoinRanking with AI-assisted interface design.",
    icon: Coins,
    technologies: ["Python", "Requests", "BeautifulSoup4", "JSON", "AI-Assisted Design"],
    features: [
      "Real-time cryptocurrency price tracking",
      "Top 10, 50, and 100 crypto rankings",
      "Personalized coin list with persistent storage",
      "Data from multiple sources (CoinMarketCap, CoinRanking)",
      "AI-generated interface with custom prompts"
    ],
    github: "https://github.com/paolacodes1/crypto_tracker",
    demo: null,
    status: "Active",
    stars: 0,
    forks: 0,
    language: "Python",
    lastUpdated: "2025"
  },
  {
    id: 2,
    name: "Aave Wallet Tracker",
    description: "Desktop DeFi dashboard for secure Aave wallet health monitoring. Features encrypted wallet storage and automated data tracking without direct wallet connection for enhanced security.",
    icon: Database,
    technologies: ["Python", "Tkinter", "Selenium", "Cryptography", "Fernet Encryption"],
    features: [
      "Secure wallet address encryption with Fernet",
      "Health Factor and borrowing capacity monitoring",
      "Automated dashboard data scraping",
      "Polygon network Aave wallet support",
      "Local encrypted storage with password-derived keys"
    ],
    github: "https://github.com/paolacodes1/aave_dashboard",
    demo: null,
    status: "Active",
    stars: 0,
    forks: 0,
    language: "Python",
    lastUpdated: "2025"
  },
  {
    id: 3,
    name: "Clipboard Manager",
    description: "macOS menu bar utility that extends system clipboard functionality with persistent history and unlimited storage. Perfect for professionals who frequently reuse text snippets and templates.",
    icon: Clipboard,
    technologies: ["Python", "Rumps", "Pyperclip", "PyInstaller", "macOS APIs"],
    features: [
      "Persistent clipboard history across restarts",
      "Menu bar access with one-click copying",
      "Unlimited item storage capacity",
      "Selective item deletion and history clearing",
      "Standalone .app distribution"
    ],
    github: "https://github.com/paolacodes1/clipboard_manager",
    demo: null,
    status: "Active",
    stars: 0,
    forks: 0,
    language: "Python",
    lastUpdated: "2025"
  },
  {
    id: 4,
    name: "AI Agent Reporting System",
    description: "Enterprise-grade reporting system leveraging AI agents for automated data analysis and insights generation. Built for company use with advanced analytics and customizable reporting workflows.",
    icon: Bot,
    technologies: ["Python", "AI/ML Libraries", "Data Analytics", "Automation", "Enterprise APIs"],
    features: [
      "AI-powered automated report generation",
      "Custom analytics and insights engine",
      "Enterprise-grade data processing",
      "Configurable reporting workflows",
      "Advanced data visualization and exports"
    ],
    github: null,
    demo: null,
    status: "Private/Enterprise",
    stars: null,
    forks: null,
    language: "Python",
    lastUpdated: "2025"
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full glow-border group hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {project.language}
                  </Badge>
                  <Badge 
                    variant={project.status === 'Active' ? 'default' : project.status === 'Private/Enterprise' ? 'outline' : 'secondary'} 
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              {project.stars !== null && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
              )}
              {project.forks !== null && (
                <div className="flex items-center space-x-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 pt-4">
            {project.github ? (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group/btn hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                View Code
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                disabled
              >
                <Terminal className="w-4 h-4 mr-2" />
                Private Repo
              </Button>
            )}
            
            {project.demo && (
              <Button
                variant="secondary"
                size="sm"
                className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => project.demo && window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Live Demo
              </Button>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
            <span>Last updated: {project.lastUpdated}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real-world solutions built with AI assistance and creative problem-solving. 
            Each project addresses specific challenges with practical, user-focused implementations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              These projects represent my approach to building practical solutions. 
              Let&apos;s discuss how similar thinking can solve your challenges.
            </p>
            <Button
              size="lg"
              className="group hover:glow-border transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}