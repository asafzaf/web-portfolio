import { ContactService } from "../../services/Contact/service";

export class ContactController {
  private contactService: ContactService;
  constructor() {
    this.contactService = new ContactService();
  }

  async createContact(contactDTO: {
    full_name: string;
    email: string;
    message: string;
  }) {
    return this.contactService.createContact(contactDTO);
  }

  async getAllContacts() {
    return this.contactService.getAllContacts();
  }

  async getContactById(id: string) {
    return this.contactService.getContactById(id);
  }

  async deleteContactById(id: string) {
    return this.contactService.deleteContactById(id);
  }
}
