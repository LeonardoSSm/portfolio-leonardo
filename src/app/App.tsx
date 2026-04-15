import React from 'react'
import { HomeSection } from '../modules/home/HomeSection'
import { AboutSection } from '../modules/about/AboutSection'
import { SolutionsSection } from '../modules/solutions/SolutionsSection'
import { ProjectsSection } from '../modules/projects/ProjectsSection'
import { WorkSection } from '../modules/work/WorkSection'
import { SkillsSection } from '../modules/skills/SkillsSection'
import { BlogSection } from '../modules/blog/BlogSection'
import { ContactSection } from '../modules/contact/ContactSection'
import { Container } from '../shared/ui/Container'

export default function App() {
  return (
    <main id="main-content" className="main-content">
      <Container>
        <div className="content-stack">
          <HomeSection />
          <AboutSection />
          <SolutionsSection />
          <ProjectsSection />
          <WorkSection />
          <SkillsSection />
          <BlogSection />
          <ContactSection />
        </div>
      </Container>
    </main>
  )
}
