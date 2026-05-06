# webstacktemplate

Reference web stack: React SPA → CDN → Load Balancer → Node.js API → Redis → PostgreSQL.

## Status

| Layer                                    | State                                         |
| ---------------------------------------- | --------------------------------------------- |
| Architecture diagram                     | ✅                                             |
| Infrastructure (Postgres + Redis)        | ✅ via `docker-compose.yml`                    |
| Frontend (Vite + React + TypeScript)     | ✅ build verified                              |
| API (Express + TypeScript)               | ✅ smoke-tested                                |
| DB layer (Prisma schema + seed)          | ✅ scaffolded; run `npm run db:migrate` to apply |
| CI workflow                              | ✅ per-workspace build + typecheck             |
| Dockerized app services + override compose | ⏳                                             |
| Lint + test suites                       | ⏳                                             |

## Docs

- [architecture.md](architecture.md) — system diagram and layer-by-layer breakdown
- [QUICKSTART.md](QUICKSTART.md) — local dev setup
- [TODO.md](TODO.md) — remaining work
