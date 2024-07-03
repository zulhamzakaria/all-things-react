"use client";

import { useBoardStore } from "@/store/board-store";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    // get boards
    getBoard();
  }, [getBoard]);

  return (
    <div>
      {/* <DragDropContext>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => <div>render column here</div>}
        </Droppable>
      </DragDropContext> */}
    </div>
  );
};

export default Board;
