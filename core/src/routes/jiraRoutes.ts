import { Router } from "express";
import { JiraController } from "../controllers/Jira/jira.controller";

const jiraController = new JiraController();

const router = Router();

router.get("/projects", jiraController.getProjects);
router.get("/issues", jiraController.getIssues);

export default router;
