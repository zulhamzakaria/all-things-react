import { z } from "zod";

export const OnboardingSchema = z.object({
  fullName: z.string().min(3).max(100),
  username: z
    .string()
    .min(3)
    .max(50)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Username may only contain letters, number and -",
    }),
});
