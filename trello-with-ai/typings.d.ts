interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "in-progress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

// values gotten from AppWrite
interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
