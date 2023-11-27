import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>tiptap</p>",
  });
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            editor?.chain().focus().toggleBold().run();
          }}
        >
          Bold
        </Button>
      </div>
    </div>
  );
};

export default TipTapEditor;
