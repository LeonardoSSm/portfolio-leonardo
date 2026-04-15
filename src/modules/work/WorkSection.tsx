import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function WorkSection() {
  const { t } = useI18n()

  return (
    <Section id={t.work.id} title={t.work.title} lead={t.work.lead}>
      <div className="work-layout">
        <p className="work-text">{t.work.text}</p>
        <ol className="work-list">
          {t.work.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
