import React from 'react'
import { HomeSection } from '../modules/home/HomeSection'
import { AboutSection } from '../modules/about/AboutSection'
import { SkillsSection } from '../modules/skills/SkillsSection'
import { ProjectsSection } from '../modules/projects/ProjectsSection'
import { CertificatesSection } from '../modules/certificates/CertificatesSection'
import { BlogSection } from '../modules/blog/BlogSection'
import { ContactSection } from '../modules/contact/ContactSection'
import { Container } from '../shared/ui/Container'

export default function App() {
  return (
    <main>
      <Container>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <BlogSection />
        <ContactSection />
      </Container>
    </main>
  )
}
