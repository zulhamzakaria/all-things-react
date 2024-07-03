"use client";

import { useBoardStore } from "@/store/board-store";
import { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./column";

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    // get boards
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    if (!destination) return;
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <div>
                    <Column
                      key={id}
                      id={id}
                      todos={column.todos}
                      index={index}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;
