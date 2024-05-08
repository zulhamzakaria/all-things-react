export default function FoodItem({ food }) {
  return (
    <div>
      <img
        src="http://thetasteedit.com/wp-content/uploads/2016/09/italian-chicken-soup-DSC02170.jpg"
        alt="food-image"
        width={100}
        height={150}
      />
      <h1>{food.display}</h1>
      <button>View recipe</button>
    </div>
  );
}
