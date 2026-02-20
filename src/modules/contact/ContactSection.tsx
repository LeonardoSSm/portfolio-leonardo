import React from 'react'
import { Section } from '../../shared/ui/Section'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function ContactSection() {
  const { t } = useI18n()

  return (
    <Section id={t.contact.id} title={t.contact.title}>
      <p className="p section-intro">{t.contact.lead}</p>
      <div className="contact-actions">
        <a className="cta cta-secondary" href={`mailto:${site.email}`}>
          {t.contact.emailLabel}
        </a>
        <a className="cta cta-secondary" href={site.linkedin} target="_blank" rel="noreferrer">
          {t.contact.linkedinLabel}
        </a>
        <a className="cta cta-secondary" href={site.github} target="_blank" rel="noreferrer">
          {t.contact.githubLabel}
        </a>
      </div>
    </Section>
  )
}
