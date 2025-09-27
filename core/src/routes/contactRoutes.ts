import { Router } from "express";

import { ContactController } from "../controllers/Contact/contact.controller";

const router = Router();

const contactController = new ContactController();


router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContactById);
router.delete("/:id", contactController.deleteContactById);

export default router;
