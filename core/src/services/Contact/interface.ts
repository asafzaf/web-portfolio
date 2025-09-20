import { IContact, IContactDTO } from "../../models/Contact.ts";

export interface IContactService {
  createContact(contactDTO: IContactDTO): Promise<IContact>;
  getAllContacts(): Promise<IContact[]>;
  getContactById(id: string): Promise<IContact | null>;
  deleteContactById(id: string): Promise<IContact | null>;
}

export interface IContactServiceFactory {
  getContactService(): IContactService;
}
