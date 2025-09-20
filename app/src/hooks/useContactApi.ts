import { useMutation } from "@tanstack/react-query";

import { contactService } from "../services/contactService";
import type { IContactDTO } from "../../../core/src/models/Contact";

export const useContact = () => {

  const useCreateContact = useMutation({
    mutationFn: (data: IContactDTO) => contactService.createContact(data),
  });

  return {
    useCreateContact,
  };
};
