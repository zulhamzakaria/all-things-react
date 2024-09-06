"use client";

import { CreateSiteAction } from "@/app/actions";
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
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { SiteSchema } from "@/app/utils/zodSchemas";

const NewSiteRoute = () => {
  // for getting state from server action?
  const [lastResult, action] = useActionState(CreateSiteAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SiteSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className=" flex flex-col flex-1 items-center justify-center">
      <Card className=" max-w-[450px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your site here. Click 'save' once you are done
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
          <CardContent>
            <div className=" flex flex-col gap-y-6">
              <div className=" grid gap-2">
                <label>Site Name</label>
                <Input
                  name={fields.name.name}
                  key={fields.name.key}
                  defaultValue={fields.name.initialValue}
                  placeholder="Site name"
                />
                <p className=" text-red-500 text-sm">{fields.name.errors}</p>
              </div>
              <div className=" grid gap-2">
                <label>Subdirectory</label>
                <Input placeholder="Subdirectory" />
              </div>
              <div className=" grid gap-2">
                <label>Description</label>
                <Textarea placeholder="Small description of your site" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className=" ml-auto">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default NewSiteRoute;
