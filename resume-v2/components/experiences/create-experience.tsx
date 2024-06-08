import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Button } from "../ui/button";
import { toast } from "sonner";

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
  const { data, mutate, error } = useSWR(`/experiences`, fetcher);

  const [experiences, setExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  if (error) return <div>error fetching data</div>;

  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [data]);

  const newExp = {
    period: "2009-01 ~ 2011-09",
    title: "Application Developer",
    company: "Edaran IT Servicos Sdn Bhd, Desa Pandan",
    responsibilities: [
      {
        task: "Task A",
      },
      {
        task: "Task B",
      },
    ],
  };

  async function handleAddExperience() {
    try {
      const response = await fetch(`/experiences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exp: newExp }),
      });

      if (!response) {
        toast.error("Failed adding a new exp");
      }

      const updatedData = await response.json();
      mutate({ ...data, experiences: updatedData });
      toast.success("new exp added");
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  return experiences ? (
    <div>
      <Button onClick={handleAddExperience}>add exp</Button>
      <span>there are {experiences.length} exps now</span>
    </div>
  ) : (
    "loading..."
  );
};

export default CreateExperience;
