"use client";

import { UseSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { BringToFront, SendToBack, Trash2 } from "lucide-react";

interface SelectionToolProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTool = memo(
  ({ camera, setLastUsedColor }: SelectionToolProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayersId = storage.get("layerIds");
        const indices: number[] = [];

        const tempArr = liveLayersId.toArray();

        for (let i = 0; i < tempArr.length; i++) {
          if (selection.includes(tempArr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayersId.move(indices[i], i);
        }
      },
      [selection]
    );

    const bringToFront = useMutation(
      ({ storage }) => {
        const liveLayersId = storage.get("layerIds");
        const indices: number[] = [];

        const tempArr = liveLayersId.toArray();

        for (let i = 0; i < tempArr.length; i++) {
          if (selection.includes(tempArr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayersId.move(
            indices[i],
            tempArr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor]
    );

    const selectionBounds = UseSelectionBounds();

    if (!selectionBounds) {
      return;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    const deleteLayer = useDeleteLayers();

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(calc(${x}px-50%), calc(${y - 16}px-100%))`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className=" flex flex-col gap-y-0.5">
          <Hint label="Bring to front">
            <Button variant={"board"} size={"icon"} onClick={bringToFront}>
              <BringToFront />
            </Button>
          </Hint>
          <Hint label="Send to back">
            <Button variant={"board"} size={"icon"} onClick={moveToBack}>
              <SendToBack />
            </Button>
          </Hint>
        </div>
        <div className=" flex items-center pl-2 ml-2 border-l border-neutral-200">
          <Hint label="Delete">
            <Button variant={"board"} size={"icon"} onClick={deleteLayer}>
              <Trash2 />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTool.displayName = "SelectionTool";
