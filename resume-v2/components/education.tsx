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
    <>
      <SlotTitle title="education" />
      <div className="">
        <p className="font-light">{data.institution.toUpperCase()}</p>
        <p className="font-semibold text-gray-900">{data.major}</p>
      </div>
    </>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default EducationPage;
