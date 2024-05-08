import styles from "./footer.module.css";

export default function Footer({ itemCompleted, total }) {
  return (
    <div className={styles.footer}>
      <span>
        {itemCompleted} of {total} item(s) completed.
      </span>
    </div>
  );
}
