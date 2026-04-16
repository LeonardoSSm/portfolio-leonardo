import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { useI18n } from '../../core/i18n'

export function AboutSection() {
  const { t } = useI18n()

  return (
    <Section id={t.about.id} title={t.about.title} lead={t.about.lead} className="profile-section">
      <div className="about-layout">
        <div className="about-copy">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="p">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="proof-list">
          {t.about.proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div id={t.solutions.id} className="solutions-panel">
        <div className="section-subhead">
          <h3>{t.solutions.title}</h3>
          <p className="p">{t.solutions.lead}</p>
        </div>

        <div className="grid grid-4 solutions-grid">
          {t.solutions.items.map((item, index) => (
            <Card key={item.title} className="solution-card compact-card">
              <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
              <h4 className="card-title">{item.title}</h4>
              <p className="p">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
