import React from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ExperiencesProps {
  experiences: {
    period: string;
    title: string;
    company: string;
    responsibilities: {
      task: string;
    }[];
  }[];
}

const ExperiencesPage = () => {
  const { data, error } = useSWR<ExperiencesProps>("/experiences", fetcher);
  if (error) {
    return <h1>{error}</h1>;
  }

  return data ? (
    <div>
      <SlotTitle title="Experiences" />
      {/* {experiences.map((experience) => (
        <div>{experience.company}</div>
      ))} */}
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default ExperiencesPage;
