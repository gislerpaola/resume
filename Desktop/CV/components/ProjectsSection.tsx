'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Code2, Database, Bot, Coins } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    name: "Crypto Portfolio Tracker",
    description: "Python-based cryptocurrency portfolio management system with real-time price tracking, P&L calculations, and automated reporting. Features integration with CoinGecko API and comprehensive data visualization.",
    icon: Coins,
    technologies: ["Python", "Pandas", "Requests", "CoinGecko API", "Data Visualization"],
    features: [
      "Real-time price tracking for multiple cryptocurrencies",
      "Portfolio performance analytics and P&L calculations",
      "Automated daily/weekly reporting via email",
      "Historical data analysis and trend visualization",
      "Risk assessment and diversification metrics"
    ],
    github: "https://github.com/gislerpaola/crypto-tracker",
    demo: null,
    status: "Active",
    stars: 15,
    forks: 3,
    language: "Python",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "Aave DeFi Dashboard",
    description: "Comprehensive DeFi dashboard for interacting with Aave protocol. Monitor lending positions, track yields, and execute transactions directly from a clean, professional interface.",
    icon: Database,
    technologies: ["JavaScript", "Ethers.js", "Web3", "React", "Aave Protocol"],
    features: [
      "Real-time lending and borrowing position tracking",
      "Health factor monitoring with alerts",
      "Direct protocol interaction for deposits/withdrawals",
      "Yield farming optimization suggestions",
      "Gas fee estimation and optimization"
    ],
    github: "https://github.com/gislerpaola/aave-dashboard",
    demo: "https://aave-dashboard-demo.vercel.app",
    status: "Development",
    stars: 8,
    forks: 2,
    language: "JavaScript",
    lastUpdated: "2024-01-20"
  },
  {
    id: 3,
    name: "Process Automation Suite",
    description: "Collection of Python automation tools designed to streamline operational workflows. Includes file processing, data validation, report generation, and notification systems.",
    icon: Bot,
    technologies: ["Python", "Pandas", "Schedule", "SMTP", "OS Operations"],
    features: [
      "Automated file processing and organization",
      "Data validation and cleaning pipelines",
      "Scheduled report generation and distribution",
      "Error handling and logging systems",
      "Email notifications for critical events"
    ],
    github: "https://github.com/gislerpaola/automation-tools",
    demo: null,
    status: "Active",
    stars: 12,
    forks: 5,
    language: "Python",
    lastUpdated: "2024-01-10"
  },
  {
    id: 4,
    name: "File Management Utilities",
    description: "Advanced file management system with intelligent organization, duplicate detection, and batch operations. Designed for handling large datasets and maintaining clean directory structures.",
    icon: Code2,
    technologies: ["Python", "OS", "Pathlib", "Hashlib", "Threading"],
    features: [
      "Intelligent file organization by type, date, and content",
      "Duplicate file detection and removal",
      "Bulk renaming and restructuring operations",
      "File integrity verification and backup systems",
      "Multi-threaded processing for large datasets"
    ],
    github: "https://github.com/gislerpaola/file-utilities",
    demo: null,
    status: "Maintained",
    stars: 7,
    forks: 1,
    language: "Python",
    lastUpdated: "2023-12-28"
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
                <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitFork className="w-3 h-3" />
                    <span>{project.forks}</span>
                  </span>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${project.status === 'Active' ? 'border-green-500 text-green-500' : ''}
                      ${project.status === 'Development' ? 'border-yellow-500 text-yellow-500' : ''}
                      ${project.status === 'Maintained' ? 'border-blue-500 text-blue-500' : ''}
                    `}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <CardDescription className="text-base leading-relaxed">
            {project.description}
          </CardDescription>
          
          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-2 text-primary">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Key Features */}
          <div>
            <h4 className="font-semibold mb-2 text-primary">Key Features</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Project Links */}
          <div className="flex space-x-3 pt-4 border-t border-border">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group/btn hover:border-primary hover:text-primary transition-all"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
              Code
            </Button>
            {project.demo && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 group/btn hover:border-primary hover:text-primary transition-all"
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Demo
              </Button>
            )}
          </div>
          
          {/* Project Metadata */}
          <div className="text-xs text-muted-foreground font-mono pt-2 border-t border-border">
            <div className="flex justify-between">
              <span>Language: {project.language}</span>
              <span>Updated: {project.lastUpdated}</span>
            </div>
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
            A collection of open-source projects demonstrating expertise in Python automation, 
            Web3 development, and process optimization. Each project solves real-world problems 
            with clean, maintainable code.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Featured Project</h3>
            <p className="text-muted-foreground">Highlighted work showcasing technical depth and practical application</p>
          </div>
          <ProjectCard project={projects[0]} index={0} />
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto glow-border">
            <CardContent className="p-8">
              <Github className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
              <p className="text-muted-foreground mb-6">
                Discover additional projects, contribute to open source, and follow my development journey. 
                All code is thoroughly documented and continuously maintained.
              </p>
              <Button 
                size="lg" 
                className="font-mono group hover:animate-glow"
                onClick={() => window.open('https://github.com/gislerpaola', '_blank')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Visit GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}