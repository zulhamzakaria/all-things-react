import styles from "./ingredient.module.css";

export default function Ingredient({ ingredient }) {
  return (
    <div className={styles.ingredient_container}>
      <div className={styles.image_container}>
        <img src={`food_image_url${ingredient.image}`} alt="food_image.jpeg" />
      </div>
      <div className={styles.name_container}>
        <div>
          <p className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </p>
          of <p className={styles.name}>{ingredient.name}</p>
        </div>
      </div>
    </div>
  );
}
