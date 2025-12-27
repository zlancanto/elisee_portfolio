import {z} from "zod";

export const contactValidator = z.object({
    name: z.string().min(2, "Nom trop court").trim(),
    email: z.email("Email invalide").trim(),
    subject: z.string().min(3, "Sujet trop court").trim(),
    message: z.string().min(10, "Message trop court").trim(),
});

export type ContactFormData = z.infer<typeof contactValidator>;