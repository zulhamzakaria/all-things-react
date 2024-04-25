import prismaDb from "@/lib/prismadb";

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

  return <div>Companion Form here</div>;
};

export default CompanionPage;
