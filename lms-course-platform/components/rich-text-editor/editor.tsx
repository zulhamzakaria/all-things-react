"use client";

import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Menubar } from "./menubar";
import TextAlign from "@tiptap/extension-text-align";

export function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    immediatelyRender: false,
  });
  return (
    <div>
      <Menubar editor={editor} />
    </div>
  );
}
