import { useEffect, useState } from "react";

export default function RecipeDetails({ foodId }) {
  const [food, setFood] = useState({});
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
      } catch (error) {
        console.error("somn wrong...", error);
      }
    }
    fetchRecipeDetails();
  }, [foodId]);

  return (
    <div>
      {food.image}
      {food.title}
    </div>
  );
}
