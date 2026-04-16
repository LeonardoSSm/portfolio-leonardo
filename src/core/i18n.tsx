/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { site } from './config/site'

export type Locale = 'pt-BR' | 'en'

type NavItem = { href: string; label: string }
type MetricItem = { value: string; label: string }
type TextItem = { title: string; desc: string }
type ProjectItem = {
  name: string
  type: string
  context: string
  problem: string
  role: string
  impact: string
  highlights: string[]
  tags: string[]
  href: string
  ctaLabel: string
  confidentialityLabel?: string
  confidentialityNote?: string
}
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
    stackLine: string
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
    confidentialityNote: string
    featuredLabel: string
    githubLabel: string
    contextLabel: string
    problemLabel: string
    roleLabel: string
    impactLabel: string
    highlightsLabel: string
    confidentialityLabel: string
    detailsLabel: string
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

const confidentialMailHref = (project: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Case: ${project}`)}`

const ptBr: Dictionary = {
  metaTitle: 'Leonardo Sousa | Full Stack Developer',
  metaDescription:
    'Portfólio de Leonardo Sousa, desenvolvedor full stack com forte atuação em backend, arquitetura, integrações, automação e sistemas orientados a regras de negócio.',
  ownerRole: 'Full Stack Developer | Backend, arquitetura e operação',
  languageLabel: 'Idioma',
  nav: [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#solutions', label: 'Especialidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#resources', label: 'Estudos' },
    { href: '#contact', label: 'Contato' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Full stack com backend forte',
    title: 'Sistemas full stack com backend forte, integrações confiáveis e operação estável.',
    subtitle:
      'Desenvolvo web, mobile e automações para fluxos com regras de negócio, integrações e produção real.',
    stackLine: 'React, Next.js, Node.js, NestJS, Java, Spring Boot, PostgreSQL, MySQL, Redis e Docker.',
    support:
      'Uno arquitetura, contato com usuários-chave e evolução contínua para manter sistemas úteis depois do deploy.',
    primaryCta: 'Ver projetos',
    githubCta: 'Ver GitHub',
    contactCta: 'Falar comigo',
    profileAlt: 'Foto profissional de Leonardo Sousa',
    metrics: [
      { value: 'Estabilidade', label: 'backend forte com foco em operação e manutenção' },
      { value: 'Raiz do problema', label: 'correção no código e na arquitetura, não só no banco' },
      { value: 'Contexto real', label: 'proximidade com usuários, regras e fluxos complexos' },
      { value: 'Entrega completa', label: 'web, mobile, bots, integrações e automações' },
    ] as const,
  },
  about: {
    id: 'about',
    title: 'Sobre mim',
    lead: 'Engenharia prática para sistemas que precisam funcionar em operação real.',
    paragraphs: [
      'Sou desenvolvedor Full Stack com foco em backend, arquitetura e evolução de aplicações em produção. Trabalho com web, mobile, integrações, automações e regras de negócio complexas.',
      'Atuo perto de usuários-chave para entender falhas, propor melhorias e corrigir a causa no código e na arquitetura, não apenas o sintoma.',
    ] as const,
    proofPoints: [
      'Controle operacional, formulários, KPIs, bots e revezamento.',
      'Necessidade operacional traduzida em fluxos e validações.',
      'Investigação de causa, não só do sintoma aparente.',
      'Código, arquitetura, usuário e negócio na mesma conversa.',
    ] as const,
  },
  solutions: {
    id: 'solutions',
    title: 'O que eu resolvo',
    lead: 'Regras, integrações e operação saindo do improviso para software confiável.',
    items: [
      {
        title: 'Backend e arquitetura',
        desc: 'APIs, autenticação, dados, integrações e estrutura com foco em manutenção.',
      },
      {
        title: 'Automação e processos',
        desc: 'Formulários, notificações, bots e centralização de fluxos operacionais.',
      },
      {
        title: 'Regras de negócio complexas',
        desc: 'Validações, restrições e decisões alinhadas ao contexto real de uso.',
      },
      {
        title: 'Observabilidade e evolução',
        desc: 'Monitoramento, diagnóstico e evolução de sistemas em produção.',
      },
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Projetos em destaque',
    lead: 'Cases construídos em contextos reais de operação, processos, regras de negócio e evolução contínua.',
    confidentialityNote:
      'Alguns projetos apresentados aqui foram desenvolvidos em contexto corporativo e, por isso, não possuem código-fonte público. Nestes casos, apresento o contexto, os desafios, meu papel e os resultados de forma resumida, preservando informações sensíveis.',
    featuredLabel: 'Case em destaque',
    githubLabel: 'Ver projetos públicos no GitHub',
    contextLabel: 'Contexto',
    problemLabel: 'Problema',
    roleLabel: 'Meu papel',
    impactLabel: 'Impacto',
    highlightsLabel: 'Destaques técnicos',
    confidentialityLabel: 'Nota de confidencialidade',
    detailsLabel: 'Ver detalhes do case',
    secondaryTitle: 'Projetos públicos e estudos',
    secondaryLead: 'Projetos com caráter autoral ou de estudo, separados dos cases corporativos.',
    items: [
      {
        name: 'Controle de Descontos e Romaneios',
        type: 'Sistema interno voltado ao controle operacional de pedidos, descontos e romaneios.',
        context:
          'Sistema interno utilizado para apoiar o controle operacional de pedidos, descontos e romaneios dentro de um fluxo com dependência de estabilidade e consistência de regras.',
        problem:
          'O sistema exigia acompanhamento constante de falhas, análise de inconsistências operacionais e evolução de regras de negócio para reduzir retrabalho e melhorar a confiabilidade dos fluxos em produção.',
        role:
          'Atuei na sustentação e evolução da solução, corrigindo falhas na raiz, refinando regras de negócio, validando melhorias com usuários-chave e propondo ajustes com foco em estabilidade operacional.',
        impact:
          'Maior confiabilidade do fluxo operacional, melhor clareza na identificação de problemas e evolução contínua do sistema com foco em reduzir correções paliativas.',
        highlights: [
          'backend orientado a regras de negócio',
          'diagnóstico de falhas em produção',
          'análise de inconsistências operacionais',
          'melhoria contínua de fluxo',
          'proximidade com usuários para validação',
        ],
        tags: ['Backend', 'Operação', 'Regras de negócio', 'Produção'],
        href: confidentialMailHref('Controle de Descontos e Romaneios'),
        ctaLabel: 'Ver case',
        confidentialityLabel: 'Projeto corporativo confidencial',
        confidentialityNote:
          'Por se tratar de um projeto corporativo, o código-fonte e detalhes internos não são públicos.',
      },
      {
        name: 'Sistema de Revezamento com Regras de Negócio',
        type: 'Sistema para organizar funcionários e atividades com validações específicas de operação.',
        context:
          'Sistema criado para organizar a distribuição de funcionários e atividades considerando restrições e critérios específicos do ambiente operacional.',
        problem:
          'A alocação exigia obedecer regras de negócio sensíveis, como laudos, sexo, carga da atividade e não repetição de tarefas pesadas, reduzindo improviso e erro operacional.',
        role:
          'Atuei na modelagem e implementação das regras, estruturação da lógica de distribuição, evolução do sistema e adequação da solução ao contexto real de uso.',
        impact:
          'Maior previsibilidade no processo de alocação, melhor aderência às restrições operacionais e redução do risco de decisões inconsistentes no fluxo.',
        highlights: [
          'lógica de negócio orientada a restrições',
          'validações operacionais complexas',
          'organização de distribuição de atividades',
          'aderência a contexto real',
          'manutenção evolutiva',
        ],
        tags: ['Validações', 'Fluxos', 'Restrições', 'Operação'],
        href: confidentialMailHref('Sistema de Revezamento com Regras de Negócio'),
        ctaLabel: 'Ver case',
        confidentialityLabel: 'Projeto corporativo confidencial',
        confidentialityNote:
          'Por se tratar de um projeto corporativo, o código-fonte e detalhes internos não são públicos.',
      },
      {
        name: 'Plataforma de Formulários e Centralização',
        type: 'Solução para criação, organização e centralização de formulários internos.',
        context:
          'Plataforma voltada à centralização de formulários e organização de fluxos de coleta de informação, buscando mais controle, padronização e escalabilidade de uso.',
        problem:
          'A necessidade era sair de uma lógica dispersa e pouco estruturada para uma solução mais consistente, capaz de sustentar crescimento, reutilização e futuras automações.',
        role:
          'Atuei na estruturação da solução, evolução do produto, organização de fluxos e desenho de uma base preparada para expansão funcional e integrações futuras.',
        impact:
          'Maior organização do fluxo de formulários, melhor padronização da informação e base mais sólida para crescimento e automações posteriores.',
        highlights: [
          'arquitetura modular',
          'centralização de processos',
          'estruturação orientada a produto',
          'base para automação',
          'organização escalável da informação',
        ],
        tags: ['Formulários', 'Modularidade', 'Automação', 'Produto'],
        href: confidentialMailHref('Plataforma de Formulários e Centralização'),
        ctaLabel: 'Ver case',
        confidentialityLabel: 'Projeto corporativo confidencial',
        confidentialityNote:
          'Por se tratar de um projeto corporativo, o código-fonte e detalhes internos não são públicos.',
      },
      {
        name: 'Bot de WhatsApp para Notificações',
        type: 'Automação para envio de notificações e interação com usuários via WhatsApp.',
        context:
          'Solução de automação voltada ao envio de notificações e interação com usuários por meio do WhatsApp, integrada a eventos e rotinas internas do sistema.',
        problem:
          'Processos de comunicação dependiam de ações manuais ou de menor fluidez, gerando atrito operacional e menor agilidade no contato com usuários.',
        role:
          'Atuei na concepção e evolução da solução, conectando notificações automatizadas ao fluxo do sistema e estruturando a comunicação como parte do processo operacional.',
        impact:
          'Comunicação mais fluida, redução de etapas manuais e maior eficiência na interação com usuários dentro do fluxo operacional.',
        highlights: [
          'automação de comunicação',
          'integração com fluxos internos',
          'melhoria de experiência do usuário',
          'redução de atrito operacional',
          'visão de processo aplicada ao software',
        ],
        tags: ['WhatsApp', 'Integração', 'Automação', 'Notificações'],
        href: confidentialMailHref('Bot de WhatsApp para Notificações'),
        ctaLabel: 'Ver case',
        confidentialityLabel: 'Projeto corporativo confidencial',
        confidentialityNote:
          'Por se tratar de um projeto corporativo, o código-fonte e detalhes internos não são públicos.',
      },
    ] as const,
    secondaryItems: [
      {
        name: 'Sistema Hospitalar com Apoio de IA',
        type: 'Projeto de estudo para fluxo hospitalar com apoio de análise por IA.',
        context:
          'Estudo com recepção, classificação de risco, atendimento médico, registro de medicações, orientações e histórico clínico persistente.',
        problem:
          'Organizar um domínio rico e sensível em um fluxo claro, mantendo a IA como apoio à análise, não como decisão final.',
        role:
          'Modelagem do fluxo, estruturação do histórico clínico e desenho do uso de IA como suporte para correlação de sintomas recorrentes.',
        impact:
          'Exercício sólido de domínio complexo, persistência de histórico e apoio inteligente à análise clínica.',
        highlights: ['domínio rico', 'fluxo completo de atendimento', 'histórico estruturado', 'IA como apoio à análise'],
        tags: ['Saúde', 'IA', 'Fluxo clínico'],
        href: site.github,
        ctaLabel: 'Detalhes do estudo',
      },
      {
        name: 'Gerenciador de Builds e Equipamentos para Jogos',
        type: 'Produto autoral para criação e gerenciamento de builds e equipamentos.',
        context:
          'Ferramenta para organizar dados, configurações e otimização de builds, com foco em usabilidade e experiência do usuário.',
        problem:
          'Dar estrutura a dados de jogo que costumam ficar espalhados, facilitando comparação, organização e evolução das configurações.',
        role:
          'Desenvolvimento full stack, estruturação de dados, API, painel e fluxo de gerenciamento de configurações.',
        impact:
          'Produto mais organizado, com base técnica clara e foco em uso recorrente.',
        highlights: ['estruturação de dados', 'gerenciamento de configurações', 'foco em usabilidade', 'produto digital'],
        tags: ['React', 'NestJS', 'Dados'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
        ctaLabel: 'Abrir repositório',
      },
    ] as const,
  },
  work: {
    id: 'work',
    title: 'Como eu atuo na prática',
    lead: 'Trabalho perto do problema, do usuário e da operação para transformar necessidade real em software sustentável.',
    text: 'Minha atuação vai além de implementar telas ou endpoints. Eu conecto levantamento, análise, arquitetura, entrega e evolução para que a solução continue fazendo sentido depois do primeiro deploy.',
    items: [
      'Evolução de sistemas já em produção.',
      'Desenvolvimento de soluções do zero.',
      'Levantamento de requisitos com usuários-chave.',
      'Correção de problemas na raiz, não apenas no banco.',
      'Criação de novas features com foco em melhoria real.',
      'Documentação técnica e registro estruturado de tarefas.',
      'Trabalho colaborativo com equipe.',
      'Análise contínua do que o sistema pode suportar e evoluir.',
    ] as const,
  },
  skills: {
    id: 'skills',
    title: 'Stack principal',
    lead: 'Tecnologias aparecem como suporte para resolver problemas reais, não como uma vitrine de logos.',
    groups: [
      { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'TypeScript'] },
      { title: 'Frontend', items: ['React.js', 'Next.js'] },
      { title: 'Mobile', items: ['React Native', 'Android'] },
      { title: 'Dados e Infra', items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker'] },
      { title: 'Observabilidade', items: ['Grafana', 'métricas', 'logs', 'monitoramento'] },
      { title: 'Engenharia', items: ['System design', 'documentação técnica', 'análise com apoio de IA', 'estruturação de entrega'] },
    ] as const,
  },
  resources: {
    id: 'resources',
    title: 'Estudos e referências técnicas',
    lead: 'Temas de aprofundamento técnico que sustentam minha prática em backend, arquitetura e operação.',
    groups: [
      { title: 'Escrita técnica', items: ['Arquitetura limpa no dia a dia', 'Observabilidade com Spring Boot Actuator'] },
      { title: 'Certificações', items: ['Spring Security', 'REST com Swagger'] },
      { title: 'Trilhas de estudo', items: ['Java 21 Roadmap', 'arquitetura, backend e system design'] },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    lead: 'Quer conversar sobre backend, integrações, observabilidade ou evolução de sistemas?',
    responseNote:
      'Me envie o contexto, escopo e objetivo. Respondo com uma visão técnica clara para o próximo passo, seja para construir, estabilizar ou evoluir uma solução.',
    primaryCta: 'Entrar em contato',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footerText:
    'Leonardo Sousa - Desenvolvedor Full Stack com forte atuação em backend, arquitetura e sistemas orientados a regras de negócio.',
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
    { href: '#resources', label: 'Studies' },
    { href: '#contact', label: 'Contact' },
  ] as const,
  home: {
    id: 'home',
    badge: 'Full stack with strong backend delivery',
    title: 'Full stack systems with strong backend, reliable integrations and stable operations.',
    subtitle:
      'I build web, mobile and automation solutions for flows with business rules, integrations and real production use.',
    stackLine: 'React, Next.js, Node.js, NestJS, Java, Spring Boot, PostgreSQL, MySQL, Redis and Docker.',
    support:
      'I connect architecture, key-user context and continuous evolution to keep systems useful after deployment.',
    primaryCta: 'View projects',
    githubCta: 'View GitHub',
    contactCta: 'Contact me',
    profileAlt: 'Professional photo of Leonardo Sousa',
    metrics: [
      { value: 'Stability', label: 'strong backend work focused on operations and maintenance' },
      { value: 'Root cause', label: 'fixes in code and architecture, not database-only patches' },
      { value: 'Real context', label: 'close work with users, rules and complex flows' },
      { value: 'Full delivery', label: 'web, mobile, bots, integrations and automation' },
    ] as const,
  },
  about: {
    id: 'about',
    title: 'About me',
    lead: 'Practical engineering for systems that need to work in real operations.',
    paragraphs: [
      'I am a Full Stack Developer focused on backend, architecture and production application evolution. I work with web, mobile, integrations, automation and complex business rules.',
      'I stay close to key users to understand failures, propose improvements and fix root causes in code and architecture, not just symptoms.',
    ] as const,
    proofPoints: [
      'Operational control, forms, KPIs, bots and rotation systems.',
      'Operational needs translated into flows and validations.',
      'Root-cause investigation, not symptom-only fixes.',
      'Code, architecture, users and business in the same conversation.',
    ] as const,
  },
  solutions: {
    id: 'solutions',
    title: 'What I solve',
    lead: 'Rules, integrations and operations moving from improvisation to reliable software.',
    items: [
      {
        title: 'Backend and architecture',
        desc: 'APIs, authentication, data, integrations and structure focused on maintenance.',
      },
      {
        title: 'Automation and processes',
        desc: 'Forms, notifications, bots and centralization of operational flows.',
      },
      {
        title: 'Complex business rules',
        desc: 'Validations, restrictions and decisions aligned with real usage context.',
      },
      {
        title: 'Observability and evolution',
        desc: 'Monitoring, diagnosis and evolution of systems already in production.',
      },
    ] as const,
  },
  projects: {
    id: 'projects',
    title: 'Featured projects',
    lead: 'Cases built in real contexts involving operations, processes, business rules and continuous evolution.',
    confidentialityNote:
      'Some projects shown here were developed in corporate contexts and therefore do not have public source code. In these cases, I present context, challenges, my role and results in summary form while preserving sensitive information.',
    featuredLabel: 'Featured case',
    githubLabel: 'See public projects on GitHub',
    contextLabel: 'Context',
    problemLabel: 'Problem',
    roleLabel: 'My role',
    impactLabel: 'Impact',
    highlightsLabel: 'Technical highlights',
    confidentialityLabel: 'Confidentiality note',
    detailsLabel: 'View case details',
    secondaryTitle: 'Public projects and studies',
    secondaryLead: 'Personal and study projects separated from corporate cases.',
    items: [
      {
        name: 'Discount and Delivery Manifest Control',
        type: 'Internal system for operational control of orders, discounts and delivery manifests.',
        context:
          'Internal system used to support operational control of orders, discounts and delivery manifests in a flow that depends on stability and consistent rules.',
        problem:
          'The system required constant failure tracking, operational inconsistency analysis and business-rule evolution to reduce rework and improve production-flow reliability.',
        role:
          'I worked on support and evolution of the solution, fixing root causes, refining business rules, validating improvements with key users and proposing changes focused on operational stability.',
        impact:
          'Higher reliability in the operational flow, clearer problem identification and continuous system evolution focused on reducing temporary fixes.',
        highlights: [
          'business-rule-driven backend',
          'production failure diagnosis',
          'operational inconsistency analysis',
          'continuous flow improvement',
          'close validation with users',
        ],
        tags: ['Backend', 'Operations', 'Business rules', 'Production'],
        href: confidentialMailHref('Discount and Delivery Manifest Control'),
        ctaLabel: 'View case',
        confidentialityLabel: 'Confidential corporate project',
        confidentialityNote:
          'Because this is a corporate project, the source code and internal details are not public.',
      },
      {
        name: 'Rotation System with Business Rules',
        type: 'System for organizing employees and activities with specific operational validations.',
        context:
          'System created to organize employee and activity distribution while considering specific restrictions and criteria from the operational environment.',
        problem:
          'Allocation needed to follow sensitive business rules such as medical reports, gender, activity load and avoiding repeated heavy tasks, reducing improvisation and operational errors.',
        role:
          'I worked on rule modeling and implementation, distribution logic structure, system evolution and adaptation of the solution to the real usage context.',
        impact:
          'More predictable allocation, better adherence to operational restrictions and lower risk of inconsistent decisions in the flow.',
        highlights: [
          'constraint-driven business logic',
          'complex operational validations',
          'activity distribution organization',
          'fit with real-world context',
          'evolutionary maintenance',
        ],
        tags: ['Validations', 'Flows', 'Constraints', 'Operations'],
        href: confidentialMailHref('Rotation System with Business Rules'),
        ctaLabel: 'View case',
        confidentialityLabel: 'Confidential corporate project',
        confidentialityNote:
          'Because this is a corporate project, the source code and internal details are not public.',
      },
      {
        name: 'Forms and Centralization Platform',
        type: 'Solution for creating, organizing and centralizing internal forms.',
        context:
          'Platform focused on centralizing forms and organizing information collection flows, seeking more control, standardization and scalability of use.',
        problem:
          'The need was to move away from scattered and weakly structured processes toward a more consistent solution able to support growth, reuse and future automation.',
        role:
          'I worked on solution structure, product evolution, flow organization and a foundation prepared for functional expansion and future integrations.',
        impact:
          'Better organization of form flows, improved information standardization and a stronger foundation for future growth and automation.',
        highlights: [
          'modular architecture',
          'process centralization',
          'product-oriented structure',
          'automation-ready foundation',
          'scalable information organization',
        ],
        tags: ['Forms', 'Modularity', 'Automation', 'Product'],
        href: confidentialMailHref('Forms and Centralization Platform'),
        ctaLabel: 'View case',
        confidentialityLabel: 'Confidential corporate project',
        confidentialityNote:
          'Because this is a corporate project, the source code and internal details are not public.',
      },
      {
        name: 'WhatsApp Notification Bot',
        type: 'Automation for notifications and user interaction through WhatsApp.',
        context:
          'Automation solution for sending notifications and interacting with users through WhatsApp, integrated with internal system events and routines.',
        problem:
          'Communication processes depended on manual actions or less fluid flows, creating operational friction and slower contact with users.',
        role:
          'I worked on conception and evolution of the solution, connecting automated notifications to the system flow and structuring communication as part of the operational process.',
        impact:
          'More fluid communication, fewer manual steps and greater efficiency in user interaction within the operational flow.',
        highlights: [
          'communication automation',
          'internal flow integration',
          'user experience improvement',
          'lower operational friction',
          'process-oriented software view',
        ],
        tags: ['WhatsApp', 'Integration', 'Automation', 'Notifications'],
        href: confidentialMailHref('WhatsApp Notification Bot'),
        ctaLabel: 'View case',
        confidentialityLabel: 'Confidential corporate project',
        confidentialityNote:
          'Because this is a corporate project, the source code and internal details are not public.',
      },
    ] as const,
    secondaryItems: [
      {
        name: 'Healthcare System with AI Support',
        type: 'Study project for a healthcare flow with AI-assisted analysis.',
        context:
          'Study covering reception, risk classification, medical care, medication records, guidance and persistent clinical history.',
        problem:
          'Organize a rich and sensitive domain into a clear flow while keeping AI as analysis support, not as final decision-making.',
        role:
          'Flow modeling, clinical history structure and design of AI usage as support for recurring symptom correlation.',
        impact:
          'Solid domain exercise involving complex flow, persistent history and intelligent support for clinical analysis.',
        highlights: ['rich domain', 'complete care flow', 'structured clinical history', 'AI-assisted analysis'],
        tags: ['Healthcare', 'AI', 'Clinical flow'],
        href: site.github,
        ctaLabel: 'Study details',
      },
      {
        name: 'Game Build and Equipment Manager',
        type: 'Personal product for creating and managing builds and equipment.',
        context:
          'Tool for organizing data, configurations and build optimization, focused on usability and user experience.',
        problem:
          'Give structure to game data that is usually scattered, making comparison, organization and configuration evolution easier.',
        role:
          'Full stack development, data structure, API, dashboard and configuration management flow.',
        impact:
          'More organized product, clear technical foundation and focus on repeated use.',
        highlights: ['data structure', 'configuration management', 'usability focus', 'digital product'],
        tags: ['React', 'NestJS', 'Data'],
        href: 'https://github.com/LeonardoSSm/td2-builder',
        ctaLabel: 'Open repository',
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
    title: 'Studies and technical references',
    lead: 'Technical themes that support my practice in backend, architecture and operations.',
    groups: [
      { title: 'Technical writing', items: ['Clean architecture in day-to-day work', 'Observability with Spring Boot Actuator'] },
      { title: 'Certifications', items: ['Spring Security', 'REST with Swagger'] },
      { title: 'Study tracks', items: ['Java 21 Roadmap', 'architecture, backend and system design'] },
    ] as const,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    lead: 'Want to talk about backend, integrations, observability or system evolution?',
    responseNote:
      'Share the context, scope and goal. I will reply with a clear technical view for the next step, whether the need is to build, stabilize or evolve a solution.',
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
