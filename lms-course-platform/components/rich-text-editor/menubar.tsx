import { type Editor } from "@tiptap/react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import { Bold } from "lucide-react";

interface MenubarProps {
  editor: Editor | null;
}

export function Menubar({ editor }: MenubarProps) {
  if (!editor) return null;
  return (
    <div>
      <TooltipProvider>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle>
                <Bold />
              </Toggle>
            </TooltipTrigger>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
