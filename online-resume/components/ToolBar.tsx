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
import { Box, Button } from "@mui/material";

const ToolBar = () => {
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        background: "transparent",
        "& > :not(style)": {
          width: 900,
        },
        ".btn:hover": {
          // class selector
          borderColor: "green",
          color: "white",
          background: "green",
        },
      }}
    >
      {" "}
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
            className="h-72 p-2"
          />
          <Button
            className="mt-6 bg-green-600 text-white btn"
            fullWidth
            onClick={() => console.log(rteRef.current?.editor?.getHTML())}
          >
            Log HTML
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ToolBar;
