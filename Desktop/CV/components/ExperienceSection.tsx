'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Film, Cog, Building } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: "Operations Coordinator | Process Optimization Specialist",
    company: "BG Meios de Pagamento (BPO)",
    period: "June 2024 - Present",
    location: "Remote",
    type: "Full-time",
    icon: Cog,
    description: "Managing billing, financial reporting, and process optimization for a growing BPO company. Focus on streamlining workflows and improving operational efficiency.",
    responsibilities: [
      "Manage billing, financial reporting, and proof of payment documentation for multiple clients",
      "Maintain and organize payment records, ensuring accuracy and compliance",
      "Optimize workflow processes to improve efficiency and reduce manual tasks"
    ]
  },
  {
    title: "2nd Assistant Director / Production Assistant",
    company: "Freelance Film Production",
    period: "February 2018 - June 2024",
    location: "United States",
    type: "Freelance",
    icon: Film,
    description: "Six years coordinating complex film productions under high-pressure environments. Managed logistics, scheduling, and cross-team communication.",
    responsibilities: [
      "Coordinated scheduling, logistics, and documentation, ensuring smooth production workflows",
      "Managed budget tracking, vendor coordination, and invoice processing",
      "Worked under high-pressure environments, solving problems efficiently"
    ]
  },
  {
    title: "Administrative Assistant",
    company: "Maerkli Hotel",
    period: "December 2013 - March 2016",
    location: "Brazil",
    type: "Full-time",
    icon: Building,
    description: "Developed foundational skills in billing, scheduling, and document management systems using spreadsheets and process design.",
    responsibilities: [
      "Managed billing and scheduling tasks efficiently",
      "Developed systems for document management using spreadsheets"
    ]
  },
  {
    title: "Administrative and Marketing Assistant",
    company: "Mirá Consultoria Imobiliária",
    period: "December 2013 - March 2016",
    location: "Brazil",
    type: "Part-time",
    icon: Building,
    description: "Early experience in digital content creation and website management, developing skills in creative problem-solving.",
    responsibilities: [
      "Managed social media accounts and content creation",
      "Assisted in website setup and content management"
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
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <experience.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {experience.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
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
                </div>
              </div>
              <Badge variant="outline" className="mb-3">
                {experience.type}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed">
            {experience.description}
          </CardDescription>

          {/* Key Responsibilities */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Key Responsibilities</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
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
            From film sets to operations to AI-powered building. A journey of continuous learning, 
            problem-solving, and adapting skills across industries.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}