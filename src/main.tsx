import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppLayout } from './app/layout'
import App from './app/App'
import './shared/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppLayout>
      <App />
      <Analytics />
    </AppLayout>
  </React.StrictMode>
)
