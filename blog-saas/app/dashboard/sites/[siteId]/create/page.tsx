"use client";

import { CreatePostAction } from "@/app/actions";
import TailwindEditor from "@/app/components/dashboard/EditorWrapper";
import { UploadDropzone } from "@/app/utils/UploadthingComponents";
import { ArticleSchema } from "@/app/utils/zodSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSONContent } from "novel";
import { useActionState, useState } from "react";

export default function CreateArticle({
  params,
}: {
  params: { siteId: string };
}) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<JSONContent | undefined>(undefined);
  const [lastResult, action] = useActionState(CreatePostAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ArticleSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <>
      <div className=" flex items-center">
        {/* asChild cause it has a Link */}
        <Button
          size={"icon"}
          variant={"outline"}
          asChild
          className=" mr-3 hover:bg-primary"
        >
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ArrowLeft className=" size-4 hover:text-black" />
          </Link>
        </Button>
        <h1 className=" text-xl font-semibold">Create Article</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
          <CardDescription>Article Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className=" flex flex-col gap-6"
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
          >
            <div className=" grid gap-2">
              <Label>Title</Label>
              <Input
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                placeholder="Blogging app powered by nextJs"
              />
              <p className=" text-red-500 text-sm">{fields.title.errors}</p>
            </div>
            <div className=" grid gap-2">
              <Label>Slug</Label>
              <Input
                placeholder="Article slug"
                key={fields.slug.key}
                name={fields.slug.name}
                defaultValue={fields.slug.initialValue}
              />
              {/* type button so it's not mistaken for a submit button */}
              <Button className=" w-fit" variant={"secondary"} type="button">
                <Atom className=" size-4 mr-2" />
                Generate slug
              </Button>
              <p className=" text-red-500 text-sm">{fields.slug.errors}</p>
            </div>
            <div className=" grid gap-2">
              <Label>Small Description</Label>
              <Textarea
                placeholder="Small Description for the blog"
                className="h-32"
                key={fields.smallDescription.key}
                name={fields.smallDescription.name}
                defaultValue={fields.smallDescription.initialValue}
              />
              <p className="text-red-500 text-sm">
                {fields.smallDescription.errors}
              </p>
            </div>

            <div className="grid gap-2">
              <Label>Cover Image</Label>
              <Input
                type="hidden"
                name={fields.imageUrl.name}
                key={fields.imageUrl.key}
                defaultValue={fields.imageUrl.initialValue}
                value={imageUrl}
              />
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="uploaded-image"
                  className=" object-cover w-[200px] h-[200px] rounded-lg"
                  height={100}
                  width={100}
                />
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImageUrl(res[0].url);
                  }}
                  onUploadError={() => {
                    throw new Error("Failed to upload file");
                  }}
                />
              )}
              <p className=" text-red-500 text-sm">{fields.imageUrl.errors}</p>
            </div>

            <div className="grid gap-2">
              <Label>Article Content</Label>
              <Input
                type="hidden"
                name={fields.articleContent.name}
                key={fields.articleContent.key}
                defaultValue={fields.articleContent.initialValue}
                // schema accepts string but the content is of type JSONContent
                value={JSON.stringify(value)}
              />
              <TailwindEditor onChange={setValue} initialValue={value} />
              <p className=" text-red-500 text-sm">
                {fields.articleContent.errors}
              </p>
            </div>

            <Button className="w-fit flex ml-auto">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
