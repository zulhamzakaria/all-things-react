"use client";

import { UploadDropzone } from "@/app/utils/UploadthingComponents";
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
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreateArticle({
  params,
}: {
  params: { siteId: string };
}) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

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
          <form className=" flex flex-col gap-6">
            <div className=" grid gap-2">
              <Label>Title</Label>
              <Input placeholder="Blogging app powered by nextJs" />
            </div>
            <div className=" grid gap-2">
              <Label>Slug</Label>
              <Input placeholder="Article slug" />
              {/* type button so it's not mistaken for a submit button */}
              <Button className=" w-fit" variant={"secondary"} type="button">
                <Atom className=" size-4 mr-2" />
                Generate slug
              </Button>
            </div>
            <div className=" grid gap-2">
              <Label>Small Description</Label>
              <Textarea
                placeholder="Small Description for the blog"
                className="h-32"
              />
            </div>

            <div className="grid gap-2">
              <Label>Cover Image</Label>
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
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
