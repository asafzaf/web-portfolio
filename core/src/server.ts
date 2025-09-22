import express from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import cors from "cors";
import { connectToMongo } from "./db/mongo";
import { getInstance } from "./config/app.config";

import router from "./routes/index";

const app = express();
const PORT = process.env.PORT || 5000;
const envConfig = getInstance();

logger.info(`Environment: ${envConfig.getEnvState()}`);

connectToMongo();

app.use(morgan(envConfig.getEnvState() === "development" ? "dev" : "combined"));

app.use(
  cors({
    origin: process.env.ORIGIN || [
      "http://localhost:5173",
      "https://asafzaf.github.io",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api", router);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
