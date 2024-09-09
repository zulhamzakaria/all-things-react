"use client";
import { UploadDropzone } from "@/app/utils/UploadthingComponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { SubmitButton } from "../SubmitButton";

export function UploadImageForm() {
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image</CardTitle>
        <CardDescription>Upload the image of your site</CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="🖼️"
            width={200}
            height={200}
            className=" size-[200px] object-cover rounded-md"
          />
        ) : (
          <UploadDropzone endpoint="imageUploader" />
        )}
      </CardContent>
      <CardFooter>
        <SubmitButton text="Change Image" />
      </CardFooter>
    </Card>
  );
}
