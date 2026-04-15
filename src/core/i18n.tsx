/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { site } from './config/site'

export type Locale = 'pt-BR' | 'en'

type NavItem = { href: string; label: string }
type MetricItem = { value: string; label: string }
type TextItem = { title: string; desc: string }
type ProjectItem = { name: string; context: string; highlights: string[]; tags: string[]; href: string }
type SkillGroup = { title: string; items: string[] }
type ResourceGroup = { title: string; items: string[] }

type Dictionary = {
  metaTitle: string
  metaDescription: string
  ownerRole: string
  languageLabel: string
  nav: readonly NavItem[]
  home: {
    id: string
    badge: string
    title: string
    subtitle: string
    support: string
    primaryCta: string
    githubCta: string
    contactCta: string
    profileAlt: string
    metrics: readonly MetricItem[]
  }
  about: {
    id: string
    title: string
    lead: string
    paragraphs: readonly string[]
    proofPoints: readonly string[]
  }
  solutions: {
    id: string
    title: string
    lead: string
    items: readonly TextItem[]
  }
  projects: {
    id: string
    title: string
    lead: string
    featuredLabel: string
    githubLabel: string
    codeLabel: string
    secondaryTitle: string
    secondaryLead: string
    items: readonly ProjectItem[]
    secondaryItems: readonly ProjectItem[]
  }
  work: {
    id: string
    title: string
    lead: string
    text: string
    items: readonly string[]
  }
  skills: {
    id: string
    title: string
    lead: string
    groups: readonly SkillGroup[]
  }
  resources: {
    id: string
    title: string
    lead: string
    groups: readonly ResourceGroup[]
  }
  contact: {
    id: string
    title: string
    lead: string
    responseNote: string
    primaryCta: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  footerText: string
  footerRights: string
}

const ptBr: Dictionary = {
  metaTitle: 'Leonardo Sousa | Full Stack Developer',
  metaDescription:
    'Portfolio de Leonardo Sousa, desenvolvedor full stack com forte atuacao em backend, arquitetura, integracoes, automacao e sistemas orientados a regras de negocio.',
  ownerRole: 'Full Stack Developer | Backend, arquitetura e operacao',
  languageLabel: 'Idioma',
  nav: [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre' },
    { href: '#solutions', label: 'Especialidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#resources', label: 'Artigos' },
    { href: '#contact', label: 'Contato' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Full stack com backend forte',
    title: 'Construo sistemas full stack com backends robustos, integracoes confiaveis e foco em estabilidade operacional.',
    subtitle:
      'Atuo com React, Next.js, Node.js, NestJS, Java, Spring Boot, PostgreSQL, MySQL, Redis, Docker e observabilidade para desenvolver sistemas web, mobile, automacoes, bots e solucoes orientadas a regras de negocio reais.',
    support:
      'Minha atuacao combina backend forte, visao de arquitetura, contato com usuarios e evolucao continua de sistemas em producao.',
    primaryCta: 'Ver projetos',
    githubCta: 'Ver GitHub',
    contactCta: 'Falar comigo',
    profileAlt: 'Foto profissional de Leonardo Sousa',
    metrics: [
      { value: 'Backend', label: 'APIs, integracoes e regras de negocio' },
      { value: 'Operacao', label: 'sustentacao, diagnostico e evolucao' },
      { value: 'Full stack', label: 'web, mobile, bots e automacoes' },
    ] as const,
  },
  about: {
    id: 'about',
    title: 'Sobre mim',
    lead: 'Engenharia pratica para sistemas que precisam funcionar, evoluir e apoiar a operacao real.',
    paragraphs: [
      'Sou desenvolvedor Full Stack com forte atuacao em backend, arquitetura de sistemas e evolucao de aplicacoes em producao. Trabalho com solucoes web e mobile, integracoes, automacoes e sistemas orientados a regras de negocio complexas.',
      'Tenho experiencia em projetos de controle operacional, gestao e centralizacao de formularios, bots de WhatsApp para notificacoes, KPIs, sistemas de revezamento com validacoes especificas de negocio, alem de projetos de estudo na area hospitalar com apoio de IA.',
      'Tambem atuo diretamente com usuarios-chave, levantamento de falhas, proposta de melhorias, documentacao tecnica e desenvolvimento de novas features com foco em impacto real no negocio. Na resolucao de problemas, minha prioridade e corrigir a causa no codigo e na arquitetura, evitando solucoes paliativas sempre que possivel.',
    ] as const,
    proofPoints: [
      'Traduzo necessidade operacional em fluxo, regra e software sustentavel.',
      'Investigo falhas pela causa, nao apenas pelo sintoma aparente.',
      'Aproximo codigo, arquitetura, usuario e negocio na mesma conversa.',
    ] as const,
  },
  solutions: {
    id: 'solutions',
    title: 'O que eu resolvo',
    lead: 'Atuo onde regra de negocio, integracao e operacao precisam sair do improviso e virar sistema confiavel.',
    items: [
      {
        title: 'Backend e Arquitetura',
        desc: 'Desenvolvimento de APIs, autenticacao, modelagem de dados, integracoes e estruturacao de sistemas com foco em confiabilidade e manutencao.',
      },
      {
        title: 'Automacao e Processos',
        desc: 'Criacao de solucoes para formularios, notificacoes, bots, centralizacao de fluxos e ganho operacional em rotinas do negocio.',
      },
      {
        title: 'Regras de Negocio Complexas',
        desc: 'Implementacao de logicas operacionais com validacoes especificas, restricoes de fluxo e tomada de decisao baseada em contexto real de uso.',
      },
      {
        title: 'Observabilidade e Evolucao',
        desc: 'Monitoramento, diagnostico, melhoria continua e estabilizacao de sistemas ja em producao, com foco em identificar e resolver a raiz dos problemas.',
      },
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Projetos em destaque',
    lead: 'Solucoes construidas com foco em operacao real, organizacao de processos, regras de negocio e evolucao continua.',
    featuredLabel: 'Case em destaque',
    githubLabel: 'Ver mais no GitHub',
    codeLabel: 'Abrir repositorio',
    secondaryTitle: 'Outros estudos e produtos',
    secondaryLead: 'Cases adicionais ficam recolhidos para manter a pagina principal objetiva.',
    items: [
      {
        name: 'Controle de Descontos e Romaneios',
        context:
          'Sistema voltado ao controle operacional de pedidos, descontos e romaneios, com foco em confiabilidade dos fluxos, analise de inconsistencias e melhoria continua em ambiente produtivo.',
        highlights: [
          'regras de negocio ligadas ao processo operacional',
          'sustentacao e evolucao em producao',
          'correcao de falhas na raiz',
          'contato com usuarios-chave para validar melhorias',
        ],
        tags: ['Backend', 'Operacao', 'Regras de negocio', 'Producao'],
        href: site.github,
      },
      {
        name: 'Sistema de Revezamento com Regras de Negocio',
        context:
          'Sistema para organizacao de funcionarios e atividades com validacoes especificas, contemplando laudos, sexo, carga da atividade e prevencao de repeticao de tarefas pesadas.',
        highlights: [
          'logica orientada a restricoes',
          'validacoes operacionais complexas',
          'organizacao de alocacao de atividades',
          'aderencia ao contexto real do negocio',
        ],
        tags: ['Validacoes', 'Fluxos', 'Restricoes', 'Operacao'],
        href: site.github,
      },
      {
        name: 'Plataforma de Formularios e Centralizacao',
        context:
          'Solucao para criacao, organizacao e centralizacao de formularios, com foco em escalabilidade de uso, padronizacao da informacao e possibilidade de automacao futura.',
        highlights: [
          'estruturacao modular',
          'organizacao de fluxos',
          'visao de produto',
          'base para integracoes e automacoes',
        ],
        tags: ['Formularios', 'Modularidade', 'Automacao', 'Produto'],
        href: site.github,
      },
      {
        name: 'Bot de WhatsApp para Notificacoes',
        context:
          'Automacao para envio de notificacoes e interacao com usuarios via WhatsApp, conectando comunicacao com rotinas e eventos do sistema.',
        highlights: [
          'integracao com fluxos internos',
          'automacao de comunicacao',
          'reducao de friccao operacional',
          'melhoria de experiencia do usuario',
        ],
        tags: ['WhatsApp', 'Integracao', 'Automacao', 'Notificacoes'],
        href: site.github,
      },
    ] as const,
    secondaryItems: [
      {
        name: 'Sistema Hospitalar com Apoio de IA',
        context:
          'Projeto de estudo para ambiente hospitalar com fluxo de recepcao, classificacao de risco, atendimento medico, medicacoes, orientacoes e historico clinico persistente.',
        highlights: ['dominio rico', 'fluxo completo de atendimento', 'historico estruturado', 'IA como apoio a analise'],
        tags: ['Saude', 'IA', 'Fluxo clinico'],
        href: site.github,
      },
      {
        name: 'Gerenciador de Builds e Equipamentos para Jogos',
        context:
          'Ferramenta para criacao e gerenciamento de builds, equipamentos e otimizacao de configuracoes, com foco em organizacao de dados e experiencia do usuario.',
        highlights: ['estruturacao de dados', 'gerenciamento de configuracoes', 'foco em usabilidade', 'produto digital'],
        tags: ['React', 'NestJS', 'Dados'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
      },
    ] as const,
  },
  work: {
    id: 'work',
    title: 'Como eu atuo na pratica',
    lead: 'Trabalho perto do problema, do usuario e da operacao para transformar necessidade real em software sustentavel.',
    text: 'Minha atuacao vai alem de implementar telas ou endpoints. Eu conecto levantamento, analise, arquitetura, entrega e evolucao para que a solucao continue fazendo sentido depois do primeiro deploy.',
    items: [
      'Evolucao de sistemas ja em producao.',
      'Desenvolvimento de solucoes do zero.',
      'Levantamento de requisitos com usuarios-chave.',
      'Correcao de problemas na raiz, nao apenas no banco.',
      'Criacao de novas features com foco em melhoria real.',
      'Documentacao tecnica e registro estruturado de tarefas.',
      'Trabalho colaborativo com equipe.',
      'Analise continua do que o sistema pode suportar e evoluir.',
    ] as const,
  },
  skills: {
    id: 'skills',
    title: 'Stack principal',
    lead: 'Tecnologias aparecem como suporte para resolver problemas reais, nao como uma vitrine de logos.',
    groups: [
      { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'TypeScript'] },
      { title: 'Frontend', items: ['React.js', 'Next.js'] },
      { title: 'Mobile', items: ['React Native', 'Android'] },
      { title: 'Dados e Infra', items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker'] },
      { title: 'Observabilidade', items: ['Grafana', 'metricas', 'logs', 'monitoramento'] },
      { title: 'Engenharia', items: ['System design', 'documentacao tecnica', 'IA como apoio a analise', 'estruturacao de entrega'] },
    ] as const,
  },
  resources: {
    id: 'resources',
    title: 'Artigos, estudos e certificacoes',
    lead: 'Conteudo organizado por finalidade: escrita tecnica, certificacoes e trilhas de estudo.',
    groups: [
      { title: 'Artigos tecnicos', items: ['Arquitetura limpa no dia a dia', 'Observabilidade com Spring Boot Actuator'] },
      { title: 'Certificacoes', items: ['Spring Security', 'REST com Swagger'] },
      { title: 'Estudos e trilhas autorais', items: ['Java 21 Roadmap', 'estudos de arquitetura, backend e system design'] },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    lead: 'Quer conversar sobre backend, arquitetura, integracoes ou evolucao de sistemas?',
    responseNote: 'Me envie contexto, escopo e objetivo. Respondo com uma visao tecnica direta para o proximo passo.',
    primaryCta: 'Entrar em contato',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footerText:
    'Leonardo Sousa - Desenvolvedor Full Stack com forte atuacao em backend, arquitetura e sistemas orientados a regras de negocio.',
  footerRights: 'Todos os direitos reservados.',
}

const en: Dictionary = {
  metaTitle: 'Leonardo Sousa | Full Stack Developer',
  metaDescription:
    'Leonardo Sousa portfolio, full stack developer with strong backend experience, pragmatic architecture, integrations, automation and business-rule-driven systems.',
  ownerRole: 'Full Stack Developer | Backend, architecture and operations',
  languageLabel: 'Language',
  nav: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#solutions', label: 'Expertise' },
    { href: '#projects', label: 'Projects' },
    { href: '#resources', label: 'Writing' },
    { href: '#contact', label: 'Contact' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Full stack with strong backend delivery',
    title: 'I build full stack systems with robust backends, reliable integrations and production stability in mind.',
    subtitle:
      'I work with React, Next.js, Node.js, NestJS, Java, Spring Boot, PostgreSQL, MySQL, Redis, Docker and observability to build web systems, mobile apps, automations, bots and solutions shaped by real business rules.',
    support:
      'My work combines strong backend foundations, architectural judgment, user context and continuous evolution of systems already running in production.',
    primaryCta: 'View projects',
    githubCta: 'View GitHub',
    contactCta: 'Contact me',
    profileAlt: 'Professional photo of Leonardo Sousa',
    metrics: [
      { value: 'Backend', label: 'APIs, integrations and business rules' },
      { value: 'Operations', label: 'support, diagnosis and evolution' },
      { value: 'Full stack', label: 'web, mobile, bots and automation' },
    ] as const,
  },
  about: {
    id: 'about',
    title: 'About me',
    lead: 'Practical engineering for systems that need to work, evolve and support real operations.',
    paragraphs: [
      'I am a Full Stack Developer with strong experience in backend, system architecture and the evolution of production applications. I work on web and mobile solutions, integrations, automations and systems driven by complex business rules.',
      'My experience includes operational control systems, form management and centralization, WhatsApp notification bots, KPIs, rotation systems with specific business validations, and study projects in the healthcare domain with AI support.',
      'I also work directly with key users, issue discovery, improvement proposals, technical documentation and new features focused on real business impact. When solving problems, my priority is to fix the cause in the code and architecture, avoiding temporary workarounds whenever possible.',
    ] as const,
    proofPoints: [
      'I translate operational needs into flows, rules and maintainable software.',
      'I investigate failures by root cause, not only by visible symptoms.',
      'I connect code, architecture, users and business context in the same conversation.',
    ] as const,
  },
  solutions: {
    id: 'solutions',
    title: 'What I solve',
    lead: 'I work where business rules, integrations and operations need to move from improvisation to reliable software.',
    items: [
      {
        title: 'Backend and Architecture',
        desc: 'API development, authentication, data modeling, integrations and system structure focused on reliability and maintainability.',
      },
      {
        title: 'Automation and Processes',
        desc: 'Solutions for forms, notifications, bots, flow centralization and operational gains in business routines.',
      },
      {
        title: 'Complex Business Rules',
        desc: 'Operational logic with specific validations, flow restrictions and decisions based on real usage context.',
      },
      {
        title: 'Observability and Evolution',
        desc: 'Monitoring, diagnosis, continuous improvement and stabilization of production systems with attention to root causes.',
      },
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Featured projects',
    lead: 'Solutions built around real operations, process organization, business rules and continuous evolution.',
    featuredLabel: 'Featured case',
    githubLabel: 'See more on GitHub',
    codeLabel: 'Open repository',
    secondaryTitle: 'Additional studies and products',
    secondaryLead: 'Additional cases stay collapsed so the main page remains focused.',
    items: [
      {
        name: 'Discount and Delivery Manifest Control',
        context:
          'Operational system for orders, discounts and delivery manifests, focused on reliable flows, inconsistency analysis and continuous improvement in production.',
        highlights: [
          'business rules tied to operational process',
          'production support and evolution',
          'root-cause issue resolution',
          'work with key users to validate improvements',
        ],
        tags: ['Backend', 'Operations', 'Business rules', 'Production'],
        href: site.github,
      },
      {
        name: 'Rotation System with Business Rules',
        context:
          'System for organizing employees and activities with specific validations, including medical reports, gender, activity load and prevention of repeated heavy tasks.',
        highlights: [
          'constraint-driven logic',
          'complex operational validations',
          'activity allocation organization',
          'fit with real business context',
        ],
        tags: ['Validations', 'Flows', 'Constraints', 'Operations'],
        href: site.github,
      },
      {
        name: 'Forms and Centralization Platform',
        context:
          'Solution for creating, organizing and centralizing forms, focused on scalable usage, information standardization and future automation.',
        highlights: ['modular structure', 'flow organization', 'product thinking', 'foundation for integrations and automation'],
        tags: ['Forms', 'Modularity', 'Automation', 'Product'],
        href: site.github,
      },
      {
        name: 'WhatsApp Notification Bot',
        context:
          'Automation for notifications and user interaction through WhatsApp, connecting communication with routines and system events.',
        highlights: ['integration with internal flows', 'communication automation', 'lower operational friction', 'better user experience'],
        tags: ['WhatsApp', 'Integration', 'Automation', 'Notifications'],
        href: site.github,
      },
    ] as const,
    secondaryItems: [
      {
        name: 'Healthcare System with AI Support',
        context:
          'Study project for a healthcare environment with reception, risk classification, medical care, medication records, guidance and persistent clinical history.',
        highlights: ['rich domain', 'complete care flow', 'structured clinical history', 'AI as analysis support'],
        tags: ['Healthcare', 'AI', 'Clinical flow'],
        href: site.github,
      },
      {
        name: 'Game Build and Equipment Manager',
        context:
          'Tool for creating and managing builds, equipment and configuration optimization, focused on data organization and user experience.',
        highlights: ['data structure', 'configuration management', 'usability focus', 'product-oriented project'],
        tags: ['React', 'NestJS', 'Data'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
      },
    ] as const,
  },
  work: {
    id: 'work',
    title: 'How I work in practice',
    lead: 'I stay close to the problem, the user and the operation to turn real needs into maintainable software.',
    text: 'My work goes beyond implementing screens or endpoints. I connect discovery, analysis, architecture, delivery and evolution so the solution still makes sense after the first deploy.',
    items: [
      'Evolution of systems already in production.',
      'Development of new solutions from scratch.',
      'Requirement discovery with key users.',
      'Root-cause fixes, not database-only patches.',
      'New features focused on real improvement.',
      'Technical documentation and structured task records.',
      'Collaborative work with engineering teams.',
      'Continuous analysis of what the system can support and become.',
    ] as const,
  },
  skills: {
    id: 'skills',
    title: 'Core stack',
    lead: 'Technologies support the work; they are not the whole story.',
    groups: [
      { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'TypeScript'] },
      { title: 'Frontend', items: ['React.js', 'Next.js'] },
      { title: 'Mobile', items: ['React Native', 'Android'] },
      { title: 'Data and Infra', items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker'] },
      { title: 'Observability', items: ['Grafana', 'metrics', 'logs', 'monitoring'] },
      { title: 'Engineering', items: ['System design', 'technical documentation', 'AI-assisted analysis', 'delivery structuring'] },
    ] as const,
  },
  resources: {
    id: 'resources',
    title: 'Articles, studies and certifications',
    lead: 'Technical writing, certificates and study tracks separated by purpose.',
    groups: [
      { title: 'Technical articles', items: ['Clean architecture in day-to-day work', 'Observability with Spring Boot Actuator'] },
      { title: 'Certifications', items: ['Spring Security', 'REST with Swagger'] },
      { title: 'Studies and personal tracks', items: ['Java 21 Roadmap', 'architecture, backend and system design studies'] },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    lead: 'Want to talk about backend, architecture, integrations or system evolution?',
    responseNote: 'Share the context, scope and goal. I will reply with a direct technical view for the next step.',
    primaryCta: 'Get in touch',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footerText:
    'Leonardo Sousa - Full Stack Developer with strong backend experience, architecture focus and business-rule-driven systems.',
  footerRights: 'All rights reserved.',
}

const dictionaries: Record<Locale, Dictionary> = {
  'pt-BR': ptBr,
  en,
}

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'portfolio:locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt-BR'

  const url = new URL(window.location.href)
  if (url.searchParams.get('lang')?.toLowerCase() === 'en') {
    return 'en'
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'pt-BR' || saved === 'en') {
    return saved
  }

  return 'pt-BR'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())
  const t = useMemo(() => dictionaries[locale], [locale])

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
    document.title = t.metaTitle

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    metaDescription?.setAttribute('content', t.metaDescription)

    const url = new URL(window.location.href)
    if (locale === 'en') {
      url.searchParams.set('lang', 'en')
    } else {
      url.searchParams.delete('lang')
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [locale, t.metaDescription, t.metaTitle])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return value
}
