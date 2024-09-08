"use client";

import { EditorContent, EditorRoot, JSONContent } from "novel";

interface EditorProps {
  initialValue?: JSONContent;
  onChange: (value: JSONContent) => void;
}

const TailwindEditor = ({ initialValue, onChange }: EditorProps) => {
  return (
    <EditorRoot>
      <EditorContent
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
