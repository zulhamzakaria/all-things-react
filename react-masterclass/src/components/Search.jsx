import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // if (query === "") return;
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
