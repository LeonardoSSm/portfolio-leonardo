import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

function isExternalLink(href: string) {
  return href.startsWith('http')
}

export function ProjectsSection() {
  const { t, locale } = useI18n()
  const projects = [...t.projects.items, ...t.projects.secondaryItems]

  return (
    <section id={t.projects.id} className="canvas-section projects-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{locale === 'en' ? '// 02 — PROJECTS' : '// 02 — PROJETOS'}</span>
        </div>

        <div className="section-heading-row">
          <div>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-support">{t.projects.lead}</p>
          </div>
          <a className="section-inline-link" href={site.github} target="_blank" rel="noopener noreferrer">
            {t.projects.githubLabel}
          </a>
        </div>

        <p className="projects-confidentiality-note">{t.projects.confidentialityNote}</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.name} className="project-card">
              <div className="project-preview">
                <div className="project-preview-grid" aria-hidden />
                <span className="project-preview-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-preview-tag">// PROJECT_{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="project-body">
                <div className="project-head">
                  {project.confidentialityLabel ? <span className="project-badge">{project.confidentialityLabel}</span> : null}
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>

                <p className="project-description">{project.problem}</p>

                <div className="project-highlights">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.href}
                    className="project-link project-link-primary"
                    target={isExternalLink(project.href) ? '_blank' : undefined}
                    rel={isExternalLink(project.href) ? 'noopener noreferrer' : undefined}
                  >
                    {project.ctaLabel}
                  </a>
                  {isExternalLink(project.href) ? (
                    <a href={site.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      {t.contact.githubLabel}
                    </a>
                  ) : (
                    <span className="project-link project-link-muted">{t.projects.confidentialityLabel}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
