import React from 'react'
import { cn } from '../lib/classnames'

type Props = React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }

export function Card({ children, className, ...rest }: Props) {
  return (
    <article className={cn('card', className)} {...rest}>
      {children}
    </article>
  )
}
