import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div>Notifications page</div>
      <Link href="/complex-dashobard/archive">Archive</Link>
    </Card>
  );
}
