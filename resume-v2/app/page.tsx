import ResumePage from "@/components/resume";
import { useUser } from "@clerk/nextjs";
import { UserStore } from "@/lib/use-store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  const { setUserId } = UserStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setUserId(user.id);
    } else {
      const userId = router.query.userId as string;
      setUserId(userId!);
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-dark-2">
      <ResumePage />
    </main>
  );
}
