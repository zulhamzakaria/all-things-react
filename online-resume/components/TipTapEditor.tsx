import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>tiptap</p>",
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <ToolBar />
      {/* <EditorContent editor={editor} /> */}
    </div>
  );
};

export default TipTapEditor;
