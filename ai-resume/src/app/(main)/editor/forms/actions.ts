"use server";

import openAi from "@/lib/openai";
import { GenerateSummaryInput, generateSummarySchema } from "@/lib/validation";

export async function GenerateSummary(input: GenerateSummaryInput) {
  // conditional; premium users only
  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  const systemMessage = `you are a job resume generator AI. your task is to write a CONCISE and PROFESSIONAL introduction summary for a resume given the user's provided data. Only return the summary and DO NOT include any other information in the response`;

  const userMessage = `Please generate a PROFESSIONAL resume summary from this data:
    Job Title: ${jobTitle || "N/A"}
    Work experience: ${workExperiences
      ?.map(
        (exp) => `
    position: ${exp.position || "n/a"} at ${exp.company || "n/a"} from ${exp.startDate || "n/a"} to ${exp.endDate || "present"}
    description: ${exp.description || "n/a"}
    `,
      )
      .join("\n\n")}
    educations: ${educations
      ?.map(
        (edu) => `
    degree: ${edu.degree || "n/a"} at ${edu.school || "n/a"} from ${edu.startDate || "n/a"} to ${edu.endDate || "n/a"}`,
      )
      .join("\n\n")}
    skills: ${skills}
    `;

  const completion = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemMessage },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) throw new Error("failed to generate AI response...");

  return aiResponse;
}
