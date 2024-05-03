"use client";

import { Camera, Color } from "@/types/canvas";
import { memo } from "react";

interface SelectionToolProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTool = memo(
  ({ camera, setLastUsedColor }: SelectionToolProps) => {
    return <div>Selection Tool</div>;
  }
);

SelectionTool.displayName = "SelectionTool";
