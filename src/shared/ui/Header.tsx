import React, { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../../core/i18n'
import { smoothScrollTo, highlightById } from '../lib/scroll'

export function Header() {
  const { locale, setLocale } = useI18n()
  const [activeHref, setActiveHref] = useState('#about')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const copy = useMemo(
    () =>
      locale === 'en'
        ? {
            languageLabel: 'Language',
            cta: "Let's talk",
            sections: [
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' },
            ],
          }
        : {
            languageLabel: 'Idioma',
            cta: 'Vamos conversar',
            sections: [
              { href: '#about', label: 'Sobre' },
              { href: '#projects', label: 'Projetos' },
              { href: '#experience', label: 'Experiencia' },
              { href: '#contact', label: 'Contato' },
            ],
          },
    [locale],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = copy.sections
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
  }, [copy.sections])

  function onNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return
    e.preventDefault()
    smoothScrollTo(href)
    highlightById(href)
    setActiveHref(href)
    setMobileOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-row">
        <a className="brand" href="#home" onClick={(e) => onNavClick(e, '#home')} aria-label="Dev portfolio">
          <span className="brand-mark">D</span>
          <span className="brand-name">DEV/PORTFOLIO</span>
        </a>

        <nav className="nav desktop-nav" aria-label="Main">
          {copy.sections.map((item) => (
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

        <div className="header-actions">
          <div className="lang-switch" aria-label={copy.languageLabel}>
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

          <a className="header-cta" href="#contact" onClick={(e) => onNavClick(e, '#contact')}>
            {copy.cta}
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            <nav className="nav mobile-nav" aria-label="Mobile">
              {copy.sections.map((item) => (
                <a key={item.href} className="mobile-nav-link" href={item.href} onClick={(e) => onNavClick(e, item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
