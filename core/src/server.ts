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

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://asafzaf.github.io",
  "https://unslender-madeleine-sicklily.ngrok-free.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS not allowed"), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
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
