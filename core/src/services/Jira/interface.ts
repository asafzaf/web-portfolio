export interface IProject {
  id: string;
  key: string;
  name: string;
}

export interface IIssue {
  id: string;
  key: string;
  summary: string;
}

export interface IJiraService {
  getAllProjects(): Promise<IProject[]>;
  getIssuesByProjectKey(key: string): Promise<IIssue[]>;
}

export interface IJiraServiceFactory {
  getJiraService(): IJiraService;
}
