import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <div>
      <Room roomId={params.boardId} fallback={<div>Loading...</div>}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
