import api from "../utils/api";
import type { IContactDTO } from "../../../core/src/models/Contact";

export const contactService = {
  createContact: (data: IContactDTO) => api.post("/contact", data),
};
