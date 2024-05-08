import { useState } from "react";
import TodoList from "./TodoList";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button onClick={(e) => handleClick(e)} type="submit">
          Add
        </button>
      </form>
      {todos.map((todo) => (
        <TodoList todo={todo} key={todo} />
      ))}
    </div>
  );
}
