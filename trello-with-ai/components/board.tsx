"use client";

import { useBoardStore } from "@/store/board-store";
import { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./column";

const Board = () => {
  const [board, getBoard, setBoardState, updateTodoInDb] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.updateTodoInDb,
    ]
  );

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
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    // for getting the items movement between columns
    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const endColIndex = columns[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };
    const endCol: Column = {
      id: endColIndex[0],
      todos: endColIndex[1].todos,
    };

    // if the item is dragged and dropped inside the same column, do nothing
    if (!startCol || !endCol) return;

    // if the item is dragged and drop at the same position, do nothing
    if (source.index === destination.index && startCol === endCol) return;

    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1);

    if (startCol.id === endCol.id) {
      // same col task drag
      newTodos.splice(destination.index, 0, todoMoved);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns });
    } else {
      // dragging task to another col
      const endTodos = Array.from(endCol.todos);
      endTodos.splice(destination.index, 0, todoMoved);

      const newCols = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };

      newCols.set(startCol.id, newCol);
      newCols.set(endCol.id, {
        id: endCol.id,
        todos: endTodos,
      });

      updateTodoInDb(todoMoved, endCol.id);

      setBoardState({ ...board, columns: newCols });
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
