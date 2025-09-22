// clients/JiraClient.ts
import axios, { AxiosInstance } from "axios";
import logger from "../utils/logger";
import { getInstance } from "../config/app.config";

export class JiraClient {
  private client: AxiosInstance;

  constructor() {
    const jiraEnv = getInstance().getJiraEnv();

    this.client = axios.create({
      baseURL: `https://${jiraEnv.jira_domain}/rest/api/3`,
      auth: { username: jiraEnv.jira_token_name, password: jiraEnv.jira_token },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    logger.info("JiraClient initialized");
  }

  async getProjects() {
    const response = await this.client.get("/project");
    return response.data;
  }

  async getIssues(jql: string, maxResults = 50) {
    const response = await this.client.get("/search", {
      params: { jql, maxResults },
    });
    return response.data.issues;
  }
}
