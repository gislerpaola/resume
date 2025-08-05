'use client'

import { motion } from 'framer-motion'
import { Film, Sparkles, TrendingUp, Users, Target, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const storyPoints = [
  {
    icon: Film,
    title: "Film Sets to Operations",
    description: "Started in film production, learned to solve complex logistical challenges and coordinate moving pieces under pressure."
  },
  {
    icon: Target,
    title: "Process Optimization",
    description: "Transitioned to operations, identifying inefficiencies and designing systems that just work better."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Building",
    description: "Now leveraging AI tools to build solutions faster, turning ideas into reality with creative problem-solving."
  },
  {
    icon: TrendingUp,
    title: "Business Impact Focus",
    description: "Every solution I build aims to create measurable value - whether saving time, reducing costs, or enabling growth."
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            ./my-story
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
            From coordinating film sets to streamlining business operations to building with AI. 
            I solve problems by finding the human story behind every challenge.
          </p>
        </motion.div>

        {/* Story Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {storyPoints.map((point, index) => (
            <Card key={index} className="clean-card group hover:border-primary/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <point.icon className="w-10 h-10 text-primary mr-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
            What I Do
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="clean-card text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Understand the Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  I listen to understand the real challenge, not just the symptoms. Every solution starts with the human need.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="clean-card text-center">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Build with AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  I use AI as a creative partner to prototype, iterate, and build solutions faster than ever before.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="clean-card text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Deliver Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Every project aims to create measurable value - time saved, processes improved, problems solved.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </section>
  )
}