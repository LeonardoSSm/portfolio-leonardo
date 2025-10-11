import React from 'react'
import { site } from '../../core/config/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {site.owner}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
