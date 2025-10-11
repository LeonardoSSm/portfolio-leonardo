import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppLayout } from './app/layout'
import App from './app/App'
import './shared/styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </React.StrictMode>
)
