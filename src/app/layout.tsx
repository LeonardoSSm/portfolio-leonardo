import React from 'react'
import { Header } from '../shared/ui/Header'
import { Footer } from '../shared/ui/Footer'

type Props = { children: React.ReactNode }

export function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
