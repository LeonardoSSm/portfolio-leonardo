import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container footer-row">
        <p className="footer-copy">
          © {new Date().getFullYear()} {site.owner} · {t.footerRights}
        </p>
        <p className="footer-built">// {t.footerText}</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{t.contact.emailLabel}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            {t.contact.githubLabel}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            {t.contact.linkedinLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
