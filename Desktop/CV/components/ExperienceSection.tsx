'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const experiences = [
  {
    title: "Self-Employed Developer & Automation Specialist",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    description: "Developing automation tools, Web3 applications, and data analysis solutions. Focus on creating practical tools that solve real-world problems through code.",
    achievements: [
      "Built comprehensive crypto portfolio tracking system with 90%+ accuracy",
      "Developed DeFi dashboard handling $50K+ in tracked assets",
      "Created automation scripts reducing manual work by 80%",
      "Contributed to open-source projects with 40+ GitHub stars"
    ],
    technologies: ["Python", "JavaScript", "Web3", "Pandas", "APIs", "Automation"],
    highlights: [
      "Self-directed learning and project execution",
      "Full-stack development from concept to deployment",
      "Integration with blockchain protocols and financial APIs",
      "Process optimization and workflow automation"
    ]
  },
  {
    title: "Operations Specialist → Technical Implementation",
    company: "Transition Period",
    period: "2022 - 2023",
    location: "Kuala Lumpur, Malaysia",
    type: "Career Transition",
    description: "Intensive self-study period focused on transitioning from operations to technical development. Completed comprehensive programming education while maintaining operational excellence.",
    achievements: [
      "Completed 300+ hours of Codecademy Python and data science courses",
      "Built first automation tools reducing report generation time by 60%",
      "Developed SQL skills managing databases with 10,000+ records",
      "Created data visualization dashboards for operational metrics"
    ],
    technologies: ["Python", "SQL", "Excel VBA", "Process Design", "Data Analysis"],
    highlights: [
      "Successful career pivot from operations to development",
      "Applied programming skills to improve existing processes",
      "Built foundation in data analysis and visualization",
      "Demonstrated ability to learn and implement quickly"
    ]
  },
  {
    title: "Operations & Process Design Specialist",
    company: "Various Industries",
    period: "2019 - 2022",
    location: "Malaysia & International",
    type: "Full-time",
    description: "Led operational efficiency initiatives, process optimization, and workflow design across multiple sectors. Identified automation opportunities that later influenced transition to development.",
    achievements: [
      "Improved operational efficiency by 45% through process redesign",
      "Managed cross-functional teams of 15+ members",
      "Designed workflows handling 1000+ daily transactions",
      "Reduced processing errors by 70% through systematic improvements"
    ],
    technologies: ["Process Mapping", "Data Analysis", "Excel", "Documentation", "Team Leadership"],
    highlights: [
      "Strong foundation in analytical problem-solving",
      "Experience with large-scale process optimization",
      "Understanding of business operations and pain points",
      "Leadership and project management skills"
    ]
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="glow-border group hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                {experience.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium text-foreground">{experience.company}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
              <Badge 
                variant="outline" 
                className={`
                  w-fit
                  ${experience.type === 'Full-time' ? 'border-green-500 text-green-500' : ''}
                  ${experience.type === 'Career Transition' ? 'border-blue-500 text-blue-500' : ''}
                `}
              >
                {experience.type}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <CardDescription className="text-base leading-relaxed">
            {experience.description}
          </CardDescription>
          
          {/* Key Achievements */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Highlights */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Professional Highlights
            </h4>
            <ul className="space-y-2">
              {experience.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm">
                  <span className="text-yellow-500 mt-1">★</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const developmentStats = [
  {
    label: "Lines of Code Written",
    value: "50,000+",
    description: "Across Python, JavaScript, and Solidity projects"
  },
  {
    label: "Projects Completed",
    value: "25+",
    description: "Personal, freelance, and open-source projects"
  },
  {
    label: "GitHub Contributions",
    value: "500+",
    description: "Commits across repositories in the past year"
  },
  {
    label: "Process Improvements",
    value: "15+",
    description: "Automation solutions deployed in production"
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ./career-history
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Professional journey from operations specialist to developer, demonstrating 
            adaptability, continuous learning, and practical problem-solving through technology.
          </p>
        </motion.div>

        {/* Development Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {developmentStats.map((stat, index) => (
            <Card key={index} className="text-center glow-border group hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:animate-pulse">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 bg-border z-10" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary rounded-full border-4 border-background z-20" />
              
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>

        {/* Career Progression Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto glow-border">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text text-center">
                Career Evolution: Operations → Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Foundation</h4>
                  <p className="text-muted-foreground text-sm">
                    Built analytical skills and process optimization expertise in operations roles, 
                    identifying automation opportunities and efficiency improvements.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Transition</h4>
                  <p className="text-muted-foreground text-sm">
                    Self-taught programming through intensive study and practical application, 
                    bridging operational knowledge with technical implementation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Specialization</h4>
                  <p className="text-muted-foreground text-sm">
                    Focused on automation, Web3 development, and data analysis, 
                    creating tools that solve real problems with measurable impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}