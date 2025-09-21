import fs from "fs";
import path from "path";

export function loadEnvFile(envFilePath: string): Record<string, string> {
  const envConfig: Record<string, string> = {};

  const absolutePath = path.resolve(__dirname, envFilePath);

  try {
    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    const parsed = JSON.parse(fileContent); // <-- parse JSON
    return parsed;
  } catch (error: any) {
    console.error(
      `Error loading env file at ${absolutePath}: ${error.message}`
    );
    throw error;
  }

  return envConfig;
}
