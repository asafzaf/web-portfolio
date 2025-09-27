import { ProviderRegistry } from "../../external-services/providers/registry";
import { JiraProvider } from "../../external-services/providers/JiraProvider";
import { IJiraService } from "./interface";

export class JiraService implements IJiraService {
  private jiraProvider: JiraProvider;
  constructor() {
    const registry = ProviderRegistry.getInstance();
    this.jiraProvider = registry.getProvider<JiraProvider>("jira");
  }

  async getAllProjects() {
    try {
      const projects = await this.jiraProvider.listProjects();
      return projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  async getIssuesByProjectKey(key: string) {
    try {
      const issues = await this.jiraProvider.listIssuesByProjectKey(key);
      return issues;
    } catch (error) {
      console.error("Error fetching issues:", error);
      throw error;
    }
  }
}
