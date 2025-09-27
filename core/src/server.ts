import express from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import cors from "cors";
import "./external-services/providers";
import { connectToMongo } from "./db/mongo";
import { getInstance } from "./config/app.config";

import router from "./routes/index";
import { ProviderRegistry } from "./external-services/providers/registry";

const app = express();
const PORT = process.env.PORT || 5000;
const envConfig = getInstance();

logger.info(`Environment: ${envConfig.getEnvState()}`);

connectToMongo();

// Middleware
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
    credentials: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api", router);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    logger.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(PORT, () => {
  try {
    logger.info(`Server is running on http://localhost:${PORT}`);
    const registry = ProviderRegistry.getInstance();
    const providers = registry.getAllProviders();
    logger.info(
      `Registered providers: ${providers.map((p) => p.name).join(", ")}`
    );
  } catch (error: any) {
    logger.error("Error during server startup:", error);
    process.exit(1);
  }
});
