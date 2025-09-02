import { Badge } from "@/components/ui/badge";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
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
        <div>
          <Badge>The Future of Online Learning</Badge>
        </div>
      </section>
    </>
  );
}

("use client");
