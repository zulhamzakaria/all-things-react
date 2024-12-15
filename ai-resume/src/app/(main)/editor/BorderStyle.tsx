import { Button } from "@/components/ui/button";
import { Squircle } from "lucide-react";

interface BorderStyleProps {
  borderStyle: string | undefined;
  onChange: (borderStyle: string) => void;
}

export default function BorderStyle({
  borderStyle,
  onChange,
}: BorderStyleProps) {
  function handleClick() {}

  return (
    <div>
      <Button
        variant={"outline"}
        size={"icon"}
        title="Change border style"
        onClick={handleClick}
      >
        <Squircle className="size-5" />
      </Button>
    </div>
  );
}
