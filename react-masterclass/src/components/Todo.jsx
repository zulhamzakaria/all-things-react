import { useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done == true).length;
  const totalToDos = todos.length;
  return (
    <div>
      <Header />
      <ToDoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer itemCompleted={completedTodos} total={totalToDos} />
    </div>
  );
}
