import api from "../utils/api";
import type { IContactDTO } from "../../../types/contact";

export const contactService = {
  createContact: (data: IContactDTO) => api.post("/contact", data),
};


