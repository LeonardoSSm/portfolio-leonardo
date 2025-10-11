import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'

export function HomeSection() {
  const buildLog = [
    '// Último build',
    '$ docker compose up -d',
    '$ mvn -q test',
    '> 142 testes OK'
  ].join('\n')

  return (
    <Section id="inicio">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: 24 }}>
        <div>
          <h1 className="h1">Backend Java, arquitetura limpa e projetos que resolvem problemas de verdade.</h1>
          <p className="p" style={{ marginTop: 12 }}>Spring Boot · Java 21 · Docker · PostgreSQL · AWS (iniciante)</p>
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <a className="cta cta-primary" href="#projetos" onClick={(e) => { e.preventDefault(); import('../../shared/lib/scroll').then(m => { m.smoothScrollTo('#projetos'); m.highlightById('#projetos') }) }}>
                Ver projetos
            </a>
            <a className="cta cta-secondary" href="#contato" onClick={(e) => { e.preventDefault(); import('../../shared/lib/scroll').then(m => { m.smoothScrollTo('#contato'); m.highlightById('#contato') }) }}>
                Contato
            </a>
          </div>
        </div>
        <Card>
          <pre style={{ fontSize: 12, margin: 0, whiteSpace: 'pre-wrap' }}>{buildLog}</pre>
        </Card>
      </div>
    </Section>
  )
}
