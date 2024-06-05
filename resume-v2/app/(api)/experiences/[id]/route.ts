import { experiences } from "@/data";

export async function GET({ params }: { params: { id: string } }) {
  const experience = experiences.experiences.find(
    (exp) => exp.id === parseInt(params.id)
  );
  return experience;
}
