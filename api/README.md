# api

Minimal Express + TypeScript API for the webstacktemplate stack.

## Run

```bash
npm install
cp ../.env.example .env   # or set PORT in your shell
npm run dev               # http://localhost:3000
```

## Endpoints

| Method | Path         | Response                                |
| ------ | ------------ | --------------------------------------- |
| GET    | `/health`    | `{ status: "ok", uptime: <seconds> }`   |
| GET    | `/api/hello` | `{ message: "Hello from the API" }`     |

## Scripts

- `npm run dev` — watch mode via `tsx`
- `npm run build` — TypeScript compile to `dist/`
- `npm start` — run compiled output
- `npm run typecheck` — `tsc --noEmit`
