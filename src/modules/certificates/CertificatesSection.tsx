import React from 'react'
import { Section } from '../../shared/ui/Section'
import { certificates } from './data'

export function CertificatesSection() {
  return (
    <Section id="certificados" title="Certificados">
      <ul className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16, listStyle: 'none', padding: 0 }}>
        {certificates.map((c) => (
          <li key={c.title} className="card">
            <strong>{c.title}</strong>
            <div className="p" style={{ marginTop: 6 }}>{c.issuer}</div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
