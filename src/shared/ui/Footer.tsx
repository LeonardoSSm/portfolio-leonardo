import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function Footer() {
  const { locale } = useI18n()
  const rights = locale === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'
  const built = locale === 'en' ? 'Built with React + TypeScript' : 'Construido com React + TypeScript'

  return (
    <footer className="footer">
      <div className="container footer-row">
        <p className="footer-copy">© {new Date().getFullYear()} · {rights}</p>
        <p className="footer-built">// {built}</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
