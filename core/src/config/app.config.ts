export interface mongoEnv {
  mongo_uri: string;
  mongo_db_name: string;
}

export interface jiraEnv {
  jira_domain: string;
  jira_token: string;
  jira_token_name: string;
}

class envConfig {
  static envConfigInstance: envConfig;
  private envState: string = process.env.NODE_ENV || "development";
  private mongoEnv: mongoEnv;
  private jiraEnv: jiraEnv;

  constructor() {
    this.mongoEnv = {
      mongo_uri: process.env.MONGO_URI || "mongodb://localhost:27017",
      mongo_db_name: process.env.MONGO_DB_NAME || "web_portfolio",
    };
    this.jiraEnv = {
      jira_domain: process.env.JIRA_DOMAIN || "",
      jira_token: process.env.JIRA_TOKEN || "",
      jira_token_name: process.env.JIRA_TOKEN_NAME || "",
    };
  }

  getEnvState(): string {
    return this.envState;
  }

  getMongoEnv(): mongoEnv {
    return this.mongoEnv;
  }

  getJiraEnv(): jiraEnv {
    return this.jiraEnv;
  }
}

export const getInstance = (): envConfig => {
  if (!envConfig.envConfigInstance) {
    envConfig.envConfigInstance = new envConfig();
  }
  return envConfig.envConfigInstance;
};
