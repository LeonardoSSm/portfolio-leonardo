import type { Project } from '../../core/types'

export const projects: Project[] = [
  { name: 'Sistema Financeiro Modular', desc: 'Módulos de contas, usuários, transações; Docker e CI.', tags: ['Java', 'Spring', 'Docker'] },
  { name: 'BarberConnect', desc: 'Agendamento para barbearias com perfis admin/cliente.', tags: ['Spring', 'Security', 'JPA'] },
  { name: 'AFKStrategist', desc: 'Comparação de heróis e otimização de estratégias.', tags: ['Node', 'React', 'MongoDB'] },
  { name: 'Auth Service', desc: 'Autenticação JWT, roles e boas práticas.', tags: ['Spring Security', 'JWT'] }
]
