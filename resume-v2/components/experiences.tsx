import React from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ExperiencesPage = () => {
  const { data, error } = useSWR("/experiences", fetcher);

  return (
    <div>
      <SlotTitle title="Experiences" />
      Experiences Page
    </div>
  );
};

export default ExperiencesPage;
