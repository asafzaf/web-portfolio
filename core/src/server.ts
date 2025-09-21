import express from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import cors from "cors";
import { connectToMongo } from "./db/mongo";
import { getInstance } from "./config/app.config";

import router from "./routes/index";

const app = express();
const PORT = process.env.PORT || 5000;

getInstance();
connectToMongo();

app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
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
