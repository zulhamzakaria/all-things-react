import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

interface TodoCardProps {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps;
}

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TodoCardProps) => {
  return <div>TodoCard</div>;
};

export default TodoCard;
