import React from 'react'
import { useI18n } from '../../core/i18n'

const aboutCopy = {
  'pt-BR': {
    kicker: '// 01 — SOBRE',
    title: 'Engenharia com olhar de produto.',
    bio: [
      'Trabalho com desenvolvimento web navegando entre frontend e backend para construir solucoes completas, claras e consistentes.',
      'Meu foco atual esta em aplicacoes React + Node, TypeScript de ponta a ponta, banco relacional e infraestrutura simples e confiavel.',
    ],
    skillsTitle: 'Skills',
    groups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Next.js', 'UI Systems'] },
      { title: 'Backend', items: ['Node.js', 'Fastify', 'Express', 'REST APIs', 'PostgreSQL', 'Redis'] },
      { title: 'DevOps & Tools', items: ['Docker', 'GitHub Actions', 'Vercel', 'Linux', 'Figma', 'Observability'] },
    ],
  },
  en: {
    kicker: '// 01 — ABOUT',
    title: 'Engineering with product eyes.',
    bio: [
      'I work across frontend and backend to build complete web products with clarity, speed and consistency.',
      'My current focus is React + Node applications, end-to-end TypeScript, relational databases and simple, reliable infrastructure.',
    ],
    skillsTitle: 'Skills',
    groups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Next.js', 'UI Systems'] },
      { title: 'Backend', items: ['Node.js', 'Fastify', 'Express', 'REST APIs', 'PostgreSQL', 'Redis'] },
      { title: 'DevOps & Tools', items: ['Docker', 'GitHub Actions', 'Vercel', 'Linux', 'Figma', 'Observability'] },
    ],
  },
} as const

export function AboutSection() {
  const { locale } = useI18n()
  const copy = aboutCopy[locale]

  return (
    <section id="about" className="canvas-section about-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{copy.kicker}</span>
        </div>

        <h2 className="section-title">{copy.title}</h2>

        <div className="about-layout">
          <div className="about-primary">
            <div className="about-visual-panel">
              <span>DEV</span>
            </div>

            <div className="about-copy">
              {copy.bio.map((paragraph) => (
                <p key={paragraph} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="about-secondary">
            <h3 className="about-side-title">// {copy.skillsTitle}</h3>

            <div className="skills-groups">
              {copy.groups.map((group) => (
                <section key={group.title} className="skill-group-card">
                  <div className="skill-group-head">
                    <h3>{group.title}</h3>
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
      </div>
    </section>
  )
}
