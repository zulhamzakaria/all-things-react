import { z } from "zod";

export const SiteSchema = z.object({
  name: z.string().min(3).max(35),
  description: z.string().min(1).max(150),
  subdirectory: z.string().min(1).max(45),
});
