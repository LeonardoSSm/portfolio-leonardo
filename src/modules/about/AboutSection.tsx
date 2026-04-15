import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function AboutSection() {
  const { t } = useI18n()

  return (
    <Section id={t.about.id} title={t.about.title} lead={t.about.lead}>
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
    </Section>
  )
}
