import { Schema, Document, Model, model } from "mongoose";

export interface IContact extends Document {
  full_name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface IContactDTO {
  full_name: string;
  email: string;
  message: string;
}

interface IContactModel extends Model<IContact> {
  createContact(contactDTO: IContactDTO): Promise<IContact>;
  getAllContacts(): Promise<IContact[]>;
  getContactById(id: string): Promise<IContact | null>;
  deleteContactById(id: string): Promise<IContact | null>;
}

const ContactSchema = new Schema<IContact, IContactModel>(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

ContactSchema.statics.createContact = async function (contactDTO: IContactDTO) {
  const contact = new this(contactDTO);
  return contact.save();
};

ContactSchema.statics.getAllContacts = function () {
  return this.find().sort({ createdAt: -1 }).exec();
};

ContactSchema.statics.getContactById = function (id: string) {
  return this.findById(id).exec();
};

ContactSchema.statics.deleteContactById = function (id: string) {
  return this.findByIdAndDelete(id).exec();
};

const Contact = model<IContact, IContactModel>("Contact", ContactSchema);
export default Contact;
