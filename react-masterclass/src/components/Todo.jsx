import { useState } from "react";

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
      {todos}
    </div>
  );
}
