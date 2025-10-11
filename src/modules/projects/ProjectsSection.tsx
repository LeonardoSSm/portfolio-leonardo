import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { Chip } from '../../shared/ui/Chip'
import { projects } from './data'
import { site } from '../../core/config/site'

export function ProjectsSection() {
  return (
    <Section id="projetos" title="Projetos">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href={site.github} target="_blank" rel="noreferrer" className="p">Ver GitHub →</a>
      </div>
      <div className="grid grid-2" style={{ marginTop: 24 }}>
        {projects.map((p) => (
          <Card key={p.name}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>{p.name}</h3>
            <p className="p" style={{ marginTop: 6 }}>{p.desc}</p>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.tags.map(t => <Chip key={t}>{t}</Chip>)}
            </div>
            <button>Preview</button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// OBS: O botão preview vai servir para apresentar uma parte do projeto, ao menos o frontend