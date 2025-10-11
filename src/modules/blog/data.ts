export type Post = { slug: string; title: string; summary: string; date: string }

export const posts: Post[] = [
  {
    slug: 'arquitetura-limpa-no-dia-a-dia',
    title: 'Arquitetura limpa no dia a dia',
    summary: 'Princípios práticos aplicados a um serviço de autenticação.',
    date: '2024-09-12',
  },
  {
    slug: 'observabilidade-com-actuator',
    title: 'Observabilidade com Spring Boot Actuator',
    summary: 'Métricas úteis, health checks e Prometheus sem drama.',
    date: '2024-06-28',
  },
]
