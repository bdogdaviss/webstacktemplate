# Quickstart

> ⚠️ **Scaffolding pending** — the application code (frontend, API, migrations) is not yet generated. The infra commands below (`docker compose up`, copying `.env.example`) work today. The `npm` commands will work once the full scaffold lands.

```bash
# 1. Clone & install
git clone https://github.com/bdogdaviss/webstacktemplate.git
cd webstacktemplate
cp .env.example .env               # fill in local values

# 2. Start infra (PostgreSQL + Redis)
docker compose up -d

# 3. Once app scaffold exists:
npm ci
npm run db:migrate                 # apply migrations
npm run dev                        # React SPA on http://localhost:5173
npm start                          # API on http://localhost:3000
```

## Required environment variables

| Variable       | Purpose                                       |
| -------------- | --------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string                  |
| `REDIS_URL`    | Redis connection URL                          |
| `JWT_SECRET`   | Secret for signing JWTs (change in prod)      |
| `PORT`         | Port the API listens on                       |
| `NODE_ENV`     | `development` or `production`                 |

Never commit a real `.env` — it's gitignored.

## Roadmap

- [x] Architecture diagram (`architecture.md`)
- [x] Infra scaffold (`docker-compose.yml`, `.env.example`)
- [x] Frontend scaffold (Vite + React + TypeScript) — `cd frontend && npm install && npm run dev`
- [x] API scaffold (Node + Express + TypeScript) — `cd api && npm install && npm run dev`
- [ ] Database migrations & seed scripts
- [ ] CI / lint / typecheck
