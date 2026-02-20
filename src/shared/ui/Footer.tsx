import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} {site.owner}</span>
        <span>{t.footerRights}</span>
      </div>
    </footer>
  )
}
