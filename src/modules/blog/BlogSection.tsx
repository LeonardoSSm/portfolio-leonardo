import React from 'react'
import { Section } from '../../shared/ui/Section'
import { posts } from './data'

export function BlogSection() {
  return (
    <Section id="blog" title="Blog">
      <ul className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 16, listStyle: 'none', padding: 0 }}>
        {posts.map((p) => (
          <li key={p.slug} className="card">
            <h3 style={{ margin: 0, fontWeight: 600 }}>{p.title}</h3>
            <div className="p" style={{ fontSize: 12, marginTop: 4 }}>{new Date(p.date).toLocaleDateString('pt-BR')}</div>
            <p className="p" style={{ marginTop: 8 }}>{p.summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
