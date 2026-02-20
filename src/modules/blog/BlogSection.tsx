import React from 'react'
import { Section } from '../../shared/ui/Section'
import { useI18n } from '../../core/i18n'

export function BlogSection() {
  const { locale, t } = useI18n()
  const dateLocale = locale === 'en' ? 'en-US' : 'pt-BR'

  return (
    <Section id={t.blog.id} title={t.blog.title} lead={t.blog.lead}>
      <ul className="list-grid blog-grid">
        {t.blog.items.map((post) => (
          <li key={post.slug} className="card blog-item">
            <h3 className="card-title">{post.title}</h3>
            <div className="p tiny">{new Date(post.date).toLocaleDateString(dateLocale)}</div>
            <p className="p">{post.summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
