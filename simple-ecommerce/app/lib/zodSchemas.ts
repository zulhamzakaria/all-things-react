import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1),
  images: z.array(z.string()).min(1, "At least one image is required"),
  category: z.enum(["man", "woman", "kid"]),
  isFeatured: z.boolean().optional(),
});

export const BannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
});
