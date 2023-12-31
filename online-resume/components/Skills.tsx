import useSWR from "swr";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/skills",
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      setSkills(data);
    }
  }, [isLoading, data]);

  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  if (isLoading)
    return (
      <div className="pl-5 pt-1 text-xs font-extrabold font-mono text-justify w-full">
        Loading skills...
      </div>
    );
  return (
    <div className="pt-1 text-xs font-extrabold font-mono text-justify w-full">
      {skills}
    </div>
  );
};

export default Skills;
