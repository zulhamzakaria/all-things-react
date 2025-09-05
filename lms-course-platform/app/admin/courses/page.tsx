import { buttonVariants } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Courses</h1>
        <Link href={"/admin/courses/create"} className={buttonVariants()}>
          <PlusIcon /> <p>Create Course</p>
        </Link>
      </div>
      <div>
        <h1>Here you can see all the courses</h1>
      </div>
    </>
  );
}
