import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

const contactCopy = {
  'pt-BR': {
    kicker: '// 04 — CONTATO',
    titleLead: 'Vamos construir algo',
    titleAccent: 'bom?',
    subtitle: 'Aberto para projetos freelance, parcerias e oportunidades full-time.',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      name: 'Nome',
      mail: 'Email',
      message: 'Mensagem',
      send: 'Enviar mensagem',
    },
  },
  en: {
    kicker: '// 04 — CONTACT',
    titleLead: "Let's build something",
    titleAccent: 'good?',
    subtitle: 'Open to freelance projects, partnerships and full-time opportunities.',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      name: 'Name',
      mail: 'Email',
      message: 'Message',
      send: 'Send message',
    },
  },
} as const

export function ContactSection() {
  const { locale } = useI18n()
  const copy = contactCopy[locale]

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = locale === 'en' ? `Portfolio contact from ${name || 'visitor'}` : `Contato pelo portfolio de ${name || 'visitante'}`
    const body = `${copy.labels.name}: ${name}\n${copy.labels.mail}: ${email}\n\n${message}`

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="canvas-section contact-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{copy.kicker}</span>
        </div>

        <h2 className="contact-title">
          <span>{copy.titleLead} </span>
          <span className="is-accent">{copy.titleAccent}</span>
        </h2>
        <p className="section-support section-support-wide">{copy.subtitle}</p>

        <div className="contact-layout">
          <div className="contact-links">
            <a href={`mailto:${site.email}`} className="contact-link-row">
              <span className="contact-link-label">{copy.labels.email}</span>
              <strong>{site.email}</strong>
            </a>
            <a href={site.github} className="contact-link-row" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-label">{copy.labels.github}</span>
              <strong>{site.github.replace('https://', '')}</strong>
            </a>
            <a href={site.linkedin} className="contact-link-row" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-label">{copy.labels.linkedin}</span>
              <strong>{site.linkedin.replace('https://www.', '').replace('https://', '')}</strong>
            </a>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-grid">
              <label>
                <span>{copy.labels.name}</span>
                <input name="name" type="text" required />
              </label>
              <label>
                <span>{copy.labels.mail}</span>
                <input name="email" type="email" required />
              </label>
            </div>

            <label>
              <span>{copy.labels.message}</span>
              <textarea name="message" rows={6} required />
            </label>

            <button type="submit" className="hero-button hero-button-primary contact-submit">
              {copy.labels.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
