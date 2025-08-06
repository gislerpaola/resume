import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import { ManifestoSection } from '@/components/sections/manifesto-section'
import ContactSection from '@/components/ContactSection'
import { Navigation } from '@/components/Navigation'
import StaticContactDots from '@/components/StaticContactDots'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ManifestoSection />
      <ContactSection />
      <StaticContactDots />
    </main>
  )
}