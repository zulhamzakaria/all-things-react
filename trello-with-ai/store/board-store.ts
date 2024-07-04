import { databases, storage } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import uploadImage from "@/lib/uploadImage";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDb: (todo: Todo, columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;
  newTaskInput: string;
  setNewTaskInput: (newTask: string) => void;
  newTaskType: TypedColumn;
  setNewTaskType: (newTaskType: TypedColumn) => void;
  image: File | null;
  setImage: (image: File | null) => void;
  addTask: (todo: string, columnId: TypedColumn, image?: File | null) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  async updateTodoInDb(todo, columnId) {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
  async deleteTask(taskIndex, todoId: Todo, id) {
    const newColumns = new Map(get().board.columns);
    newColumns.get(id)?.todos.splice(taskIndex, 1);
    set({ board: { columns: newColumns } });
    if (todoId.image) {
      // await storage.deleteFile(todoId.image.bucketId, todoId.image.fileId);
    }
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todoId.$id
    );
  },
  newTaskInput: "",
  setNewTaskInput: (newTaskInput) => set({ newTaskInput }),
  newTaskType: "todo",
  setNewTaskType(newTaskType) {
    set({ newTaskType });
  },
  image: null,
  setImage(image) {
    set({ image });
  },
  async addTask(todo, columnId, image?) {
    let file: Image | undefined;

    if (image) {
      const fileUploaded = await uploadImage(image);
      if (!fileUploaded) {
        file = {
          bucketId: fileUploaded!.bucketId,
          fileId: fileUploaded!.$id,
        };
      }
    }
  },
}));
