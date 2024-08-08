import { z } from "zod";

export const CreateDetailsSchema = z.object({
  name: z.string().min(2, { message: "Name must be longer than 2 chars" }),
  phone: z.string().min(7, { message: "Phone must be longer than 7 chars" }),
  email: z.string().email(),
  role: z.string().min(2, { message: "Role must be longer than 2 chars" }),
  fullLocation: z
    .string()
    .min(2, { message: "Full Location must be longer than 2 chars" }),
  shortLocation: z
    .string()
    .min(2, { message: "Short Location must be longer than 2 chars" }),
});
