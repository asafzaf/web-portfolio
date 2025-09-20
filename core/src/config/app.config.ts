import { loadEnvFile } from "./fileLoader.config.js";

export interface mongoEnv {
  mongo_uri: string;
  mongo_db_name: string;
}

class envConfig {
  static envConfigInstance: envConfig;
  private mongoEnv: mongoEnv;

  constructor() {
    this.mongoEnv = loadEnvFile(
      "../../secrets/mongo_creds.json"
    ) as unknown as mongoEnv;
  }

  getMongoEnv(): mongoEnv {
    return this.mongoEnv;
  }
}

export const getInstance = (): envConfig => {
  if (!envConfig.envConfigInstance) {
    envConfig.envConfigInstance = new envConfig();
  }
  return envConfig.envConfigInstance;
};
