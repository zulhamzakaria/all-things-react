import { cn } from "@/lib/utils";
import { CloudUploadIcon, Image, ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground ",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p className="text-base font-semibold text-foreground">
        Drop your file here or{" "}
        <span className="text-primary font-bold cursor-pointer">
          Click to upload
        </span>
      </p>
      <p>
        <Button className="mt-4" type="button">
          Select File
        </Button>
      </p>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-destructive/30 mb-4">
        <ImageIcon className={cn("size-6 text-destructive ")} />
      </div>
      <p className="text-base font-semibold">Upload failed</p>
      <p className="text-muted-foreground text-xs mt-1">Something went wrong</p>
      <Button type="button" className="mt-4">
        Retry Upload
      </Button>
    </div>
  );
}
