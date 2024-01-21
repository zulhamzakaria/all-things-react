"use client";

import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const data = () => {
  const [product, setProduct] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {product?.map((p) => (
        <>
          <li className="border-2" key={p.id}>
            {p.id}: {p.title}
          </li>
        </>
      ))}
    </div>
  );
};

export default data;
