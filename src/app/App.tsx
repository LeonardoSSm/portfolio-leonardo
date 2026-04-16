import React from 'react'
import { HomeSection } from '../modules/home/HomeSection'
import { AboutSection } from '../modules/about/AboutSection'
import { ProjectsSection } from '../modules/projects/ProjectsSection'
import { WorkSection } from '../modules/work/WorkSection'
import { SkillsSection } from '../modules/skills/SkillsSection'
import { ContactSection } from '../modules/contact/ContactSection'
import { Container } from '../shared/ui/Container'

export default function App() {
  return (
    <main id="main-content" className="main-content">
      <Container>
        <div className="content-stack">
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <WorkSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </Container>
    </main>
  )
}
