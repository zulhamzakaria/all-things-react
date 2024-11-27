"use client";

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
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { OnboardingSchema } from "../lib/zod-schemas";
import { SubmitButton } from "../components/SubmitButtons";

const Onboarding = () => {
  const [lastResult, action] = useActionState(OnboardingAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: OnboardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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
        <form action={action} id={form.id} onSubmit={form.onSubmit} noValidate>
          <CardContent className=" grid gap-y-5">
            <div className=" grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                placeholder="John Doe"
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
              />
              <p className=" text-rose-500 text-sm">{fields.fullName.errors}</p>
            </div>
            <div className=" grid gap-y-2">
              <Label>Username</Label>
              <div className=" flex rounded-md">
                <span className=" inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-small text-muted-foreground border-muted">
                  scheduler.com/
                </span>
                <Input
                  placeholder="john-doe"
                  className=" rounded-l-none"
                  name={fields.username.name}
                  defaultValue={fields.username.initialValue}
                  key={fields.username.key}
                />
              </div>
              <p className=" text-rose-500 text-sm">{fields.username.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" className=" w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Onboarding;
