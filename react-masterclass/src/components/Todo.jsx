import { useState } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
