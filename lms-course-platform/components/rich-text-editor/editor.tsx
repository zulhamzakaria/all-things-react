"use client";

import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Menubar } from "./menubar";

export function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
  });
  return (
    <div>
      <Menubar editor={editor} />
    </div>
  );
}
