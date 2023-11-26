"use client";

import { Editor } from "@tiptap/react";
import { Bold, List, Strikethrough, ListOrdered, Heading2 } from "lucide-react";

type Props = {
  editor: Editor | null;
};

const ToolBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return <div>ToolBar</div>;
};

export default ToolBar;
