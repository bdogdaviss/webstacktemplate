# Quickstart

Two ways to run the stack: **all-in-Docker** (closest to production) or **local dev** (faster iteration with hot reload).

## Option A — All-in-Docker

```bash
git clone https://github.com/bdogdaviss/webstacktemplate.git
cd webstacktemplate
docker compose up -d --build
# open http://localhost:5173 — frontend served by nginx, /api/* proxied to api container
curl http://localhost:5173/api/hello   # {"message":"Hello from the API"}
```

Run migrations once Postgres is healthy:

```bash
docker compose exec api sh -c 'echo "migrations not run from container yet; see local dev"'
# For now, run from host: cd api && DATABASE_URL=postgresql://postgres:password@localhost:5433/webstackdb npx prisma migrate deploy
```

## Option B — Local dev (hot reload)

```bash
cp .env.example .env
docker compose up -d postgres redis     # infra only
cd api
npm install
npm run db:migrate                      # creates tables (Prisma)
npm run db:seed                         # inserts demo@example.com
npm run dev                             # http://localhost:3000

# in a second terminal
cd frontend
npm install
npm run dev                             # http://localhost:5173 (Vite proxies /api)
```

## Ports

| Service  | Host port | Container port | Notes                                    |
| -------- | --------- | -------------- | ---------------------------------------- |
| frontend | 5173      | 80 (nginx)     | also Vite dev server in Option B         |
| api      | 3000      | 3000           |                                          |
| postgres | 5433      | 5432           | non-standard host port to avoid conflicts |
| redis    | 6380      | 6379           | non-standard host port to avoid conflicts |

---

## Still pending

- [ ] Dockerize API + frontend (Dockerfiles, `docker-compose.override.yml` for in-container hot reload)
- [ ] ESLint + Prettier configs and a `lint` script per workspace
- [ ] Test suite (Jest/Vitest) and CI test step
- [ ] Wire frontend → API call (e.g., `App.tsx` fetches `/api/hello`)

See [TODO.md](TODO.md) for the full checklist.
