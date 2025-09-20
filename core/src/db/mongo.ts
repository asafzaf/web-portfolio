import mongoose from "mongoose";
import { getInstance } from "../config/app.config.ts";
import logger from "../utils/logger.ts";

export async function connectToMongo(): Promise<void> {
  const { mongo_uri: uri, mongo_db_name: dbName } = getInstance().getMongoEnv();
  logger.info("Connecting to MongoDB...");
  await mongoose.connect(uri, { dbName });
  logger.info("Connected to MongoDB");
}

export async function closeMongoConnection(): Promise<void> {
  await mongoose.connection.close();
}
