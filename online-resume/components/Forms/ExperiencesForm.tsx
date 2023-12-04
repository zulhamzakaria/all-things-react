import React, { useState } from "react";
import TipTapEditor from "../TipTapEditor";
import { Paper, TextField } from "@mui/material";

const ExperiencesForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [period, setPeriod] = useState("");
  return (
    <Paper elevation={0} className="bg-transparent">
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
      <div>
        <TipTapEditor endpoint="experiences" />
      </div>
    </Paper>
  );
};

export default ExperiencesForm;
