import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { todos } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, greet the user and address the user as Human. Limit the response to 200 chars only",
      },
      {
        role: "user",
        content: `Provide a summary of the following todos based on this data: ${JSON.stringify(
          todos
        )} . Count how many todos are in each category (todo, in progress, done) and tell the user to fullfill the duties`,
      },
    ],
  });

  console.log(response.choices[0].message);
  return NextResponse.json(response.choices[0].message);
}
