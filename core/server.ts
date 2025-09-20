import express from "express";
import { connectToMongo } from "./src/db/mongo.ts";
import { getInstance } from "./src/config/app.config.ts";

import router from "./src/routes/index.ts";

const app = express();
const PORT = process.env.PORT || 5000;

getInstance();
connectToMongo();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
