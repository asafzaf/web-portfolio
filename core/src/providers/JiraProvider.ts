// providers/JiraProvider.ts
import { JiraClient } from "../clients/JiraClient";

export class JiraProvider {
  private client: JiraClient;
  constructor() {
    this.client = new JiraClient();
  }

  async listProjects() {
    return this.client.getProjects();
  }

  async listIssues() {
    const jql = "assignee = currentUser() ORDER BY created DESC";
    return this.client.getIssues(jql, 50);
  }
}
