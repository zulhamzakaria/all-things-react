import { getUser } from "@/lib/utils";

export async function GET() {
  const user = await getUser();
  if (!user || user === null) {
    throw new Error("User not found");
  }
}
