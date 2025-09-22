// providers/index.ts
import { JiraProvider } from "./JiraProvider";

export interface Providers {
  jira: JiraProvider;
}

export const initProviders = (): Providers => {
  return {
    jira: new JiraProvider(),
  };
};
