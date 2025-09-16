"use client";

import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import {
  RenderEmptyState,
  RenderErrorState,
  RenderUploadedState,
} from "./render-state";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface UploaderStateProps {
  id: string | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
  fileType: "image" | "video";
}

export function Uploader() {
  const [fileState, setFileState] = useState<UploaderStateProps>({
    id: null,
    file: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    error: false,
    fileType: "image",
    objectUrl: "",
  });

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

  async function uploadFile(file: File) {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
    }));
    try {
      const presignedResponse = await fetch("/api/s3/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          size: file.size,
          isImage: true,
        }),
      });
      if (!presignedResponse.ok) {
        const text = await presignedResponse.text(); // raw error
        console.error(
          "Presigned URL fetch failed:",
          presignedResponse.status,
          text
        );
        toast.error("Failed to get presigned response");
        setFileState((prev) => ({
          ...prev,
          uploading: false,
          progress: 0,
          error: true,
        }));
        return;
      }
      const { preSignedUrl, key } = await presignedResponse.json();
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentageCompleted = (event.loaded / event.total) * 100;
            setFileState((prev) => ({
              ...prev,
              progress: Math.round(percentageCompleted),
            }));
          }
        };
        xhr.onload = () => {
          const objectUrl = `https://lms-app-bucket.t3.storage.dev/${key}`;
          if (xhr.status === 200 || xhr.status === 204) {
            setFileState((prev) => ({
              ...prev,
              progress: 100,
              uploading: false,
              key,
              objectUrl,
            }));
            toast.success("File uploaded successfully");
            resolve();
          } else {
            console.log("xhr loaded with status", xhr.status, xhr.responseText);
            reject(new Error("Upload failed"));
          }
        };
        xhr.onerror = () => {
          console.error("XHR error", xhr.status, xhr.responseText);
          reject(new Error("Upload failed"));
        };
        xhr.open("PUT", preSignedUrl);
        // xhr.setRequestHeader("Content-Type", file.type);
        console.log("sending file...", file);
        xhr.send(file);
      });
    } catch (error) {
      console.log((error as Error).message);
      toast.error("Something went wrong");
      setFileState((prev) => ({
        ...prev,
        progress: 0,
        error: true,
        uploading: false,
      }));
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileState({
        file,
        uploading: false,
        progress: 0,
        objectUrl: URL.createObjectURL(file),
        error: false,
        id: uuidv4(),
        isDeleting: false,
        fileType: "image",
      });
      uploadFile(file);
    }
  }, []);

  function renderContent() {
    if (fileState.uploading) {
      return <h1>Uploading...</h1>;
    }
    if (fileState.error) {
      return <RenderErrorState />;
    }
    if (fileState.objectUrl) {
      return <RenderUploadedState previewUrl={fileState.objectUrl} />;
    }
    return <RenderEmptyState isDragActive={isDragActive} />;
  }

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
        {renderContent()}
      </CardContent>
    </Card>
  );
}
