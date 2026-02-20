import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function SkillsSection() {
  const { t } = useI18n()

  return (
    <Section id={t.skills.id} title={t.skills.title}>
      <ul className="list-grid skills-grid">
        {t.skills.items.map((skill) => (
          <li key={skill} className="card skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
