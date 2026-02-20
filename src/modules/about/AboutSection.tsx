import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function AboutSection() {
  const { t } = useI18n()

  return (
    <Section id={t.about.id} title={t.about.title}>
      <p className="p section-intro narrow">{t.about.body}</p>
    </Section>
  )
}
