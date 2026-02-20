import React from 'react'
import { cn } from '../lib/classnames'

type Props = React.HTMLAttributes<HTMLSpanElement> & { children: React.ReactNode }

export function Chip({ children, className, ...rest }: Props) {
  return (
    <span className={cn('chip', className)} {...rest}>
      {children}
    </span>
  )
}
