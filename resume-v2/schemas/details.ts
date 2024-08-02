import { z } from "zod";

export const AddDetailsSchema = z.object({
  name: z.string().min(2, { message: "Name must be longer that 2 chars" }),
  phone: z.string(),
  email: z.string().email(),
  role: z.string().min(2, { message: "Role must be longer that 2 chars" }),
  fullLocation: z
    .string()
    .min(2, { message: "Full Location must be longer that 2 chars" }),
  shortLocation: z
    .string()
    .min(2, { message: "Full Location must be longer that 2 chars" }),
});
