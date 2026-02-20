import React from 'react'
import { cn } from '../lib/classnames'

type Props = {
  id?: string
  title?: string
  lead?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, title, lead, className, children }: Props) {
  return (
    <section id={id} className={cn('section', className)}>
      {title ? (
        <header className="section-head">
          <h2 className="h2">{title}</h2>
          {lead ? <p className="p section-lead">{lead}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  )
}
