import { useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import ToDoForm from "./ToDoForm";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header />
      <ToDoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
