import { Schema, Model, model } from "mongoose";

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

const ContactSchema: Schema<IContact, IContactModel> = new Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

ContactSchema.statics.createContact = async function (
  this: IContactModel,
  contactDTO: IContactDTO
): Promise<IContact> {
  const contact = new this(contactDTO);
  return contact.save();
};

ContactSchema.statics.getAllContacts = function (
  this: IContactModel
): Promise<IContact[]> {
  return this.find().sort({ createdAt: -1 }).exec();
};

ContactSchema.statics.getContactById = function (
  this: IContactModel,
  id: string
): Promise<IContact | null> {
  return this.findById(id).exec();
};

ContactSchema.statics.deleteContactById = function (
  this: IContactModel,
  id: string
): Promise<IContact | null> {
  return this.findByIdAndDelete(id).exec();
};

export default model<IContact, IContactModel>("Contact", ContactSchema);
