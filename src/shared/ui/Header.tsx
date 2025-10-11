import React from 'react'
import { site } from '../../core/config/site'
import { smoothScrollTo, highlightById } from '../lib/scroll'

const items = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
] as const

export function Header() {
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
        <a href="#inicio" style={{ fontWeight: 600, letterSpacing: '.1px' }} onClick={(e) => onNavClick(e, '#inicio')}>
          {site.owner}
        </a>
        <nav className="nav">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={(e) => onNavClick(e, it.href)}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
