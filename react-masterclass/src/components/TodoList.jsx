import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  function handleDelete(item) {
    // return todos thats not equal to item
    const filtered = todos.filter((todo) => todo.name !== item);
    setTodos(filtered);
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.item}>
          <div key={todo.name} className={styles.item_name}>
            {todo.name}
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
