import { useMutation } from "@tanstack/react-query";
import { jiraService } from "../services/jiraService";

export const useJira = () => {
  const useGetProjects = useMutation({
    mutationFn: () => jiraService.getProjects(),
  });

  const useGetProjectIssues = useMutation({
    mutationFn: (projectKey: string) =>
      jiraService.getProjectIssues(projectKey),
  });

  return {
    useGetProjects,
    useGetProjectIssues,
  };
};
