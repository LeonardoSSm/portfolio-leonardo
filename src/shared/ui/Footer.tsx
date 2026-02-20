import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-row">
          <span>© {new Date().getFullYear()} {site.owner}</span>
          <span>{t.footerRights}</span>
        </div>

        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{t.contact.emailLabel}</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">{t.contact.linkedinLabel}</a>
          <a href={site.github} target="_blank" rel="noreferrer">{t.contact.githubLabel}</a>
        </div>
      </div>
    </footer>
  )
}
