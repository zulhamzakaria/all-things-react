"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { RenderEmptyState, RenderErrorState } from "./render-state";

export function Uploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
        <RenderErrorState />
      </CardContent>
    </Card>
  );
}
