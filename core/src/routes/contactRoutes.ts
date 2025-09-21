import { Router } from "express";

import { ContactController } from "../controllers/Contact/contact.controller";

const router = Router();

const contactController = new ContactController();

router.post("/", async (req, res) => {
  try {
    const { full_name, email, message } = req.body;
    const contact = await contactController.createContact({
      full_name,
      email,
      message,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact" });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await contactController.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await contactController.getContactById(req.params.id);
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contact" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contact = await contactController.deleteContactById(req.params.id);
    if (contact) {
      res.status(200).json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

export default router;
