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
  if (isLoading) return <div>Loading data...</div>;
  return (
    <div className="pl-5 pt-1 text-sm text-justify w-full">
      {/* {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))} */}
      {skills.join(",")}
    </div>
  );
};

export default Skills;
