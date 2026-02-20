import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function CertificatesSection() {
  const { t } = useI18n()

  return (
    <Section id={t.certificates.id} title={t.certificates.title}>
      <ul className="list-grid">
        {t.certificates.items.map((certificate) => (
          <li key={certificate.title} className="card cert-item">
            <strong>{certificate.title}</strong>
            <span className="p cert-issuer">{certificate.issuer}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
