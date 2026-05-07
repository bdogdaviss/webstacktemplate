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

## portfolio/ (personal site, separate sub-app)

- [x] Vite + React + TS + Tailwind v4 scaffold
- [x] Multi-route: `/`, `/projects`, `/blog`, `/contact`
- [x] Dark grayscale theme, Inter (body/heading) + Playfair Display (Resume "signature")
- [x] CI job (lint + test + build)
- [x] Fill placeholders: name, tagline, bio, location (Baron Davis)
- [x] Real projects in `src/data/projects.ts` (7 projects: Aura, OmniStrive, SAP, CertSync, Friday, Wakeup, B-Dog Pressure Washing)
- [x] Real social links in `src/data/socials.ts` (GitHub, Email)
- [x] Real skills in `src/data/skills.ts` (from resume)
- [x] Removed unused `/blog` route (re-add when posts exist)
- [ ] Drop the actual `Baron Davis Resume 2026.pdf` into `portfolio/public/resume.pdf` (Resume link in nav currently 404s)
- [ ] Add project thumbnails to `portfolio/public/images/` and reference them in `projects.ts` (currently a gradient box placeholder)
- [ ] LinkedIn URL in `socials.ts` if you want it visible
- [ ] Working contact form (Resend / Formspree / Vercel form action) — currently links go to email + GitHub
- [ ] Vercel deploy (set Root Directory to `portfolio/` in project settings)
- [ ] Custom domain
