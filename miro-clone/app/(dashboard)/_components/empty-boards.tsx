import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return;
    }

    create({
      orgId: organization?.id,
      title: "Untitled",
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image src="/logo.png" alt="empty-search" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
