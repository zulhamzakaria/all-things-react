import { z } from "zod";

export const courseLevel = ["Beginner", "Advanced", "Expert"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(2500),
  fileKey: z.string().min(3).max(1),
  price: z.coerce.number().min(1),
  duration: z.coerce.number().min(1).max(500),
  level: z.enum(courseLevel),
  category: z.string().min(1),
  smallDesc: z.string().min(3).max(200),
  slug: z.string().min(3),
  status: z.enum(courseStatus),
});
