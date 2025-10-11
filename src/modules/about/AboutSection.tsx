import React from 'react'
import { Section } from '../../shared/ui/Section'

export function AboutSection() {
  return (
    <Section id="sobre" title="Sobre">
      <p className="p" style={{ marginTop: 12, maxWidth: 720 }}>
        Dev backend focado em Java e boas práticas (SOLID, TDD, DDD). Curto montar sistemas modulares,
        observar métricas e automatizar com CI/CD. Estudo constantemente e documento tudo no GitHub e LinkedIn.
      </p>
    </Section>
  )
}
