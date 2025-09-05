import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(2500),
  fileKey: z.string().min(3).max(1),
  price: z.coerce.number().min(1),
});
