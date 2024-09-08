import { z } from "zod";

export const SiteSchema = z.object({
  name: z.string().min(3).max(35),
  description: z.string().min(1).max(150),
  subdirectory: z.string().min(1).max(45),
});

export const ArticleSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().min(1).max(190),
  imageUrl: z.string().min(1),
  smallDescription: z.string().min(1).max(200),
  articleContent: z.string().min(1),
});
