import { IJiraService } from "../../services/Jira/interface";
import { JiraService } from "../../services/Jira/service";
import { Request, Response, NextFunction } from "express";

export class JiraController {
  private jiraService: IJiraService;

  constructor() {
    this.jiraService = new JiraService();
  }

  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("Fetching projects...");
      const projects = await this.jiraService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }

  async getProjectIssues(req: Request, res: Response, next: NextFunction) {
    try {
      const projectKey = req.params.key;
      const issues = await this.jiraService.getIssuesByProjectKey(projectKey);
      res.status(200).json(issues);
    } catch (error) {
      next(error);
    }
  }
}
