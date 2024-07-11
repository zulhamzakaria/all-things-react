import { z } from "zod";

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
  email: z.string().email("Invalid email address."),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), {
    message: "Invalid phone number.",
  }),
});
