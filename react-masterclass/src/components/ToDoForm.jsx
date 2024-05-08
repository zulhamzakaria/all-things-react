import { useState } from "react";

export default function ToDoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
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
  );
}
