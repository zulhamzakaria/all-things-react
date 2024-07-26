"use client";

import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const Upload = () => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [isPending, startTransition] = useTransition();

  const onDropRejected = () => {};
  const onDropAccepted = () => {};
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": isDraggedOver }
      )}
    >
      <div className=" relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
          }}
          onDragEnter={() => {
            setIsDraggedOver(true);
          }}
          onDragLeave={() => {
            setIsDraggedOver(false);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              // ...getRootProps accepts everything that getRootProps has and pass it to the div
              className=" h-full w-full flex flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDraggedOver ? (
                <MousePointerSquareDashed className=" h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image className=" h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center ">
                    <p>Uploading...</p>
                    
                  </div>
                ) : isPending ? (
                  <div></div>
                ) : isDraggedOver ? (
                  <span></span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Upload;
