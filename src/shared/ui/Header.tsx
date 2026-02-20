import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'
import { smoothScrollTo, highlightById } from '../lib/scroll'

export function Header() {
  const { locale, setLocale, t } = useI18n()

  function onNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const id = href.replace('#', '')
    smoothScrollTo(id)
    highlightById(id)
  }

  return (
    <header className="header">
      <div className="container header-row">
        <a className="brand" href="#home" onClick={(e) => onNavClick(e, '#home')}>
          <span className="brand-name">{site.owner}</span>
          <span className="brand-role">{t.ownerRole}</span>
        </a>

        <nav className="nav" aria-label="Main">
          {t.nav.map((item) => (
            <a key={item.href} className="nav-link" href={item.href} onClick={(e) => onNavClick(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch" aria-label={t.languageLabel}>
          <button
            type="button"
            className={`lang-btn ${locale === 'pt-BR' ? 'is-active' : ''}`}
            onClick={() => setLocale('pt-BR')}
          >
            PT
          </button>
          <button
            type="button"
            className={`lang-btn ${locale === 'en' ? 'is-active' : ''}`}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
