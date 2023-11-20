"use client";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Resume = () => {
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
                height: 3,
                borderRadius: 1,
                bgcolor: "error.main",
              }}
            />
          </div>
          <div className="container mt-2">
            <ul className="mt-2 ml-5 list-inside list-disc">
              <li className="text-sm">cock</li>
            </ul>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Resume;
