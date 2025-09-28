import api from "../utils/api";

export const jiraService = {
  getProjects: () => api.post("/jira/projects"),
  getProjectIssues: (projectKey: string) =>
    api.post(`/jira/issues/${projectKey}`),
};
