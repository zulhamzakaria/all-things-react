"use client";

import { UseSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";

interface SelectionToolProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTool = memo(
  ({ camera, setLastUsedColor }: SelectionToolProps) => {
    const selection = useSelf((me) => me.presence.selection);
    const selectionBounds = UseSelectionBounds();

    if (!selectionBounds) {
      return;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(calc(${x}px-50%), calc(${y - 16}px-100%))`,
        }}
      >
        <ColorPicker onChange={() => {}} />
      </div>
    );
  }
);

SelectionTool.displayName = "SelectionTool";