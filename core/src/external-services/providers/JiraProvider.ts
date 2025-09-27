// providers/JiraProvider.ts
import { ApiProvider } from "../decorators/api-provider.decorator";
import { IApiProvider } from "types/api-provider.types";
import { JiraClient } from "../clients/JiraClient";
import logger from "../../utils/logger";

export interface IJiraProvider extends IApiProvider {
  listProjects(): Promise<any>;
  listIssuesByProjectKey(projectKey: string): Promise<any>;
}

@ApiProvider({ name: "jira", autoRegister: true })
export class JiraProvider implements IJiraProvider {
  name = "jira";
  private client: JiraClient;
  constructor() {
    this.client = new JiraClient();
  }

  async isHealthy(): Promise<boolean> {
    try {
      await this.client.getProjects();
      return true;
    } catch (error) {
      return false;
    }
  }

  async listProjects() {
    logger.info("Fetching Jira projects...");
    return this.client.getProjects();
  }

  async listIssuesByProjectKey(projectKey: string) {
    const jql = `assignee = currentUser() AND project = ${projectKey} ORDER BY created DESC`;
    return this.client.getIssues(jql, 50);
  }
}
