import { useState } from "react";
import styles from "./todoform.module.css";

export default function ToDoForm({ todos, setTodos }) {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const handleClick = (e) => {
    e.preventDefault();
    if (todo.name === "") {
      return;
    }
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className={styles.todoform}>
      <div className={styles.input_container}>
        <input
          className={styles.modern_input}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
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
