import { Button } from "@/components/ui/button";
import { Circle, Square, Squircle } from "lucide-react";

interface BorderStyleProps {
  borderStyle: string | undefined;
  onChange: (borderStyle: string) => void;
}

export const BorderStyles = {
  SQUARE: "square",
  CIRCLE: "circle",
  SQUIRCLE: "squircle",
};

// turns BorderStyles to array
const borderStyles = Object.values(BorderStyles);

export default function BorderStyle({
  borderStyle,
  onChange,
}: BorderStyleProps) {
  function handleClick() {
    const currentIndex = borderStyle ? borderStyles.indexOf(borderStyle) : 0;
    //safeguard the index
    const nextIndex = (currentIndex + 1) % borderStyles.length;
    onChange(borderStyles[nextIndex]);
  }

  const Icon =
    borderStyle === "square"
      ? Square
      : borderStyle === "circle"
        ? Circle
        : Squircle;

  return (
    <div>
      <Button
        variant={"outline"}
        size={"icon"}
        title="Change border style"
        onClick={handleClick}
      >
        <Icon className="size-5" />
      </Button>
    </div>
  );
}
