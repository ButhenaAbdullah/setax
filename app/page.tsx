"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProjectModalProvider } from "@/components/project-modal-context"
import { ProjectModal } from "@/components/project-modal"

export default function Page() {
  return (
    <ProjectModalProvider>
      <main>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
      <ProjectModal />
    </ProjectModalProvider>
  )
}
