export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}

// def value is auto which caches everything
export const dynamic = "force-dynamic";
