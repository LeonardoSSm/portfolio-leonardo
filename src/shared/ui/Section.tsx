import React from 'react'

type Props = { id?: string; title?: string; children: React.ReactNode }
export function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="section">
      {title ? <h2 className="h2">{title}</h2> : null}
      {children}
    </section>
  )
}
