import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return <article className="card">{children}</article>
}
