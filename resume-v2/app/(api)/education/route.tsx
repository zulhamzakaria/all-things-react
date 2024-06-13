import { educations } from "@/data";

export async function GET() {
  // const sortedEducations = educations.sort((a, b) => a.id - b.id);

  return Response.json(educations);
}

export async function POST(req: Request) {
  const educationsArray = await req.json();
  educationsArray.forEach((education: any) => {
    const newId = educations.length + 1;
    const newEdu = { id: newId, ...education };
    educations.push(newEdu);
  });

  return new Response(JSON.stringify(educations), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
