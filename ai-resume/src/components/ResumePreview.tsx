import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
    >
      <h1 className="p-6 text-3xl font-bold">
        this text should change with the size of the container div
      </h1>
    </div>
  );
}
