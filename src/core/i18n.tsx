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
    title: string
    stackLine: string
    primaryCta: string
    secondaryCta: string
    buildLog: string[]
  }
  about: {
    id: string
    title: string
    body: string
  }
  skills: {
    id: string
    title: string
    items: readonly string[]
  }
  projects: {
    id: string
    title: string
    githubLabel: string
    codeLabel: string
    items: readonly ProjectItem[]
  }
  certificates: {
    id: string
    title: string
    items: readonly CertificateItem[]
  }
  blog: {
    id: string
    title: string
    items: readonly PostItem[]
  }
  contact: {
    id: string
    title: string
    lead: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  footerRights: string
}

const ptBr: Dictionary = {
  metaTitle: 'Leonardo Sousa | Portfólio Backend Java',
  ownerRole: 'Backend Java Engineer',
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
    title: 'Backend Java, arquitetura limpa e soluções que escalam sem virar dívida técnica.',
    stackLine: 'Spring Boot · Java 21 · Docker · PostgreSQL · CI/CD · AWS (iniciante)',
    primaryCta: 'Ver projetos',
    secondaryCta: 'Entrar em contato',
    buildLog: ['// Pipeline recente', '$ docker compose up -d', '$ mvn -q test', '> 142 testes OK'],
  },
  about: {
    id: 'about',
    title: 'Sobre',
    body: 'Desenvolvedor backend focado em Java e boas práticas (SOLID, TDD, DDD). Trabalho com APIs modulares, observabilidade, testes e pipelines de entrega contínua para manter evolução com previsibilidade.',
  },
  skills: {
    id: 'skills',
    title: 'Especialidades',
    items: [
      'Java 21 / Spring Boot',
      'REST / JPA / Security',
      'Docker / Docker Compose',
      'PostgreSQL / H2',
      'Mensageria (JMS/ActiveMQ)',
      'Observabilidade (Actuator/Prometheus)',
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Projetos em destaque',
    githubLabel: 'Ver GitHub completo',
    codeLabel: 'Ver código',
    items: [
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
    items: [
      { title: 'Spring Security', issuer: 'DIO' },
      { title: 'REST com Swagger', issuer: 'DIO' },
      { title: 'Java 21 Roadmap', issuer: 'Autoral' },
    ] as const,
  },
  blog: {
    id: 'blog',
    title: 'Artigos',
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
    lead: 'Aberto para freelas, propostas de produto e colaborações técnicas.',
    emailLabel: 'Enviar e-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footerRights: 'Todos os direitos reservados.',
}

const en: Dictionary = {
  metaTitle: 'Leonardo Sousa | Java Backend Portfolio',
  ownerRole: 'Backend Java Engineer',
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
    title: 'Java backend, clean architecture, and scalable solutions without technical debt.',
    stackLine: 'Spring Boot · Java 21 · Docker · PostgreSQL · CI/CD · AWS (beginner)',
    primaryCta: 'View projects',
    secondaryCta: 'Get in touch',
    buildLog: ['// Latest pipeline', '$ docker compose up -d', '$ mvn -q test', '> 142 tests passed'],
  },
  about: {
    id: 'about',
    title: 'About',
    body: 'Backend developer focused on Java and engineering best practices (SOLID, TDD, DDD). I build modular APIs with observability, testing, and CI/CD pipelines to keep delivery stable and predictable.',
  },
  skills: {
    id: 'skills',
    title: 'Core skills',
    items: [
      'Java 21 / Spring Boot',
      'REST / JPA / Security',
      'Docker / Docker Compose',
      'PostgreSQL / H2',
      'Messaging (JMS/ActiveMQ)',
      'Observability (Actuator/Prometheus)',
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Featured projects',
    githubLabel: 'See full GitHub',
    codeLabel: 'View code',
    items: [
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
    items: [
      { title: 'Spring Security', issuer: 'DIO' },
      { title: 'REST with Swagger', issuer: 'DIO' },
      { title: 'Java 21 Roadmap', issuer: 'Authorial' },
    ] as const,
  },
  blog: {
    id: 'blog',
    title: 'Articles',
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
    lead: 'Open to freelance work, product opportunities, and technical collaborations.',
    emailLabel: 'Send email',
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
