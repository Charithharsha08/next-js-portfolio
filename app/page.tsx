import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
