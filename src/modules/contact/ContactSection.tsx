import React from 'react'
import { Section } from '../../shared/ui/Section'
import { site } from '../../core/config/site'

export function ContactSection() {
  return (
    <Section id="contato" title="Contato">
      <p className="p" style={{ marginTop: 8 }}>Aberto para freelas, propostas e colabs.</p>
      <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a className="cta cta-secondary" href={`mailto:${site.email}`}>Email</a>
        <a className="cta cta-secondary" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="cta cta-secondary" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </Section>
  )
}
