export default function Ingredient({ ingredient }) {
  return (
    <div>
      <div>
        <img src={`food_image_url${ingredient.image}`} alt="food_image.jpeg" />
      </div>
      <div>
        <h3>
          {ingredient.amount} {ingredient.unit} of {ingredient.name}
        </h3>
      </div>
    </div>
  );
}
