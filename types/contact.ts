// types/contact.ts
export interface IContactDTO {
  full_name: string;
  email: string;
  message: string;
}

export interface IContact {
  full_name: string;
  email: string;
  message: string;
  createdAt: Date;
}