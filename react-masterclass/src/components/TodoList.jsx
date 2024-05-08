import styles from "./todolist.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.item}>
          <div key={todo} className={styles.item_name}>
            {todo}
          </div>
          <hr className={styles.hr} />
        </div>
      ))}
    </div>
  );
}
