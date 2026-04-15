import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { useI18n } from '../../core/i18n'

export function BlogSection() {
  const { t } = useI18n()

  return (
    <Section id={t.resources.id} title={t.resources.title} lead={t.resources.lead}>
      <div className="grid grid-3 resources-grid">
        {t.resources.groups.map((group) => (
          <Card key={group.title} className="resource-card">
            <h3 className="card-title">{group.title}</h3>
            <ul className="resource-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
