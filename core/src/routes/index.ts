import { Router, Request, Response } from "express";
import ContactRoutes from "./contactRoutes";
import JiraRoutes from "./jiraRoutes";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

router.use("/contact", ContactRoutes);
router.use("/jira", JiraRoutes);

export default router;
