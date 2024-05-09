import { useEffect, useState } from "react";

export default function RecipeDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `some api url${foodId}`;
  const API_KEY = "some api key";

  useEffect(() => {
    async function fetchRecipeDetails() {
      if (foodId === 0) {
        return;
      }
      try {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        const result = await response.json();
        setFood(result);
        setIsLoading(false);
      } catch (error) {
        console.error("somn wrong...", error);
      }
    }
    fetchRecipeDetails();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        {food.image}
      </div>
      <div>
        <span>
          <strong>⏲️{food.readyInMinutes} mins</strong>
        </span>
        <span>
          <strong>Servings: {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "Veg. 🥬" : "Non-Veg 🥩"}</span>
      </div>
      <div>
        💲<span>{food.pricePerServings} per serving</span>
      </div>
      <div>
        <h2>Instructions</h2>

        {isLoading ? (
          <p>Loading Instructions...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => {
            return <li>{step.step}</li>;
          })
        )}
      </div>
    </div>
  );
}
