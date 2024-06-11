import { z } from "zod";

export const ExperienceSchema = z.object({
  institution: z.string().min(1),
  major: z.string().optional(),
});
