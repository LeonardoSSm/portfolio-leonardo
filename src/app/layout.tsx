import React from 'react'
import { Header } from '../shared/ui/Header'
import { Footer } from '../shared/ui/Footer'
import { I18nProvider } from '../core/i18n'

type Props = { children: React.ReactNode }

export function AppLayout({ children }: Props) {
  return (
    <I18nProvider>
      <div className="site-shell">
        <Header />
        {children}
        <Footer />
      </div>
    </I18nProvider>
  )
}
