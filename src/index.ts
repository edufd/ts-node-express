// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/users";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server test");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});