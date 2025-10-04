import { Router } from "express";

import { JiraController } from "../controllers/Jira/jira.controller";

const router = Router();

const jiraController = new JiraController();

router.post("/projects", jiraController.getProjects.bind(jiraController));
router.post(
  "/issues/:key",
  jiraController.getProjectIssues.bind(jiraController)
);

export default router;
