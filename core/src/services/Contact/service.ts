import Contact, { IContact, IContactDTO } from "../../models/Contact.ts";

import { IContactService, IContactServiceFactory } from "./interface.ts";

export class ContactService implements IContactService {
  constructor() {}

  async createContact(contactDTO: IContactDTO): Promise<IContact> {
    console.log("Creating contact with data:", contactDTO);
    return Contact.createContact(contactDTO);
  }
  async getAllContacts(): Promise<IContact[]> {
    return Contact.getAllContacts();
  }

  async getContactById(id: string): Promise<IContact | null> {
    return Contact.getContactById(id);
  }
  async deleteContactById(id: string): Promise<IContact | null> {
    return Contact.deleteContactById(id);
  }
}
