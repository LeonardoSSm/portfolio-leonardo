import React from 'react'
import { useI18n } from '../../core/i18n'

export function AboutSection() {
  const { t, locale } = useI18n()

  return (
    <section id={t.about.id} className="canvas-section about-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{locale === 'en' ? '// 01 — ABOUT' : '// 01 — SOBRE'}</span>
        </div>

        <h2 className="section-title">{t.about.title}</h2>

        <div className="about-layout">
          <div className="about-primary">
            <div className="about-panel">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="about-proof-list">
              {t.about.proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="about-secondary">
            <div className="about-skills-header">
              <span>// {t.skills.title}</span>
              <p>{t.skills.lead}</p>
            </div>

            <div className="skills-groups">
              {t.skills.groups.map((group) => (
                <section key={group.title} className="skill-group-card" aria-labelledby={`skill-${group.title}`}>
                  <div className="skill-group-head">
                    <h3 id={`skill-${group.title}`}>{group.title}</h3>
                    <span>{String(group.items.length).padStart(2, '0')}</span>
                  </div>
                  <div className="skill-chip-row">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <div id={t.solutions.id} className="solutions-block">
          <div className="section-kicker section-kicker-secondary">
            <span className="section-kicker-line" />
            <span className="section-kicker-text">{locale === 'en' ? '// 01A — EXPERTISE' : '// 01A — ESPECIALIDADES'}</span>
          </div>

          <div className="section-heading-row">
            <h3 className="subsection-title">{t.solutions.title}</h3>
            <p className="subsection-lead">{t.solutions.lead}</p>
          </div>

          <div className="solutions-grid">
            {t.solutions.items.map((item, index) => (
              <article key={item.title} className="solution-card">
                <span className="solution-index">{String(index + 1).padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
