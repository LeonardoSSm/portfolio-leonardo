import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { useI18n } from '../../core/i18n'

export function SolutionsSection() {
  const { t } = useI18n()

  return (
    <Section id={t.solutions.id} title={t.solutions.title} lead={t.solutions.lead}>
      <div className="grid grid-4 solutions-grid">
        {t.solutions.items.map((item, index) => (
          <Card key={item.title} className="solution-card">
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="card-title">{item.title}</h3>
            <p className="p">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
