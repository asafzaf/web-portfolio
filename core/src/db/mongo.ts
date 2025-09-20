import mongoose from "mongoose";
import { getInstance } from "../config/app.config.ts";

export async function connectToMongo(): Promise<void> {
  const { mongo_uri: uri, mongo_db_name: dbName } = getInstance().getMongoEnv();
  console.log("Connecting to MongoDB...");
  await mongoose.connect(uri, { dbName });
  console.log("Connected to MongoDB");
}

export async function closeMongoConnection(): Promise<void> {
  await mongoose.connection.close();
}
