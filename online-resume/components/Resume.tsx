"use client";
import useAuthStore from "@/stores/authstore";
import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import DialogOpener from "./DialogOpener";
import Summary from "./Summary";
import Skills from "./Skills";
import Experiences from "./Experiences";

const Resume = () => {
  const isAuthenticated = useAuthStore((state) => {
    return state.isAuthenticated;
  });

  const [dialogOpener, setDialogOpener] = useState({
    summary: false,
    skills: false,
    experiences: false,
  });
  const handleOpenDialog = (dialogType: string) => {
    setDialogOpener((prev) => ({
      ...prev,
      [dialogType]: true,
    }));
  };
  const handleCloseDialog = (event: React.MouseEvent, dialogType: string) => {
    event.stopPropagation();
    setDialogOpener((prev) => ({
      ...prev,
      [dialogType]: false,
    }));
  };
  return (
    <div>
      <Paper
        sx={{
          width: 595,
          height: 842,
          maxHeight: "100%",
          maxWidth: "100%",
          ".btn:hover": {
            borderColor: "green",
            color: "white",
            background: "green",
          },
        }}
        className="mt-2"
      >
        <div className="mt-2 mr-8 ml-8">
          <div className="text-center pt-5">
            <h1 className="mt-7 font-satoshi text-black text-xl font-extrabold">
              MOHD ZULHAM BIN ZAKARIA
            </h1>
            <h2 className="mt-1 mb-2 text-gray font-mono font-semibold text-xs">
              +60109185300 | m.zulham.zakaria@gmail.com | Malaysian
            </h2>
          </div>

          <div className="mt-5 ml-1 font-satoshi text-black text-left font-extrabold">
            SUMMARY
          </div>
          <div className="flex flex-col justify-center items-center">
            <Box
              sx={{
                width: "100%",
                height: 5,
                bgcolor: "crimson",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: 1.5,
                bgcolor: "navy",
              }}
            />
          </div>
          {isAuthenticated && (
            <div
              className="w-full text-right"
              onClick={() => handleOpenDialog("summary")}
            >
              <EditOutlined
                sx={{ height: 15, width: 15 }}
                className="mr-1 mb-1"
              />
              <DialogOpener
                open={dialogOpener.summary}
                onCloseDialog={(event) => handleCloseDialog(event, "summary")}
                form="SummaryForm"
                title="Summary"
              />
            </div>
          )}
          <div>
            <Summary />
          </div>

          <div className="mt-5 ml-1 font-arial text-black text-left font-semibold">
            KEY SKILLS
          </div>
          <div className="flex flex-col justify-center items-center">
            <Box
              sx={{
                width: "100%",
                height: 5,
                bgcolor: "darkred",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: 1.1,
                bgcolor: "darkgrey",
              }}
            />
          </div>
          {isAuthenticated && (
            <div
              className="w-full text-right"
              onClick={() => handleOpenDialog("skills")}
            >
              <EditOutlined
                sx={{ height: 15, width: 15 }}
                className="mr-1 mb-1"
              />
              <DialogOpener
                open={dialogOpener.skills}
                onCloseDialog={(event) => handleCloseDialog(event, "skills")}
                form="SkillsForm"
                title="Skills"
              />
            </div>
          )}
          <div>
            <Skills />
          </div>

          <div className="mt-5 ml-1 font-arial text-black text-left font-semibold">
            EXPERIENCES
          </div>
          <div className="flex flex-col justify-center items-center">
            <Box
              sx={{
                width: "100%",
                height: 5,
                bgcolor: "darkred",
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: 1.1,
                bgcolor: "darkgrey",
              }}
            />
          </div>
          {isAuthenticated && (
            <div
              className="w-full text-right"
              onClick={() => handleOpenDialog("experiences")}
            >
              <EditOutlined
                sx={{ height: 15, width: 15 }}
                className="mr-1 mb-1"
              />
              <DialogOpener
                open={dialogOpener.experiences}
                onCloseDialog={(event) =>
                  handleCloseDialog(event, "experiences")
                }
                form="ExperiencesForm"
                title="Experiences"
              />
            </div>
          )}
          <div>
            <Experiences />
          </div>
          {isAuthenticated && (
            <div
              className="w-full mt-5"
              onClick={() => handleOpenDialog("experiences")}
            >
              <Button
                variant="contained"
                fullWidth
                className="bg-green-600 btn"
              >
                Add Experience
              </Button>
              <DialogOpener
                open={dialogOpener.experiences}
                onCloseDialog={(event) =>
                  handleCloseDialog(event, "experiences")
                }
                form="ExperiencesForm"
                title="Experiences"
              />
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Resume;
