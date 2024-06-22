import { z } from "zod";

const EducationEntrySchema = z.object({
  institution: z.string().min(1, { message: "Institution is required" }),
  major: z.string().optional(),
});

export const EducationSchema = z.object({
  educations: z.array(EducationEntrySchema),
});

export const EditEducationSchema = z.object({
  id: z.number(),
  institution: z.string().min(1, { message: "Institution is required" }),
  major: z.string().optional(),
});
