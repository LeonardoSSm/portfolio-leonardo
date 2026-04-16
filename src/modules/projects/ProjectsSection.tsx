import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { Chip } from '../../shared/ui/Chip'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

function CaseDetails({
  context,
  problem,
  role,
  impact,
  labels,
}: {
  context: string
  problem: string
  role: string
  impact: string
  labels: { context: string; problem: string; role: string; impact: string }
}) {
  return (
    <dl className="case-details">
      <div>
        <dt>{labels.context}</dt>
        <dd>{context}</dd>
      </div>
      <div>
        <dt>{labels.problem}</dt>
        <dd>{problem}</dd>
      </div>
      <div>
        <dt>{labels.role}</dt>
        <dd>{role}</dd>
      </div>
      <div>
        <dt>{labels.impact}</dt>
        <dd>{impact}</dd>
      </div>
    </dl>
  )
}

function CaseConfidentialityNote({ title, note }: { title: string; note?: string }) {
  if (!note) return null

  return (
    <p className="case-confidentiality-note">
      <strong>{title}</strong>
      <span>{note}</span>
    </p>
  )
}

function CaseHighlights({ label, highlights, compact = false }: { label: string; highlights: readonly string[]; compact?: boolean }) {
  return (
    <div className={`case-highlight-block ${compact ? 'compact' : ''}`}>
      <strong>{label}</strong>
      <ul className={`case-list ${compact ? 'compact' : ''}`}>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectsSection() {
  const { t } = useI18n()
  const [featured, ...projects] = t.projects.items
  const labels = {
    context: t.projects.contextLabel,
    problem: t.projects.problemLabel,
    role: t.projects.roleLabel,
    impact: t.projects.impactLabel,
  }

  return (
    <Section id={t.projects.id} title={t.projects.title} lead={t.projects.lead}>
      <div className="section-toolbar">
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="toolbar-link">
          {t.projects.githubLabel}
        </a>
      </div>

      <p className="confidentiality-note">{t.projects.confidentialityNote}</p>

      {featured ? (
        <Card className="project-featured">
          <div className="case-heading">
            <div>
              <span className="featured-tag">{t.projects.featuredLabel}</span>
              {featured.confidentialityLabel ? <span className="confidentiality-badge">{featured.confidentialityLabel}</span> : null}
            </div>
            <p className="case-type">{featured.type}</p>
            <h3 className="card-title">{featured.name}</h3>
          </div>

          <CaseDetails
            context={featured.context}
            problem={featured.problem}
            role={featured.role}
            impact={featured.impact}
            labels={labels}
          />

          <CaseHighlights label={t.projects.highlightsLabel} highlights={featured.highlights} />

          <CaseConfidentialityNote title={t.projects.confidentialityLabel} note={featured.confidentialityNote} />

          <div className="chip-row">
            {featured.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>

          <a className="cta cta-primary card-cta" href={featured.href}>
            {featured.ctaLabel}
          </a>
        </Card>
      ) : null}

      <div className="grid grid-2 projects-grid">
        {projects.map((project) => (
          <Card key={project.name} className="project-card compact-case-card">
            <div className="case-heading">
              {project.confidentialityLabel ? <span className="confidentiality-badge">{project.confidentialityLabel}</span> : null}
              <p className="case-type">{project.type}</p>
              <h3 className="card-title">{project.name}</h3>
            </div>

            <CaseHighlights label={t.projects.highlightsLabel} highlights={project.highlights.slice(0, 3)} compact />

            <CaseConfidentialityNote title={t.projects.confidentialityLabel} note={project.confidentialityNote} />

            <div className="chip-row">
              {project.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>

            <a className="cta cta-secondary card-cta" href={project.href}>
              {project.ctaLabel}
            </a>

            <details className="case-details-toggle">
              <summary>{t.projects.detailsLabel}</summary>
              <CaseDetails
                context={project.context}
                problem={project.problem}
                role={project.role}
                impact={project.impact}
                labels={labels}
              />
            </details>
          </Card>
        ))}
      </div>

      <details className="more-cases">
        <summary>
          <span>{t.projects.secondaryTitle}</span>
          <small>{t.projects.secondaryLead}</small>
        </summary>
        <div className="grid grid-2 more-cases-grid">
          {t.projects.secondaryItems.map((project) => (
            <Card key={project.name} className="project-card public-project-card">
              <p className="case-type">{project.type}</p>
              <h3 className="card-title">{project.name}</h3>
              <CaseHighlights label={t.projects.highlightsLabel} highlights={project.highlights.slice(0, 3)} compact />
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <a className="cta cta-secondary card-cta" href={project.href} target="_blank" rel="noopener noreferrer">
                {project.ctaLabel}
              </a>
            </Card>
          ))}
        </div>
      </details>
    </Section>
  )
}
