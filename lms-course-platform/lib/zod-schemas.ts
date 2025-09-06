import { z } from "zod";

export const courseLevel = ["Beginner", "Advanced", "Expert"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT and Software",
  "Productivity",
  "Personal Betterment",
  "Design",
  "Marketing",
  "Health and Fitness",
  "Music",
  "Teachings & Academics",
];

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be 3 chars long at minimum" })
    .max(100, { message: "Title must be 100 chars long at maximum" }),
  description: z
    .string()
    .min(3, { message: "Description must be 3 chars long at minimum" })
    .max(2500, { message: "Description must be 2500 chars long at maximum" }),
  fileKey: z.string().min(1, { message: "File is required" }),
  price: z.coerce
    .number()
    .min(1, { message: "Price is required" }) as unknown as number,
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be 1 hr at minimum" })
    .max(500, {
      message: "Duration must be 500 hrs long at maximum",
    }) as unknown as number,
  level: z.enum(courseLevel, { message: "Level is required" }),
  category: z.string().min(1, { message: "category is required" }),
  smallDesc: z
    .string()
    .min(3, { message: "Small Description must be 3 chars long at minimum" })
    .max(200, {
      message: "Small Description must be 200 chars long at maximum",
    }),
  slug: z.string().min(3, { message: "Slug must be 3 chars long at minimum" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
