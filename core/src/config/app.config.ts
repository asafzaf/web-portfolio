export interface mongoEnv {
  mongo_uri: string;
  mongo_db_name: string;
}

class envConfig {
  static envConfigInstance: envConfig;
  private envState: string = process.env.NODE_ENV || "development";
  private mongoEnv: mongoEnv;

  constructor() {
    this.mongoEnv = {
      mongo_uri: process.env.MONGO_URI || "mongodb://localhost:27017",
      mongo_db_name: process.env.MONGO_DB_NAME || "web_portfolio",
    };
  }

  getEnvState(): string {
    return this.envState;
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
