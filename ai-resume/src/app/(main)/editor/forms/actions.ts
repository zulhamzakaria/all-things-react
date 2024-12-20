"use server";

import { GenerateSummaryInput, generateSummarySchema } from "@/lib/validation";

export async function GenerateSummary(input: GenerateSummaryInput) {
  // conditional; premium users only
  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

    

}
