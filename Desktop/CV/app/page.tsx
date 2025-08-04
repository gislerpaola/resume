import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero-section'
import ExperienceSection from '@/components/sections/experience-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import ManifestoSection from '@/components/sections/manifesto-section'
import FooterSection from '@/components/sections/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ManifestoSection />
      <FooterSection />
    </main>
  )
}