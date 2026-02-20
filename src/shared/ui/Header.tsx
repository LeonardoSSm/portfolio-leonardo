import React, { useEffect, useState } from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'
import { smoothScrollTo, highlightById } from '../lib/scroll'

export function Header() {
  const { locale, setLocale, t } = useI18n()
  const [activeHref, setActiveHref] = useState<string>(t.nav[0]?.href ?? '#home')

  useEffect(() => {
    setActiveHref(t.nav[0]?.href ?? '#home')
  }, [t.nav])

  useEffect(() => {
    const targets = t.nav
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.35, 0.5, 0.75] },
    )

    targets.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [t.nav])

  function onNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const id = href.replace('#', '')
    smoothScrollTo(id)
    highlightById(id)
    setActiveHref(href)
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
            <a
              key={item.href}
              className={`nav-link ${activeHref === item.href ? 'is-active' : ''}`}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
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
