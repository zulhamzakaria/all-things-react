"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className=" flex flex-col gap-2 items-center max-w-[164px] pr-2 mr-2 border-2 border-neutral-200">
      <ColorButton onClick={onChange} color={{ r: 255, g: 234, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 234, b: 199 }} />
      <ColorButton onClick={onChange} color={{ r: 1, g: 0, b: 199 }} />
      <ColorButton onClick={onChange} color={{ r: 1, g: 150, b: 150 }} />
      <ColorButton onClick={onChange} color={{ r: 17, g: 10, b: 85 }} />
    </div>
  );
};

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
