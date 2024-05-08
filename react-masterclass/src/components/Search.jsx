import { useEffect, useState } from "react";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("chicken soup");

  useEffect(() => {
    // if (query === "") return;
    async function fetchRecipe() {
      const url = `https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${query}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a1734c0813msh054d720e014136bp163309jsn5a9a1fe8d968",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        // const result = await response.text();
        const data = await response.json();
        setFoodData(data.results);
      } catch (error) {
        console.error("somn wrong", error);
      }
    }
    fetchRecipe();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipe"
        value={query}
      ></input>
    </div>
  );
}
