# Quickstart

Real, working commands for local development.

## 1. Clone & configure env

```bash
git clone https://github.com/bdogdaviss/webstacktemplate.git
cd webstacktemplate
cp .env.example .env   # edit if defaults don't suit you
```

## 2. Start infra (PostgreSQL + Redis)

```bash
docker compose up -d
```

## 3. Install API + run migrations and seed

```bash
cd api
npm install
npm run db:migrate     # creates tables in Postgres (Prisma)
npm run db:seed        # inserts demo@example.com user
```

Then start the API in watch mode:

```bash
npm run dev            # http://localhost:3000  (try /health and /api/hello)
```

## 4. Install + start the frontend

```bash
cd ../frontend
npm install
npm run dev            # http://localhost:5173
```

## 5. Smoke test

```bash
curl http://localhost:3000/health
# {"status":"ok","uptime":...}
```

---

## Still pending

- [ ] Dockerize API + frontend (Dockerfiles, `docker-compose.override.yml` for in-container hot reload)
- [ ] ESLint + Prettier configs and a `lint` script per workspace
- [ ] Test suite (Jest/Vitest) and CI test step
- [ ] Wire frontend → API call (e.g., `App.tsx` fetches `/api/hello`)

See [TODO.md](TODO.md) for the full checklist.
