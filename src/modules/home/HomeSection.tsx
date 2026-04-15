import React from 'react'
import { Section } from '../../shared/ui/Section'
import { smoothScrollTo, highlightById } from '../../shared/lib/scroll'
import { useI18n } from '../../core/i18n'
import { site } from '../../core/config/site'

export function HomeSection() {
  const { t } = useI18n()

  function onActionClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    smoothScrollTo(href)
    highlightById(href)
  }

  return (
    <Section id={t.home.id} className="section-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">{t.home.badge}</span>
          <h1 className="h1">{t.home.title}</h1>
          <p className="hero-subtitle">{t.home.subtitle}</p>
          <p className="p hero-support">{t.home.support}</p>

          <div className="hero-actions">
            <a className="cta cta-primary" href="#projects" onClick={(e) => onActionClick(e, '#projects')}>
              {t.home.primaryCta}
            </a>
            <a className="cta cta-secondary" href={site.github} target="_blank" rel="noopener noreferrer">
              {t.home.githubCta}
            </a>
            <a className="cta cta-secondary" href="#contact" onClick={(e) => onActionClick(e, '#contact')}>
              {t.home.contactCta}
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-label={t.home.profileAlt}>
          <img src={site.photo} alt={t.home.profileAlt} loading="eager" referrerPolicy="no-referrer" />
          <div className="hero-metrics">
            {t.home.metrics.map((metric) => (
              <div key={metric.value} className="hero-metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
