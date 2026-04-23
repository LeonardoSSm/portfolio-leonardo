import React from 'react'
import { useI18n } from '../../core/i18n'

const projectsCopy = {
  'pt-BR': {
    kicker: '// 02 — PROJETOS',
    title: 'Trabalhos selecionados.',
    subtitle: 'Uma amostra de projetos pessoais e profissionais em formato mais direto e visual.',
    primary: 'Demo',
    secondary: 'Codigo',
    items: [
      {
        name: 'Plataforma SaaS',
        description: 'Dashboard multi-tenant com autenticacao, billing e metricas em tempo real.',
        stack: ['React', 'Node', 'PostgreSQL', 'Stripe'],
      },
      {
        name: 'API de Logistica',
        description: 'Servico REST de roteirizacao com filas assincronas e cache distribuido.',
        stack: ['Node', 'Fastify', 'Redis', 'Docker'],
      },
      {
        name: 'App Mobile Web',
        description: 'PWA responsivo com modo offline e sincronizacao em background.',
        stack: ['React', 'TypeScript', 'Vite', 'IndexedDB'],
      },
    ],
  },
  en: {
    kicker: '// 02 — PROJECTS',
    title: 'Selected work.',
    subtitle: 'A direct and visual sample of personal and professional projects.',
    primary: 'Demo',
    secondary: 'Code',
    items: [
      {
        name: 'SaaS Platform',
        description: 'Multi-tenant dashboard with auth, billing and real-time metrics.',
        stack: ['React', 'Node', 'PostgreSQL', 'Stripe'],
      },
      {
        name: 'Logistics API',
        description: 'Routing REST service with async queues and distributed cache.',
        stack: ['Node', 'Fastify', 'Redis', 'Docker'],
      },
      {
        name: 'Mobile Web App',
        description: 'Responsive PWA with offline mode and background sync.',
        stack: ['React', 'TypeScript', 'Vite', 'IndexedDB'],
      },
    ],
  },
} as const

export function ProjectsSection() {
  const { locale } = useI18n()
  const copy = projectsCopy[locale]

  return (
    <section id="projects" className="canvas-section projects-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{copy.kicker}</span>
        </div>

        <div className="section-heading-row">
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-support section-support-compact">{copy.subtitle}</p>
        </div>

        <div className="projects-grid">
          {copy.items.map((project, index) => (
            <article key={project.name} className="project-card">
              <div className="project-preview">
                <div className="project-preview-grid" aria-hidden />
                <span className="project-preview-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-preview-tag">// PROJECT_{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="#contact" className="project-link project-link-primary">
                    {copy.primary}
                  </a>
                  <a href="#contact" className="project-link">
                    {copy.secondary}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
