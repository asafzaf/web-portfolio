import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import { jiraService } from "../services/jiraService";

export const useJiraApi = () => {
  const useGetProjects = (
    options?: Omit<UseQueryOptions<any[]>, "queryKey" | "queryFn">
  ) => {
    return useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
        const response = await jiraService.getProjects();
        return response.data;
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
        const response = await jiraService.getProjectIssues(projectKey);
        return response.data;
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
