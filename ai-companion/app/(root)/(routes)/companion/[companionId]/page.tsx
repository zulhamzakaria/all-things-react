import prismaDb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";
import { auth } from "@clerk/nextjs/server";

interface CompanionIdProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionIdProps) => {
  const { userId } = auth();
  if (!userId) {
    return auth().redirectToSignIn();
  }

  const companion = await prismaDb.companion.findUnique({
    where: { id: params.companionId, userId },
  });

  const categories = await prismaDb.category.findMany();

  return (
    <div>
      <CompanionForm categories={categories} initialData={companion} />
    </div>
  );
};

export default CompanionPage;
