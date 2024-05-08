import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.item_container}>
      <img
        src="http://thetasteedit.com/wp-content/uploads/2016/09/italian-chicken-soup-DSC02170.jpg"
        alt="food-image"
        className={styles.item_image}
      />
      <div className={styles.item_content}>
        <p className={styles.item_name}>{food.display}</p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.item_button}>View recipe</button>
      </div>
    </div>
  );
}
