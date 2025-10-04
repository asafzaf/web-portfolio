import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import { jiraService } from "../services/jiraService";
import type { JiraIssue } from "../../../types/jira";

export const useJiraApi = () => {
  const useGetProjects = (
    options?: Omit<UseQueryOptions<any[]>, "queryKey" | "queryFn">
  ) => {
    return useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
        try {
          const response = await jiraService.getProjects();
          return response.data
        } catch (error) {
          console.error("Error fetching projects:", error);
          throw error;
        }
      },
      staleTime: 5 * 60 * 1000,
      ...options,
    });
  };

  const useGetProjectIssues = (
    projectKey: string,
    options?: Omit<UseQueryOptions<any[]>, "queryKey" | "queryFn">
  ) => {
    return useQuery({
      queryKey: ["project-issues", projectKey],
      queryFn: async () => {
        try {
          const response = await jiraService.getProjectIssues(projectKey);
          return response.data as JiraIssue[];
        } catch (error) {
          console.error("Error fetching project issues:", error);
          throw error;
        }
      },
      enabled: !!projectKey,
      staleTime: 3 * 60 * 1000,
      ...options,
    });
  };

  return {
    useGetProjects,
    useGetProjectIssues,
  };
};
