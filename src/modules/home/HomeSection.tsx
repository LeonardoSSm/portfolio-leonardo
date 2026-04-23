import React from 'react'
import { smoothScrollTo, highlightById } from '../../shared/lib/scroll'
import { useI18n } from '../../core/i18n'
import { site } from '../../core/config/site'

const heroTitles = {
  'pt-BR': ['Construindo', 'sistemas reais.'],
  en: ['Building', 'real systems.'],
} as const

export function HomeSection() {
  const { t, locale } = useI18n()
  const [titleLead, titleAccent] = heroTitles[locale]

  function onActionClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    smoothScrollTo(href)
    highlightById(href)
  }

  return (
    <section id={t.home.id} className="hero-section">
      <div className="hero-grid-overlay" aria-hidden />
      <div className="hero-rail hero-rail-left" aria-hidden />
      <div className="hero-rail hero-rail-right" aria-hidden />

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-tag-row">
            <span className="hero-tag-line" />
            <span className="hero-tag">// FULL STACK DEVELOPER · 2026</span>
          </div>

          <h1 className="hero-title">
            <span>{titleLead}</span>
            <span className="is-accent">{titleAccent}</span>
          </h1>

          <p className="hero-subtitle">{t.home.subtitle}</p>
          <p className="hero-support">{t.home.support}</p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects" onClick={(e) => onActionClick(e, '#projects')}>
              {t.home.primaryCta}
            </a>
            <a className="hero-button hero-button-secondary" href={site.github} target="_blank" rel="noopener noreferrer">
              {t.home.githubCta}
            </a>
          </div>

          <div className="hero-stack-panel">
            <span className="hero-stack-label">// {locale === 'en' ? 'CORE STACK' : 'STACK PRINCIPAL'}</span>
            <p className="hero-stack-line">{t.home.stackLine}</p>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-photo-frame">
            <img src={site.photo} alt={t.home.profileAlt} loading="eager" referrerPolicy="no-referrer" />
          </div>

          <div className="hero-metrics-grid">
            {t.home.metrics.map((metric) => (
              <article key={metric.value} className="hero-metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <a className="hero-scroll-link" href="#about" onClick={(e) => onActionClick(e, '#about')}>
          <span>{locale === 'en' ? 'SCROLL' : 'ROLAR'}</span>
          <span className="hero-scroll-indicator">
            <span />
          </span>
        </a>
      </div>
    </section>
  )
}
