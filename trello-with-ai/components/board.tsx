import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  useEffect(() => {
    // get boards
  }, []);

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => <div>render column here</div>}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;