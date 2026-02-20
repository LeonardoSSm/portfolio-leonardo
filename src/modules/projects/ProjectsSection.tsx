import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { Chip } from '../../shared/ui/Chip'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function ProjectsSection() {
  const { t } = useI18n()
  const [featured, ...others] = t.projects.items

  return (
    <Section id={t.projects.id} title={t.projects.title} lead={t.projects.lead}>
      <div className="section-toolbar">
        <a href={site.github} target="_blank" rel="noreferrer" className="toolbar-link">
          {t.projects.githubLabel} →
        </a>
      </div>

      {featured ? (
        <Card className="project-featured">
          <span className="featured-tag">{t.projects.featuredLabel}</span>
          <h3 className="card-title">{featured.name}</h3>
          <p className="p">{featured.desc}</p>

          <div className="chip-row">
            {featured.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>

          <a className="cta cta-primary card-cta" href={featured.href} target="_blank" rel="noreferrer">
            {t.projects.codeLabel}
          </a>
        </Card>
      ) : null}

      <div className="grid grid-2 projects-grid">
        {others.map((project) => (
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
