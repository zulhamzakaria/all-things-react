"use client";

import { Category } from "@prisma/client";

interface CategoriesProps {
  data: Category[];
}

export const Categories = (category: CategoriesProps) => {
  return <div>Categories!</div>;
};
