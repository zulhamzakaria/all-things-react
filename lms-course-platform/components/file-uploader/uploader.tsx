"use client";

import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { RenderEmptyState, RenderErrorState } from "./render-state";
import { toast } from "sonner";

export function Uploader() {
  function rejectedFiles(fileRejection: FileRejection[]) {
    if (fileRejection.length) {
      const tooManyFiles = fileRejection.find((rejection) => {
        rejection.errors[0].code === "too-many-files";
      });
      if (tooManyFiles) {
        toast.error("Too many files selected");
      }
      const largeSizeFiles = fileRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );
      if (largeSizeFiles) {
        toast.error("File size exceeded the limit (5mb)");
      }
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024, //5mb
    onDropRejected: rejectedFiles,
  });
  return (
    <Card
      {...getRootProps()}
      className={cn(
        " relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64 ",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:border-primary"
      )}
    >
      <CardContent className="flex items-center justify-center h-full w-full p-4">
        <input {...getInputProps()} />
        <RenderEmptyState isDragActive={isDragActive} />
        {/* <RenderErrorState /> */}
      </CardContent>
    </Card>
  );
}
