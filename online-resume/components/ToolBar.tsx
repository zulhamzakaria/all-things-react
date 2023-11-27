"use client";

import { Editor } from "@tiptap/react";
import { Bold, List, Strikethrough, ListOrdered, Heading2 } from "lucide-react";
import { Toggle } from "./ui/toggle";

type Props = {
  editor: Editor | null;
};

const ToolBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border border-input bg-transparent">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default ToolBar;
