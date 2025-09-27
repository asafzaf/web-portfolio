import { NextFunction, Request, Response } from "express";
import { ContactService } from "../../services/Contact/service";

export class ContactController {
  private contactService: ContactService;
  constructor() {
    this.contactService = new ContactService();
  }

  createContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { full_name, email, message } = req.body;
      const contact = await this.contactService.createContact({
        full_name,
        email,
        message,
      });
      res.status(201).json(contact);
    } catch (error) {
      next(error);
    }
  };

  getAllContacts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contacts = await this.contactService.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      next(error);
    }
  };

  getContactById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contact = await this.contactService.getContactById(req.params.id);
      if (contact) {
        res.status(200).json(contact);
      } else {
        res.status(404).json({ error: "Contact not found" });
      }
    } catch (error) {
      next(error);
    }
  };

  deleteContactById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const contact = await this.contactService.deleteContactById(
        req.params.id
      );
      if (contact) {
        res.status(200).json({ message: "Contact deleted successfully" });
      } else {
        res.status(404).json({ error: "Contact not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete contact" });
    }
  };
}
