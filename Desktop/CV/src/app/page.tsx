import { Hero } from '@/components/Hero'
import { Journey } from '@/components/Journey'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Manifesto } from '@/components/Manifesto'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Manifesto />
      <Contact />
    </main>
  )
}