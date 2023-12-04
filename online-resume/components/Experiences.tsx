import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Experiences = () => {
  const [experiences, setExperiences] = useState("");
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/experiences",
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      setExperiences(data);
    }
  }, [isLoading, data]);
  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  if (isLoading) return <div>loading data...</div>;
  return (
    <div className="pl-5 pt-1 text-sm text-justify w-full">{experiences}</div>
  );
};

export default Experiences;
