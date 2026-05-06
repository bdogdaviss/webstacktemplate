# TODO — Remaining work

- [x] Infra: `.env.example`, `docker-compose.yml`, `.gitignore`
- [x] `/frontend` — Vite + React + TypeScript
- [x] `/api` — Node + TypeScript (Express skeleton with `/health`, `/api/hello`)
- [x] DB layer — Prisma schema (`User` model) + seed script + npm scripts
- [x] CI workflow — per-workspace build + typecheck (GitHub Actions)
- [x] QUICKSTART updated with real, working commands
- [x] Wire frontend → API (fetch `/api/hello` from `App.tsx` via Vite proxy)
- [x] CI status badge in README
- [x] Dockerize `/api` + `/frontend` (multi-stage Dockerfiles, nginx proxies `/api` to api container)
- [ ] `docker-compose.override.yml` for in-container hot reload (optional; `npm run dev` already covers local hot reload)
- [x] ESLint configs per workspace + CI lint step (flat config; api uses typescript-eslint)
- [x] Vitest test suites in both workspaces + CI test step (api uses supertest against exported `createApp`)
- [ ] Prettier (formatter) — optional polish on top of ESLint
