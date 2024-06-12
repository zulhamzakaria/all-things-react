import { z } from "zod";

const EducationEntrySchema = z.object({
  institution: z.string().min(1),
  major: z.string().optional(),
});

export const EducationSchema = z.object({
  educations: z.array(EducationEntrySchema),
});
