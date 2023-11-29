"use client";
import useAuthStore from "@/stores/authstore";
import { EditOutlined } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useState } from "react";
import DialogOpener from "./DialogOpener";
import Summary from "./Summary";

const Resume = () => {
  const isAuthenticated = useAuthStore((state) => {
    return state.isAuthenticated;
  });
  const [dialogOpener, setDialogOpener] = useState(false);
  const handleOpenDialog = () => {
    setDialogOpener(true);
  };
  const handleCloseDialog = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDialogOpener(false);
  };
  return (
    <div>
      <Paper
        sx={{ width: 595, height: 842, maxHeight: "100%", maxWidth: "100%" }}
        className="mt-2"
      >
        <div className="mt-2 mr-8 ml-8">
          <div className="text-center pt-5">
            <h1 className="mt-10 font-inter text-black text-lg font-bold">
              MOHD ZULHAM BIN ZAKARIA
            </h1>
            <h2 className="mt-2 mb-2 text-gray text-xs font-thin">
              +60109185300 | m.zulham.zakaria@gmail.com | .NET Developer |
              Malaysian
            </h2>
          </div>

          <div className="mt-7 font-arial text-black text-left font-semibold">
            SUMMARY
          </div>

          <div className="flex justify-center items-center">
            <Box
              sx={{
                width: "100%",
                height: 5,
                bgcolor: "error.main",
              }}
            />
          </div>

          {isAuthenticated && (
            <div className="w-full text-right" onClick={handleOpenDialog}>
              <EditOutlined
                sx={{ height: 15, width: 15 }}
                className="mr-1 mb-1"
              />
              <DialogOpener
                open={dialogOpener}
                onCloseDialog={handleCloseDialog}
                form="SummaryForm"
                title="Summary"
              />
            </div>
          )}

          <div>
            <Summary />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Resume;
