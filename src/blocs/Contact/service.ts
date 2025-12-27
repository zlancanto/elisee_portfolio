import type {ContactFormData} from "./contact.validator.ts";
import {API, ROUTES_API} from "./index";

export const contactService = {
    sendEmail: async (data: ContactFormData) => {
        return await API.post(ROUTES_API.CONTACT, data);
    }
};