"use client";
import { ExperienceProps } from "@/utils/props";
import { Box, Button, Paper, TextField } from "@mui/material";
import { Editor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  RichTextEditorRef,
} from "mui-tiptap";
import { FC, useEffect, useRef, useState } from "react";
import useSWR from "swr";

interface pageProps {
  params: { id: number };
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const UpdateExperience: FC<pageProps> = ({ params }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [content, setContent] = useState("");
  const rteRef = useRef<RichTextEditorRef>(null);

  const { data, error, isLoading } = useSWR<ExperienceProps>(
    `https://online-resume-with-minimal-api.azurewebsites.net/api/experiences/${params.id}`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      setCompanyName(data.companyName ?? "Missing company's name...");
      setJobTitle(data.jobTitle ?? "Missing job title...");
      setPeriod(data.period ?? "Missing period...");
      setContent(data.responsibility ?? "Missing responsibility...");
    }
  }, [isLoading, data]);

  if (error) {
    return <div>Error loading data... (`${error.message}`)</div>;
  }
  if (isLoading) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      <Paper elevation={10} className="mt-2">
        <div className="text-end pt-10 bg-blue-900"></div>
        <div className="text-center pb-6 font-bold text-3xl text-white bg-gradient-to-b from-blue-900 to-blue-950">
          EXPERIENCE
        </div>
        <div className="mr-1 ml-1 mt-5 ">
          <div className="flex items-center flex-col">
            <TextField
              id="standard-basic"
              label="Company Name"
              variant="outlined"
              className="mt-5"
              fullWidth
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              id="standard-basic"
              label="Job Title"
              variant="outlined"
              className="mt-5 flex-grow"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Period"
              variant="outlined"
              className="mt-5 flex-grow"
              required
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center mt-3">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                background: "transparent",
                "& > :not(style)": {
                  width: 800,
                },
                ".btn:hover": {
                  // class selector
                  borderColor: "green",
                  color: "white",
                  background: "green",
                },
              }}
            >
              <RichTextEditor
                ref={rteRef}
                extensions={[StarterKit]} // Or any Tiptap extensions you wish!
                content={content.valueOf} // Initial content for the editor
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
                className="p-2 mt-2 h-96"
              />
            </Box>
            <Button
              className="mt-1 mb-1 bg-green-600 text-white btn"
              fullWidth
              // onClick={() => console.log(rteRef.current?.editor?.getHTML())}
              onClick={() => {}}
            >
              Save
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default UpdateExperience;
