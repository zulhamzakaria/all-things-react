import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  function handleDelete(item) {
    // return todos thats not equal to item
    const filtered = todos.filter((todo) => todo.name !== item);
    setTodos(filtered);
  }
  function toggleDone(name) {
    setTodos(
      todos.map((todo) => {
        return todo.name === name ? { ...todo, done: !todo.done } : todo;
      })
    );
  }
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.item}>
          <div key={todo.name} className={styles.item_name}>
            <span
              className={todo.done ? styles.completed : ""}
              onClick={() => toggleDone(todo.name)}
            >
              {todo.name}
            </span>
            <span>
              <button
                onClick={() => handleDelete(todo.name)}
                className={styles.delete_button}
              >
                ❌
              </button>
            </span>
          </div>
          <hr className={styles.hr} />
        </div>
      ))}
    </div>
  );
}
