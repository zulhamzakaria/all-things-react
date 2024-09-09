import { conformZodMessage } from "@conform-to/zod";
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

export function SiteCreationSchema(options?: {
  isSubdirectoryUnique: () => Promise<boolean>;
}) {
  return z.object({
    subdirectory: z
      .string()
      .min(1)
      .max(45)
      .regex(/^[a-z]+$/, "Subdirectory must only be in lowercase")
      .transform((value) => value.toLowerCase())
      .pipe(
        z.string().superRefine((email, ctx) => {
          if (typeof options?.isSubdirectoryUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }
          return options.isSubdirectoryUnique().then((isUnique) => {
            if (!isUnique) {
              ctx.addIssue({
                code: "custom",
                message: "Subdirectory is already taken",
              });
            }
          });
        })
      ),
    name: z.string().min(3).max(35),
    description: z.string().min(1).max(150),
  });
}
