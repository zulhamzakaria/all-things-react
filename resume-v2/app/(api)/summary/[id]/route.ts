import { Summary } from "@/constants";

const apiUrl = `${process.env.API_URL}/summaries`;

const defaultSummary: Summary = {
  description: "Not available",
};

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(`${apiUrl}/${params.id}`);

    if (!response.ok) {
      throw new Error(`Error fetching user data. Error:${response.status}`);
    }

    const summary = await response.json();

    return Response.json(summary);
  } catch (err) {
    console.error((err as Error).message);
    return Response.json(defaultSummary);
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { summary } = await req.json();

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userid: params.id, ...summary }),
  });

  const data = await response.json();

  return Response.json(data);
}
