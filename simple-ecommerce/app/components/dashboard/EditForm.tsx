"use client";

import { UploadDropzone } from "@/app/lib/uploadthing";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeftIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SubmitButton from "../SubmitButton";
import { categories } from "@/app/lib/categories";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ProductSchema } from "@/app/lib/zodSchemas";
import { type $Enums } from "@prisma/client";

interface EditFormProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
    isFeatured: boolean;
  };
}

export function EditProductForm({ data }: EditFormProps) {
  const [images, setImages] = useState<string[]>(data.images); //type is required
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProductSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, idx) => idx != index));
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className=" flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeftIcon className=" w-4 h-4" />
          </Link>
        </Button>
        <h1 className=" text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <Card className=" mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add a new product here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col gap-6">
            <div className=" flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                className=" w-full"
                placeholder="Product Name"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={data.name}
              />
              <p className=" text-red-500">{fields.name.errors}</p>
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                className=" w-full"
                placeholder="Write product description here"
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={data.description}
              />
              <p className=" text-red-500">{fields.description.errors}</p>
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                type="number"
                placeholder="1200"
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={data.price}
              />
              <p className=" text-red-500">{fields.price.errors}</p>
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                checked={data.isFeatured}
              />
              <p className=" text-red-500">{fields.isFeatured.errors}</p>
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={data.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className=" text-red-500">{fields.status.errors}</p>
            </div>

            <div className=" flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={data.category}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem value={category.name} key={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className=" bg-red-500">{fields.category.errors}</p>
            </div>

            <div className=" flex flex-col gap-3">
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as string[]}
              />
              <Label>Images</Label>
              {images.length > 0 ? (
                <div className=" flex gap-5">
                  {images.map((image, idx) => (
                    <div key={idx} className=" relative h-[100px] w-[100px]">
                      <Image
                        className=" h-full w-full object-cover rounded-lg border "
                        src={image}
                        alt="🖼️"
                        width={100}
                        height={100}
                      />
                      <button
                        onClick={() => handleDeleteImage(idx)}
                        type="button"
                        className=" absolute -top-3 -right-3 p-2 text-white rounded-lg bg-red-500 "
                      >
                        <XIcon className=" w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={() => {
                    alert("somn wrong");
                  }}
                />
              )}
              <p className=" bg-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}
