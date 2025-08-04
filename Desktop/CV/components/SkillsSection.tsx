'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Server, Cpu, GitBranch, Terminal } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-400",
    skills: [
      { name: "Python", level: 90, experience: "3+ years", description: "Primary language for automation and data analysis" },
      { name: "JavaScript", level: 75, experience: "2+ years", description: "Frontend and Node.js development" },
      { name: "SQL", level: 85, experience: "4+ years", description: "Database design and complex queries" },
      { name: "Solidity", level: 60, experience: "1+ year", description: "Smart contract development" },
    ]
  },
  {
    title: "Web3 & Blockchain",
    icon: GitBranch,
    color: "text-purple-400",
    skills: [
      { name: "Ethereum", level: 80, experience: "2+ years", description: "DApp development and protocol integration" },
      { name: "DeFi Protocols", level: 85, experience: "2+ years", description: "Aave, Compound, Uniswap integration" },
      { name: "Web3.js/Ethers.js", level: 75, experience: "1+ year", description: "Blockchain interaction libraries" },
      { name: "Smart Contracts", level: 65, experience: "1+ year", description: "Development and testing" },
    ]
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "text-green-400",
    skills: [
      { name: "Pandas", level: 90, experience: "3+ years", description: "Data manipulation and analysis" },
      { name: "Data Visualization", level: 80, experience: "2+ years", description: "Matplotlib, Plotly, Seaborn" },
      { name: "Statistical Analysis", level: 75, experience: "3+ years", description: "Business intelligence and reporting" },
      { name: "API Integration", level: 85, experience: "3+ years", description: "RESTful APIs and data pipelines" },
    ]
  },
  {
    title: "Automation & DevOps",
    icon: Cpu,
    color: "text-orange-400",
    skills: [
      { name: "Process Automation", level: 95, experience: "4+ years", description: "Workflow optimization and scripting" },
      { name: "File Management", level: 90, experience: "3+ years", description: "Batch processing and organization" },
      { name: "Task Scheduling", level: 85, experience: "2+ years", description: "Cron jobs and automated workflows" },
      { name: "System Integration", level: 80, experience: "2+ years", description: "API connections and data flow" },
    ]
  },
  {
    title: "Development Tools",
    icon: Terminal,
    color: "text-yellow-400",
    skills: [
      { name: "Git/GitHub", level: 85, experience: "3+ years", description: "Version control and collaboration" },
      { name: "Command Line", level: 90, experience: "4+ years", description: "Linux/Unix shell scripting" },
      { name: "VS Code", level: 85, experience: "3+ years", description: "Development environment setup" },
      { name: "Docker", level: 60, experience: "1+ year", description: "Containerization basics" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      { name: "React", level: 70, experience: "1+ year", description: "Frontend component development" },
      { name: "Next.js", level: 65, experience: "6 months", description: "Full-stack React applications" },
      { name: "FastAPI", level: 75, experience: "1+ year", description: "Python API development" },
      { name: "Flask", level: 70, experience: "1+ year", description: "Web application development" },
    ]
  }
]

const SkillBar = ({ skill, index }: { skill: typeof skillCategories[0]['skills'][0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-foreground">{skill.name}</h4>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
        <div className="text-right">
          <Badge variant="outline" className="font-mono text-xs">
            {skill.experience}
          </Badge>
          <div className="text-sm font-mono text-primary mt-1">
            {skill.level}%
          </div>
        </div>
      </div>
      <div className="relative">
        <Progress 
          value={skill.level} 
          className="h-2 bg-muted"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full glow-border group hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <category.icon className={`w-6 h-6 ${category.color}`} />
            </div>
            <div>
              <CardTitle className="text-xl">{category.title}</CardTitle>
              <CardDescription>
                {category.skills.length} skills
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

const learningPath = [
  {
    phase: "Foundation",
    period: "2021-2022",
    focus: "Operations & Process Design",
    description: "Built analytical skills through operational challenges and process optimization",
    status: "completed"
  },
  {
    phase: "Transition",
    period: "2022-2023",
    focus: "Python & Data Analysis",
    description: "Self-taught programming through Codecademy and practical projects",
    status: "completed"
  },
  {
    phase: "Specialization",
    period: "2023-2024",
    focus: "Web3 & Automation",
    description: "Focused on blockchain development and advanced automation tools",
    status: "completed"
  },
  {
    phase: "Advancement",
    period: "2024-2025",
    focus: "Full-Stack & Architecture",
    description: "Expanding into full-stack development and system architecture",
    status: "current"
  },
  {
    phase: "Future",
    period: "2025+",
    focus: "AI/ML & Blockchain Scale",
    description: "Integrating AI/ML with blockchain for next-generation applications",
    status: "planned"
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./skills --verbose
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Technical competencies built through hands-on experience and continuous learning. 
            Each skill has been battle-tested in real projects and production environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Learning Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">git log --oneline</span> Learning Journey
          </h3>
          
          <Card className="max-w-5xl mx-auto glow-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                {learningPath.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className={`
                        w-4 h-4 rounded-full border-2 transition-all duration-300
                        ${phase.status === 'completed' ? 'bg-green-500 border-green-500' : ''}
                        ${phase.status === 'current' ? 'bg-primary border-primary animate-pulse' : ''}
                        ${phase.status === 'planned' ? 'border-muted-foreground' : ''}
                      `} />
                      {index < learningPath.length - 1 && (
                        <div className="w-0.5 h-12 bg-border mx-auto mt-2" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-lg">{phase.phase}</h4>
                        <Badge 
                          variant="outline" 
                          className={`
                            font-mono text-xs
                            ${phase.status === 'completed' ? 'border-green-500 text-green-500' : ''}
                            ${phase.status === 'current' ? 'border-primary text-primary' : ''}
                            ${phase.status === 'planned' ? 'border-muted-foreground text-muted-foreground' : ''}
                          `}
                        >
                          {phase.period}
                        </Badge>
                      </div>
                      <div className="text-primary font-medium mb-1">{phase.focus}</div>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}