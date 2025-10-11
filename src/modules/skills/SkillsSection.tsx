import React from 'react'
import { Section } from '../../shared/ui/Section'
import { skills } from './data'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16, listStyle: 'none', padding: 0 }}>
        {skills.map(s => (
          <li key={s} className="card">{s}</li>
        ))}
      </ul>
    </Section>
  )
}
