import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function SkillsSection() {
  const { t } = useI18n()

  return (
    <Section id={t.skills.id} title={t.skills.title} lead={t.skills.lead}>
      <div className="stack-grid">
        {t.skills.groups.map((group) => (
          <section key={group.title} className="stack-group" aria-labelledby={`stack-${group.title}`}>
            <h3 id={`stack-${group.title}`} className="stack-title">
              {group.title}
            </h3>
            <div className="chip-row stack-chips">
              {group.items.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  )
}
