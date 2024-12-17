"use server";

import { resumeSchema, ResumeValues } from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";

export async function saveResume(values: ResumeValues) {
  const { id } = values;

  console.log("received values", values);

  // for validating values against defined schema
  const { photo, workExperiences, educations, ...resumeValues } =
    resumeSchema.parse(values);
  const { userId } = await auth();
  if (!userId) throw new Error("Invalid action!");
}
