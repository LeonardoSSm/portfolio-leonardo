import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function WorkSection() {
  const { t } = useI18n()
  const splitIndex = Math.ceil(t.work.items.length / 2)
  const firstColumn = t.work.items.slice(0, splitIndex)
  const secondColumn = t.work.items.slice(splitIndex)

  return (
    <Section id={t.work.id} title={t.work.title} lead={t.work.lead}>
      <div className="work-layout">
        <p className="work-text">{t.work.text}</p>
        <ol className="work-list">
          {firstColumn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <ol className="work-list" start={splitIndex + 1}>
          {secondColumn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
