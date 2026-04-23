import React from 'react'
import { HomeSection } from '../modules/home/HomeSection'
import { AboutSection } from '../modules/about/AboutSection'
import { ProjectsSection } from '../modules/projects/ProjectsSection'
import { WorkSection } from '../modules/work/WorkSection'
import { ContactSection } from '../modules/contact/ContactSection'

export default function App() {
  return (
    <main id="main-content" className="main-content">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}
