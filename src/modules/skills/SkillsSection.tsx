import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { useI18n } from '../../core/i18n'

export function SkillsSection() {
  const { t } = useI18n()

  return (
    <Section id={t.skills.id} title={t.skills.title} lead={t.skills.lead} className="technical-section">
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

      <div id={t.resources.id} className="technical-resources">
        <div className="section-subhead">
          <h3>{t.resources.title}</h3>
          <p className="p">{t.resources.lead}</p>
        </div>

        <div className="grid grid-3 resources-grid">
          {t.resources.groups.map((group) => (
            <Card key={group.title} className="resource-card compact-card">
              <h4 className="card-title">{group.title}</h4>
              <ul className="resource-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
