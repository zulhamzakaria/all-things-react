import prismaDb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionIdProps) => {
  const companion = await prismaDb.companion.findUnique({
    where: { id: params.companionId },
  });

  const categories = await prismaDb.category.findMany();

  return (
    <div>
      <CompanionForm />
    </div>
  );
};

export default CompanionPage;
