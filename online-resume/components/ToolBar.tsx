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
import { useEffect, useRef } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Box, Button, useTheme } from "@mui/material";

const ToolBar = () => {
  const handleClickSave = () => {
    saveToDatabase();
  };

  const saveToDatabase = async () => {
    try {
      const content = rteRef.current?.editor?.getHTML();
      const response = await fetch(
        "https://online-resume-with-minimal-api.azurewebsites.net/api/summaries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        }
      );
      if (response.ok) {
        console.log("Content saved");
      } else {
        console.log("Failed to save content");
      }
    } catch (error) {
      console.log("Error saving content", error);
    }
  };

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
            content={"Add summary here..."} // Initial content for the editor
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
            // onClick={() => console.log(rteRef.current?.editor?.getHTML())}
            onClick={handleClickSave}
          >
            Save
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ToolBar;
