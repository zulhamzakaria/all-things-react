"use client";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const features = [
  {
    title: "Comprehensive  Courses",
    description:
      "Access a wide array or carefully curated courses designed by industry experts",
  },
];

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out successfully");
        },
      },
    });
  }

  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}>The Future of Online Learning</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your learning experience
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            Discover a new way of learning with our state-of-the-art learning
            management system. Access high-quality courses anytime, anywhere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore courses
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
    </>
  );
}
