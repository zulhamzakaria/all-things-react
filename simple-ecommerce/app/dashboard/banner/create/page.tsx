"use client";
import { createProduct } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { BannerSchema } from "@/app/lib/zodSchemas";
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
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal, useFormState } from "react-dom";

export default function CreateBannerPage() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: BannerSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
      <form action={action} id={form.id} onSubmit={form.onSubmit}>
        <div className=" flex items-center gap-x-4">
          <Button variant={"outline"} size={"icon"} asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h2 className=" text-xl font-semibold tracking-tight">New Banner</h2>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Banner Details</CardTitle>
            <CardDescription>Create your banner here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-col gap-y-6">
              <div className=" flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Create title for Banner"
                  name={fields.title.name}
                  key={fields.title.key}
                  defaultValue={fields.title.initialValue}
                />
                <p className=" text-red-500">{fields.title.errors}</p>
              </div>
              <div className=" flex flex-col gap-3">
                <input
                  type="hidden"
                  key={fields.imageString.key}
                  name={fields.imageString.name}
                  defaultValue={fields.imageString.initialValue}
                />
                <Label>Images</Label>
                {image !== undefined ? (
                  <Image
                    src={image}
                    alt="🖼️"
                    className=" w-[200px] h-[200px] object-cover border rounded-lg"
                    width={100}
                    height={100}
                  />
                ) : (
                  <UploadDropzone
                    endpoint="bannerImageUploader"
                    onClientUploadComplete={(res) => {
                      setImage(res[0].url);
                    }}
                    onUploadError={() => {
                      alert("somn wrong...");
                    }}
                  />
                )}
                <p className=" text-red-500">{fields.imageString.errors}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Create Banner" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
