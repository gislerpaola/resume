'use client'

import { motion } from 'framer-motion'
import { Film, Cog, Code2, Users, Clock, Target, Database, TrendingUp, Cpu, Terminal, Sparkles, GitBranch, ArrowDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const journeyPhases = [
  {
    phase: "Film Sets",
    period: "2018-2024",
    icon: Film,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "",
    description: "Six years coordinating complex productions under pressure taught me the fundamentals of problem-solving and team coordination.",
    skills: [
      { name: "Project Coordination", icon: Users, description: "Managing complex moving parts simultaneously" },
      { name: "Cross-Team Communication", icon: Users, description: "Working with diverse teams and skill sets" },
      { name: "Deadline Management", icon: Clock, description: "Delivering results under tight timelines" },
      { name: "Problem-Solving Under Pressure", icon: Target, description: "Finding solutions when everything depends on it" }
    ],
    application: "These skills translate directly to managing any complex project or process optimization challenge."
  },
  {
    phase: "Operations",
    period: "2024-Present", 
    icon: Cog,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "",
    description: "Current role in BPO operations has sharpened my ability to design and optimize systems that actually work.",
    skills: [
      { name: "Process Optimization", icon: TrendingUp, description: "Identifying bottlenecks and streamlining workflows" },
      { name: "Workflow Design", icon: Cpu, description: "Creating systems that reduce manual work" },
      { name: "Data Organization", icon: Database, description: "Structuring information for maximum efficiency" },
      { name: "System Thinking", icon: Cog, description: "Understanding how different parts connect" }
    ],
    application: "Every automation script or solution I build starts with understanding the underlying process."
  },
  {
    phase: "AI-Powered Building",
    period: "Learning & Building",
    icon: Sparkles,
    color: "text-purple-400", 
    bgColor: "bg-purple-400/10",
    title: "",
    description: "Combining process knowledge with AI tools to build solutions faster than traditional development approaches.",
    skills: [
      { name: "AI Tool Integration", icon: Code2, description: "Cursor, Claude Code for rapid development" },
      { name: "Prompt Engineering", icon: Terminal, description: "Getting AI to build exactly what's needed" },
      { name: "Rapid Prototyping", icon: Sparkles, description: "Building functional solutions quickly" },
      { name: "Python Automation", icon: GitBranch, description: "PDF processing, file organization, task automation" }
    ],
    application: "I architect solutions and let AI handle the implementation, focusing on creative problem-solving."
  }
]

const JourneyPhase = ({ phase, index }: { phase: typeof journeyPhases[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < journeyPhases.length - 1 && (
        <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 z-10">
          <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      )}
      
      <Card className="glow-border group hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-lg ${phase.bgColor} group-hover:scale-110 transition-transform`}>
                <phase.icon className={`w-8 h-8 ${phase.color}`} />
              </div>
              <div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {phase.phase}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{phase.period}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              Phase {index + 1}
            </Badge>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {phase.description}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {phase.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <skill.icon className={`w-5 h-5 ${phase.color} mt-0.5 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Application */}
          <div className="pt-4 border-t border-border/50">
            <h4 className="text-sm font-semibold mb-2 text-primary">How This Applies Today</h4>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {phase.application}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My journey from film sets to AI-powered building. Each phase built on the last, 
            creating a unique blend of creative problem-solving and technical execution.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-16">
          {journeyPhases.map((phase, index) => (
            <JourneyPhase key={index} phase={phase} index={index} />
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto clean-card">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                The Result
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A unique combination of <span className="text-primary font-semibold">process thinking</span> from film and operations, 
                enhanced by <span className="text-primary font-semibold">AI-powered building</span> capabilities. 
                This approach lets me focus on understanding problems and creative solutions while AI handles the technical implementation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}