"use client";

import { TextEditorProps } from "@/utils/props";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TextEditor = ({ description, onChange }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
