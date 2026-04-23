import React from 'react'
import { smoothScrollTo, highlightById } from '../../shared/lib/scroll'
import { useI18n } from '../../core/i18n'

const heroCopy = {
  'pt-BR': {
    tag: '// FULLSTACK DEVELOPER · 2026',
    titleLead: 'Construindo',
    titleAccent: 'produtos digitais.',
    tagline:
      'Desenvolvedor fullstack focado em interfaces precisas, APIs solidas e experiencias que escalam do primeiro pixel ao deploy em producao.',
    primaryCta: 'Ver projetos',
    secondaryCta: 'Falar comigo',
    stackLabel: 'STACK PRINCIPAL',
    stackLine: 'React · Node · TypeScript · Postgres · Docker',
    scroll: 'Rolar',
  },
  en: {
    tag: '// FULLSTACK DEVELOPER · 2026',
    titleLead: 'Building',
    titleAccent: 'digital products.',
    tagline:
      'Fullstack developer focused on precise interfaces, solid APIs and experiences that scale from the first pixel to production.',
    primaryCta: 'See projects',
    secondaryCta: 'Contact me',
    stackLabel: 'CORE STACK',
    stackLine: 'React · Node · TypeScript · Postgres · Docker',
    scroll: 'Scroll',
  },
} as const

export function HomeSection() {
  const { locale } = useI18n()
  const copy = heroCopy[locale]

  function onActionClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    smoothScrollTo(href)
    highlightById(href)
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-overlay" aria-hidden />

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-tag-row">
            <span className="hero-tag-line" />
            <span className="hero-tag">{copy.tag}</span>
          </div>

          <h1 className="hero-title">
            <span>{copy.titleLead}</span>
            <span className="is-accent">{copy.titleAccent}</span>
          </h1>

          <p className="hero-subtitle">{copy.tagline}</p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects" onClick={(e) => onActionClick(e, '#projects')}>
              {copy.primaryCta}
            </a>
            <a className="hero-button hero-button-secondary" href="#contact" onClick={(e) => onActionClick(e, '#contact')}>
              {copy.secondaryCta}
            </a>
          </div>

          <div className="hero-stack-panel">
            <span className="hero-stack-label">// {copy.stackLabel}</span>
            <p className="hero-stack-line">{copy.stackLine}</p>
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <a className="hero-scroll-link" href="#about" onClick={(e) => onActionClick(e, '#about')}>
          <span>{copy.scroll}</span>
          <span className="hero-scroll-indicator">
            <span />
          </span>
        </a>
      </div>
    </section>
  )
}
