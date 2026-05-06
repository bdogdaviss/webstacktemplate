import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the API" });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
