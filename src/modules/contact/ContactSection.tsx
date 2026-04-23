import React from 'react'
import { site } from '../../core/config/site'
import { useI18n } from '../../core/i18n'

export function ContactSection() {
  const { t, locale } = useI18n()

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = locale === 'en' ? `Portfolio contact from ${name || 'visitor'}` : `Contato pelo portfolio de ${name || 'visitante'}`
    const body = `${locale === 'en' ? 'Name' : 'Nome'}: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    event.currentTarget.reset()
  }

  const formLabels =
    locale === 'en'
      ? { name: 'Name', email: 'Email', message: 'Message', send: 'Send message' }
      : { name: 'Nome', email: 'Email', message: 'Mensagem', send: 'Enviar mensagem' }

  const directLinks = [
    { label: t.contact.emailLabel, value: site.email, href: `mailto:${site.email}` },
    { label: t.contact.githubLabel, value: site.github.replace('https://', ''), href: site.github },
    { label: t.contact.linkedinLabel, value: site.linkedin.replace('https://www.', '').replace('https://', ''), href: site.linkedin },
  ]

  const titleParts = t.contact.title.split(' ')
  const accent = titleParts.pop() ?? ''
  const lead = titleParts.join(' ')

  return (
    <section id={t.contact.id} className="canvas-section contact-section">
      <div className="container">
        <div className="section-kicker">
          <span className="section-kicker-line" />
          <span className="section-kicker-text">{locale === 'en' ? '// 04 — CONTACT' : '// 04 — CONTATO'}</span>
        </div>

        <h2 className="contact-title">
          <span>{lead} </span>
          <span className="is-accent">{accent}</span>
        </h2>

        <p className="section-support section-support-wide">{t.contact.lead}</p>
        <p className="contact-note">{t.contact.responseNote}</p>

        <div className="contact-layout">
          <div className="contact-links">
            {directLinks.map((item) => (
              <a key={item.label} href={item.href} className="contact-link-row" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <span className="contact-link-label">{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-grid">
              <label>
                <span>{formLabels.name}</span>
                <input name="name" type="text" required />
              </label>
              <label>
                <span>{formLabels.email}</span>
                <input name="email" type="email" required />
              </label>
            </div>

            <label>
              <span>{formLabels.message}</span>
              <textarea name="message" rows={6} required />
            </label>

            <button type="submit" className="hero-button hero-button-primary contact-submit">
              {formLabels.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
