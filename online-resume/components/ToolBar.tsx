"use client";

import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonBulletedList,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef,
} from "mui-tiptap";
import { useRef } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@mui/material";

const ToolBar = () => {
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <div className="border border-input bg-transparent">
      <div>
        <RichTextEditor
          ref={rteRef}
          extensions={[StarterKit]} // Or any Tiptap extensions you wish!
          content="Add summary here..." // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => (
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              <MenuButtonBulletedList />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          )}
        />
        <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
          Log HTML
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
