import { JiraProvider } from "../../providers/JiraProvider";

export class JiraController {
  private jiraProvider: JiraProvider;
  constructor() {
    this.jiraProvider = new JiraProvider();
  }

  async getProjects(req: any, res: any) {
    try {
      const projects = await this.jiraProvider.listProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve projects" });
    }
  }

  async getIssues(req: any, res: any) {
    try {
      const issues = await this.jiraProvider.listIssues();
      res.status(200).json(issues);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve issues" });
    }
  }
}
