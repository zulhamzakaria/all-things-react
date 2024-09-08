"use client";

import { EditorContent, EditorRoot, JSONContent } from "novel";
import { defaultExtensions } from "./extensions";

interface EditorProps {
  initialValue?: JSONContent;
  onChange: (value: JSONContent) => void;
}

const extensions = [...defaultExtensions];

const TailwindEditor = ({ initialValue, onChange }: EditorProps) => {
  return (
    <EditorRoot>
      <EditorContent
        extensions={extensions}
        initialContent={initialValue}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          onChange(json);
        }}
      />
    </EditorRoot>
  );
};
export default TailwindEditor;
