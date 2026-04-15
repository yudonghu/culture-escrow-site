# Culture Escrow Portal

Culture Escrow Portal is the official website and internal tools portal for Culture Escrow Inc.

## Overview

This project serves two roles:

- **Public website**: Home, About, Services, Team, Contact — openly accessible, multilingual (EN / 简中 / 繁中)
- **Internal Portal**: Employee login + unified tool entry (`/daily-tools`) — login required

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Auth**: NextAuth v5 (Credentials Provider)
- **Database**: PostgreSQL
- **Deployment**: AWS EC2 + Caddy + systemd + GitHub Actions self-hosted runner

## Local Development

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Install and run:

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:3000`

## Environment Variables

See `.env.example` for required variables.

## Docs

See the [`docs/`](./docs/) directory for architecture, routing, auth, deployment, and roadmap documentation.
