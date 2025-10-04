// clients/JiraClient.ts
import axios, { AxiosInstance } from "axios";
import logger from "../../utils/logger";
import { getInstance } from "../../config/app.config";

export class JiraClient {
  private client: AxiosInstance;

  constructor() {
    const jiraEnv = getInstance().getJiraEnv();

    this.client = axios.create({
      baseURL: `https://${jiraEnv.jira_domain}/rest/api/3`,
      auth: { username: jiraEnv.jira_email, password: jiraEnv.jira_token },
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(
          `${jiraEnv.jira_email}:${jiraEnv.jira_token}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
    });
    logger.info("JiraClient initialized");
  }

  async getProjects() {
    try {
      const response = await this.client.get("/project/search");
      return response.data;
    } catch (error: any) {
      logger.error("Error in JiraClient getProjects:", error);
      throw error;
    }
  }

  async getIssues(jql: string, maxResults = 50, pageToken?: string | null) {
    try {
      const bodyData = {
        jql: jql,
        fields: [
          "summary",
          "status",
          "assignee",
          "reporter",
          "created",
          "updated",
          "resolutiondate"
        ],
        maxResults: maxResults,
        nextPageToken: pageToken,
      };
      const response = await this.client.post("/search/jql", bodyData);
      return response.data.issues;
    } catch (error: any) {
      logger.error("Error in JiraClient getIssues:", error);
      throw error;
    }
  }
}
