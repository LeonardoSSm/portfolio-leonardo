import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { Chip } from '../../shared/ui/Chip'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function ProjectsSection() {
  const { t } = useI18n()

  return (
    <Section id={t.projects.id} title={t.projects.title}>
      <div className="section-toolbar">
        <a href={site.github} target="_blank" rel="noreferrer" className="toolbar-link">
          {t.projects.githubLabel} →
        </a>
      </div>

      <div className="grid grid-2">
        {t.projects.items.map((project) => (
          <Card key={project.name}>
            <h3 className="card-title">{project.name}</h3>
            <p className="p">{project.desc}</p>

            <div className="chip-row">
              {project.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>

            <a className="cta cta-secondary card-cta" href={project.href} target="_blank" rel="noreferrer">
              {t.projects.codeLabel}
            </a>
          </Card>
        ))}
      </div>
    </Section>
  )
}
