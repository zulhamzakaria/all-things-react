import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  return (
    <div>
      <DragDropContext>
        <Droppable
          droppableId="board"
          direction="horizontal"
          type="column"
        >
            {(provided)=>(
                <div>
                    render column here
                </div>
            )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;
