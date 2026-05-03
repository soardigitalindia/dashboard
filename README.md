# TimeGap Music OS

API-first modular music distribution and publishing platform for India-focused operations.

## Monorepo Layout

- `apps/backend`: NestJS microservices backend (REST APIs, workflow, royalties, DDEX)
- `apps/dashboard`: Next.js role-based dashboard with i18n
- `packages/shared`: shared contracts/types
- `docs`: architecture and deployment notes

## Core Capabilities

- Release, track, publishing, royalty APIs
- DDEX ERN XML generation engine
- Workflow-based release lifecycle
- Metadata auto-fetch adapters
- Royalty calculation engine with India-specific optimizations
- Multi-language support (English, Hindi, Tamil)

## Quick Start

```bash
# backend
cd apps/backend
npm install
npm run start:dev

# dashboard
cd ../dashboard
npm install
npm run dev
```
