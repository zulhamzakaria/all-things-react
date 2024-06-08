import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CreateExperience = () => {
  const { data, error } = useSWR(`/experiences`, fetcher);

  if (error) return <div>error fetching data</div>;

  return data ? <div>basic-create-experience</div> : "loading...";
};

export default CreateExperience;
