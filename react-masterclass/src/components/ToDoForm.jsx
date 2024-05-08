import { useState } from "react";
import styles from "./todoform.module.css";

export default function ToDoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form className={styles.todoform}>
      <div className={styles.input_container}>
        <input
          className={styles.modern_input}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="whatchu wanna do?"
        />
        <button
          className={styles.modern_button}
          onClick={(e) => handleClick(e)}
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
