export function smoothScrollTo(id: string) {
  const el = document.getElementById(id.replace(/^#/, ''))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function highlightById(id: string) {
  const el = document.getElementById(id.replace(/^#/, ''))
  if (!el) return
  el.classList.remove('highlight')
  // força reflow para reiniciar a animação
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetWidth
  el.classList.add('highlight')
}
