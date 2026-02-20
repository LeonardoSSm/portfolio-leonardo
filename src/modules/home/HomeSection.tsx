import React from 'react'
import { Section } from '../../shared/ui/Section'
import { Card } from '../../shared/ui/Card'
import { smoothScrollTo, highlightById } from '../../shared/lib/scroll'
import { useI18n } from '../../core/i18n'

export function HomeSection() {
  const { t } = useI18n()

  const buildLog = t.home.buildLog.join('\n')

  function onActionClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    smoothScrollTo(href)
    highlightById(href)
  }

  return (
    <Section id={t.home.id}>
      <div className="hero-grid">
        <div>
          <h1 className="h1">{t.home.title}</h1>
          <p className="p section-intro">{t.home.stackLine}</p>

          <div className="hero-actions">
            <a className="cta cta-primary" href="#projects" onClick={(e) => onActionClick(e, '#projects')}>
              {t.home.primaryCta}
            </a>
            <a className="cta cta-secondary" href="#contact" onClick={(e) => onActionClick(e, '#contact')}>
              {t.home.secondaryCta}
            </a>
          </div>
        </div>

        <Card>
          <pre className="hero-log">{buildLog}</pre>
        </Card>
      </div>
    </Section>
  )
}
