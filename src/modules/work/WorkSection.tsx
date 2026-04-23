import React from 'react'
import { useI18n } from '../../core/i18n'

export function WorkSection() {
  const { t, locale } = useI18n()

  return (
    <section className="canvas-section work-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{locale === 'en' ? '// 03 — DELIVERY' : '// 03 — ATUACAO'}</span>
        </div>

        <h2 id={t.work.id} className="section-title">
          {t.work.title}
        </h2>
        <p className="section-support section-support-wide">{t.work.lead}</p>

        <div className="work-layout">
          <div className="work-intro-panel">
            <p>{t.work.text}</p>
          </div>

          <ol className="work-timeline">
            {t.work.items.map((item, index) => (
              <li key={item} className="work-timeline-item">
                <span className="work-timeline-point" aria-hidden>
                  <span />
                </span>
                <div className="work-timeline-content">
                  <div className="work-timeline-head">
                    <strong>{locale === 'en' ? 'Execution block' : 'Bloco de execucao'}</strong>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id={t.resources.id} className="resources-block">
          <div className="section-kicker section-kicker-secondary">
            <span className="section-kicker-line" />
            <span className="section-kicker-text">{locale === 'en' ? '// 03A — STUDIES' : '// 03A — ESTUDOS'}</span>
          </div>

          <div className="section-heading-row">
            <h3 className="subsection-title">{t.resources.title}</h3>
            <p className="subsection-lead">{t.resources.lead}</p>
          </div>

          <div className="resources-grid">
            {t.resources.groups.map((group) => (
              <article key={group.title} className="resource-card">
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
