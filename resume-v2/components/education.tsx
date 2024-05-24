import React from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import { Divide } from "lucide-react";
import LoadingCard from "./loading-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface EducationProps {
  institution: string;
  major: string;
}

const EducationPage = () => {
  const { data, error } = useSWR<EducationProps>("/education", fetcher);

  if (error) {
    return <h1>{error}</h1>;
  }

  return data ? (
    <div>
      <SlotTitle title="education" />
      {data.institution}
      {data.major}
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default EducationPage;
