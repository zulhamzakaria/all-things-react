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
  const { data, error } = useSWR(`/experiences`, fetcher);

  const [experiences, setExperiences] =
    useState<ExperiencesProps["experiences"]>(data);
  if (error) return <div>error fetching data</div>;

  useEffect(() => {
    if (data) {
      setExperiences(data);
    }
  }, [data]);

  return data ? (
    <div>basic-create-experience {experiences.length}</div>
  ) : (
    "loading..."
  );
};

export default CreateExperience;
