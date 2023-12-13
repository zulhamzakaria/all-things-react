"use client";
import { ExperienceProps } from "@/utils/props";
import { Paper, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";

interface pageProps {
  params: { id: number };
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const UpdateExperience: FC<pageProps> = ({ params }) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [experience, setExperience] = useState<ExperienceProps | null>(null);
  const { data, error, isLoading } = useSWR<ExperienceProps>(
    `https://online-resume-with-minimal-api.azurewebsites.net/api/experiences/${params.id}`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      // setExperience(data);
      setCompanyName(data.companyName ?? "Missing company's name...");
      setJobTitle(data.jobTitle ?? "Missing job title...");
      setPeriod(data.period ?? "Missing period...");
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
      <Paper elevation={0} className="mt-2">
        {/* <div>id: {experience?.id}</div>
        <div>Company Name: {experience?.companyName}</div> */}
        <div className="text-end pt-10 bg-blue-900"></div>
        <div className="text-center pb-6 font-bold text-3xl text-white bg-gradient-to-b from-blue-900 to-blue-950">
          EXPERIENCE
        </div>
        <div className="mr-1 ml-1 mt-5">
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
              className="mt-5 flex-grow mb-1"
              required
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default UpdateExperience;
