export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <h1>{food.display}</h1>
      ))}
    </div>
  );
}
