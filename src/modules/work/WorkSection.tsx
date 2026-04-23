import React from 'react'
import { useI18n } from '../../core/i18n'

const experienceCopy = {
  'pt-BR': {
    kicker: '// 03 — EXPERIENCIA',
    title: 'Trajetoria.',
    items: [
      {
        role: 'Desenvolvedor Fullstack Senior',
        company: 'Empresa Atual',
        period: '2023 — Presente',
        description: 'Lideranca tecnica em produto SaaS, arquitetura, code review e mentoria.',
      },
      {
        role: 'Desenvolvedor Fullstack',
        company: 'Empresa Anterior',
        period: '2021 — 2023',
        description: 'Entrega de features end-to-end em React e Node, com foco em performance.',
      },
      {
        role: 'Desenvolvedor Frontend',
        company: 'Primeira Empresa',
        period: '2019 — 2021',
        description: 'Construcao de interfaces ricas e design systems para produtos B2B.',
      },
    ],
  },
  en: {
    kicker: '// 03 — EXPERIENCE',
    title: 'Trajectory.',
    items: [
      {
        role: 'Senior Fullstack Developer',
        company: 'Current Company',
        period: '2023 — Present',
        description: 'Technical leadership on a SaaS product, architecture, code review and mentoring.',
      },
      {
        role: 'Fullstack Developer',
        company: 'Previous Company',
        period: '2021 — 2023',
        description: 'End-to-end feature delivery in React and Node with focus on performance.',
      },
      {
        role: 'Frontend Developer',
        company: 'First Company',
        period: '2019 — 2021',
        description: 'Built rich interfaces and design systems for B2B products.',
      },
    ],
  },
} as const

export function WorkSection() {
  const { locale } = useI18n()
  const copy = experienceCopy[locale]

  return (
    <section id="experience" className="canvas-section work-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{copy.kicker}</span>
        </div>

        <h2 className="section-title">{copy.title}</h2>

        <div className="experience-layout">
          <div className="experience-spacer" />
          <ol className="experience-timeline">
            {copy.items.map((item) => (
              <li key={`${item.role}-${item.period}`} className="experience-item">
                <span className="experience-point" aria-hidden>
                  <span />
                </span>
                <div className="experience-card">
                  <div className="experience-head">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="experience-company">@ {item.company}</p>
                  <p className="experience-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
