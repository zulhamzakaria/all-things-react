import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState } from "react";
import { OnboardingAction } from "../actions";

const Onboarding = () => {

  const [lastResult, action] = useActionState(OnboardingAction,undefined)

  return (
    <div className=" min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to <span className=" text-primary">scheduler!</span>
          </CardTitle>
          <CardDescription>
            Fill in the details to set up your profile
          </CardDescription>
        </CardHeader>
        <form action="">
          <CardContent className=" grid gap-y-5">
            <div className=" grid gap-y-2">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
            </div>
            <div className=" grid gap-y-2">
              <Label>Username</Label>
              <div className=" flex rounded-md">
                <span className=" inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-small text-muted-foreground border-muted">
                  scheduler.com/
                </span>
                <Input placeholder="john-doe" className=" rounded-l-none" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className=" w-full">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Onboarding;
