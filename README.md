# Portfolio Leonardo

Portfólio pessoal em React + TypeScript + Vite com deploy automático na Vercel.

## Recursos

- Conteúdo bilíngue (`pt-BR` e `en`) com troca de idioma no header.
- Persistência de idioma em `localStorage` e sincronização com `?lang=en`.
- Layout responsivo com seções modulares (home, sobre, skills, projetos, certificados, blog e contato).
- Integração com Vercel Analytics.

## Stack

- React 19
- TypeScript
- Vite 7
- CSS global customizado

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Estrutura relevante

- `src/core/i18n.tsx`: dicionário de idioma e provider global.
- `src/shared/ui/Header.tsx`: navegação + alternância de idioma.
- `src/modules/*`: seções do portfólio.
- `src/shared/styles/globals.css`: tema e componentes visuais.
- `vercel.json`: headers de segurança para deploy.

## Deploy

Com integração Git + Vercel, cada push na branch principal gera novo deploy automaticamente.
