/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { site } from './config/site'

export type Locale = 'pt-BR' | 'en'

type NavItem = { href: string; label: string }
type ProjectItem = { name: string; desc: string; tags: string[]; href: string }
type CertificateItem = { title: string; issuer: string }
type PostItem = { slug: string; title: string; summary: string; date: string }

type Dictionary = {
  metaTitle: string
  ownerRole: string
  languageLabel: string
  nav: readonly NavItem[]
  home: {
    id: string
    badge: string
    title: string
    stackLine: string
    primaryCta: string
    secondaryCta: string
    buildLog: readonly string[]
    highlights: readonly string[]
  }
  about: {
    id: string
    title: string
    lead: string
    body: string
    pillars: readonly string[]
  }
  skills: {
    id: string
    title: string
    lead: string
    items: readonly string[]
  }
  projects: {
    id: string
    title: string
    lead: string
    featuredLabel: string
    githubLabel: string
    codeLabel: string
    items: readonly ProjectItem[]
  }
  certificates: {
    id: string
    title: string
    lead: string
    items: readonly CertificateItem[]
  }
  blog: {
    id: string
    title: string
    lead: string
    items: readonly PostItem[]
  }
  contact: {
    id: string
    title: string
    lead: string
    responseNote: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  footerRights: string
}

const ptBr: Dictionary = {
  metaTitle: 'Leonardo Sousa | Backend & Full Stack',
  ownerRole: 'Backend & Full Stack Engineer',
  languageLabel: 'Idioma',
  nav: [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projetos' },
    { href: '#certificates', label: 'Certificados' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contato' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Disponível para freelas e oportunidades full stack',
    title: 'Construo backends seguros em múltiplas linguagens e também entrego frontend completo quando o produto precisa.',
    stackLine: 'Backend multi-stack · Frontend React · PostgreSQL · Docker · CI/CD · Observabilidade',
    primaryCta: 'Ver projetos',
    secondaryCta: 'Falar sobre projeto',
    buildLog: ['// Pipeline recente', '$ docker compose up -d', '$ mvn -q test', '> 142 testes OK'],
    highlights: [
      '142+ testes automatizados em pipelines recentes',
      'Arquitetura modular orientada a domínio (DDD + SOLID)',
      'Atuação full stack: backend, frontend e entrega contínua',
    ] as const,
  },
  about: {
    id: 'about',
    title: 'Sobre',
    lead: 'Código limpo com foco em resultado de negócio e estabilidade operacional.',
    body: 'Sou desenvolvedor backend com atuação em múltiplas linguagens e foco em arquitetura limpa e qualidade de entrega. Também desenvolvo frontend e consigo conduzir projetos de ponta a ponta como full stack.',
    pillars: [
      'APIs com contratos claros, versionamento e baixa acoplagem',
      'Camadas de segurança com autenticação, permissões e auditoria',
      'Entrega contínua com testes, métricas e observabilidade',
    ] as const,
  },
  skills: {
    id: 'skills',
    title: 'Especialidades',
    lead: 'Stack orientada a backend resiliente, integração entre serviços e operação confiável.',
    items: [
      'Java / Spring Boot',
      'Node.js / NestJS',
      'TypeScript / JavaScript',
      'REST / JPA / Security',
      'React / Vite',
      'Docker / Docker Compose',
      'PostgreSQL / H2',
      'Mensageria (JMS/ActiveMQ)',
      'Observabilidade (Actuator/Prometheus)',
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Projetos em destaque',
    lead: 'Cases reais com foco em arquitetura, qualidade de código e entrega de valor.',
    featuredLabel: 'Case em destaque',
    githubLabel: 'Ver mais no GitHub',
    codeLabel: 'Abrir repositório',
    items: [
      {
        name: 'TD2 Builder',
        desc: 'Plataforma completa para criação e gestão de builds do The Division 2 com API NestJS, painel React, controle de acesso, monitoramento e importação XLSX assíncrona.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'TanStack Query'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
      },
      {
        name: 'Sistema Financeiro Modular',
        desc: 'Módulos de contas, usuários e transações com ambiente Docker e fluxo de CI.',
        tags: ['Java', 'Spring', 'Docker'],
        href: site.github,
      },
      {
        name: 'BarberConnect',
        desc: 'Plataforma de agendamento para barbearias com perfis admin e cliente.',
        tags: ['Spring', 'Security', 'JPA'],
        href: site.github,
      },
      {
        name: 'AFKStrategist',
        desc: 'Aplicação para comparação de heróis e otimização de estratégias.',
        tags: ['Node', 'React', 'MongoDB'],
        href: site.github,
      },
      {
        name: 'Auth Service',
        desc: 'Serviço de autenticação com JWT, controle de roles e foco em segurança.',
        tags: ['Spring Security', 'JWT'],
        href: site.github,
      },
    ] as const,
  },
  certificates: {
    id: 'certificates',
    title: 'Certificados',
    lead: 'Aprendizado contínuo em backend moderno, arquitetura e engenharia de software.',
    items: [
      { title: 'Spring Security', issuer: 'DIO' },
      { title: 'REST com Swagger', issuer: 'DIO' },
      { title: 'Java 21 Roadmap', issuer: 'Autoral' },
    ] as const,
  },
  blog: {
    id: 'blog',
    title: 'Artigos',
    lead: 'Conteúdo técnico sobre arquitetura, observabilidade e boas práticas para sistemas reais.',
    items: [
      {
        slug: 'arquitetura-limpa-no-dia-a-dia',
        title: 'Arquitetura limpa no dia a dia',
        summary: 'Princípios práticos aplicados em um serviço de autenticação.',
        date: '2024-09-12',
      },
      {
        slug: 'observabilidade-com-actuator',
        title: 'Observabilidade com Spring Boot Actuator',
        summary: 'Métricas, health checks e Prometheus sem complexidade desnecessária.',
        date: '2024-06-28',
      },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    lead: 'Vamos transformar sua ideia em um backend confiável e pronto para crescer.',
    responseNote: 'Me envie contexto, escopo e prazo. Retorno com uma proposta técnica objetiva.',
    emailLabel: 'Enviar mensagem',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footerRights: 'Todos os direitos reservados.',
}

const en: Dictionary = {
  metaTitle: 'Leonardo Sousa | Backend & Full Stack',
  ownerRole: 'Backend & Full Stack Engineer',
  languageLabel: 'Language',
  nav: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Available for freelance and full-stack opportunities',
    title: 'I build secure backends across multiple languages and also deliver complete frontend implementations when needed.',
    stackLine: 'Multi-stack backend · React frontend · PostgreSQL · Docker · CI/CD · Observability',
    primaryCta: 'View projects',
    secondaryCta: 'Discuss your project',
    buildLog: ['// Latest pipeline', '$ docker compose up -d', '$ mvn -q test', '> 142 tests passed'],
    highlights: [
      '140+ automated tests in recent pipelines',
      'Domain-oriented modular architecture (DDD + SOLID)',
      'Full-stack delivery: backend, frontend, and CI/CD',
    ] as const,
  },
  about: {
    id: 'about',
    title: 'About',
    lead: 'Clean engineering focused on business impact and production stability.',
    body: 'I am a backend developer working across multiple languages with a strong focus on clean architecture and delivery quality. I also build frontend applications and can deliver end-to-end projects as a full-stack engineer.',
    pillars: [
      'APIs with clear contracts, versioning, and low coupling',
      'Security layers with authentication, permissions, and auditing',
      'Continuous delivery with testing, metrics, and observability',
    ] as const,
  },
  skills: {
    id: 'skills',
    title: 'Core skills',
    lead: 'Stack focused on resilient backend architecture, service integration, and reliable operations.',
    items: [
      'Java / Spring Boot',
      'Node.js / NestJS',
      'TypeScript / JavaScript',
      'REST / JPA / Security',
      'React / Vite',
      'Docker / Docker Compose',
      'PostgreSQL / H2',
      'Messaging (JMS/ActiveMQ)',
      'Observability (Actuator/Prometheus)',
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Featured projects',
    lead: 'Production-oriented systems focused on architecture, maintainability, and delivery.',
    featuredLabel: 'Featured case',
    githubLabel: 'See more on GitHub',
    codeLabel: 'Open repository',
    items: [
      {
        name: 'TD2 Builder',
        desc: 'Full platform for The Division 2 build planning with a NestJS API, React dashboard, access control, monitoring, and async XLSX import workflow.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'TanStack Query'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
      },
      {
        name: 'Modular Financial System',
        desc: 'Accounts, users, and transactions modules with Dockerized environment and CI workflow.',
        tags: ['Java', 'Spring', 'Docker'],
        href: site.github,
      },
      {
        name: 'BarberConnect',
        desc: 'Scheduling platform for barbershops with admin and customer roles.',
        tags: ['Spring', 'Security', 'JPA'],
        href: site.github,
      },
      {
        name: 'AFKStrategist',
        desc: 'App for hero comparison and strategy optimization.',
        tags: ['Node', 'React', 'MongoDB'],
        href: site.github,
      },
      {
        name: 'Auth Service',
        desc: 'Authentication service with JWT, role control, and security-first practices.',
        tags: ['Spring Security', 'JWT'],
        href: site.github,
      },
    ] as const,
  },
  certificates: {
    id: 'certificates',
    title: 'Certificates',
    lead: 'Continuous learning across modern backend engineering, architecture, and software delivery.',
    items: [
      { title: 'Spring Security', issuer: 'DIO' },
      { title: 'REST with Swagger', issuer: 'DIO' },
      { title: 'Java 21 Roadmap', issuer: 'Authorial' },
    ] as const,
  },
  blog: {
    id: 'blog',
    title: 'Articles',
    lead: 'Technical writing on architecture, observability, and practical backend workflows.',
    items: [
      {
        slug: 'clean-architecture-daily-work',
        title: 'Clean architecture in day-to-day work',
        summary: 'Practical principles applied in an authentication service.',
        date: '2024-09-12',
      },
      {
        slug: 'observability-with-actuator',
        title: 'Observability with Spring Boot Actuator',
        summary: 'Useful metrics, health checks, and Prometheus without overengineering.',
        date: '2024-06-28',
      },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    lead: 'Let us turn your idea into a reliable backend ready to scale.',
    responseNote: 'Share your context, scope, and timeline. I will reply with a clear technical approach.',
    emailLabel: 'Send message',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
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

    const url = new URL(window.location.href)
    if (locale === 'en') {
      url.searchParams.set('lang', 'en')
    } else {
      url.searchParams.delete('lang')
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [locale, t.metaTitle])

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
