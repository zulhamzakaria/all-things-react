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
    <div className="text-destructive text-center ">
      <ImageIcon size={"10"} className="mx-auto mb-3" />
    </div>
  );
}
