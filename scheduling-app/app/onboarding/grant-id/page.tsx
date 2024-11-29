import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function OnboardingRouteTwo() {
  return (
    <div className=" min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>You're almost done!</CardTitle>
          <CardDescription>
            We will now connect your calendar to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className=" w-full" asChild>
            <Link href="/">Connect Calendar to your Account</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
