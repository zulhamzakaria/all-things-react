"use client";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateProductPage = () => {
  return (
    <form action="">
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
              />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                className=" w-full"
                placeholder="Write product description here"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Price</Label>
              <Input type="number" placeholder="1200" />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className=" flex flex-col gap-3">
              <Label>Images</Label>
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  alert("Finished uploading");
                }}
                onUploadError={() => {
                  alert("somn wrong");
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default CreateProductPage;