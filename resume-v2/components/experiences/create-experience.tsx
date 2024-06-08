import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
interface ExperiencesProps {
  experiences: {
    id: number;
    period: string;
    title: string;
    company: string;
    responsibilities: {
      task: string;
    }[];
  }[];
}

const CreateExperience = () => {
  const { data, isLoading, error } = useSWR(`/experiences`, fetcher);

  const [experiences, setExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  if (error) return <div>error fetching data</div>;

  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [data]);

  return data ? (
    <div>
      Cock
      {experiences.map((exp) => (
        <div>{exp.id}</div>
      ))}
    </div>
  ) : (
    "loading..."
  );
};

export default CreateExperience;
