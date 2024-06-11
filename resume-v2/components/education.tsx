import React, { useEffect, useState } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface EducationProps {
  institution: string;
  major: string;
}

const EducationPage = () => {
  const { data, mutate, isLoading, error } = useSWR<EducationProps[]>(
    "/education",
    fetcher
  );
  const [resumeEducations, setResumeEducations] = useState<EducationProps[]>(
    []
  );
  if (error) {
    return <h1>{error}</h1>;
  }

  useEffect(() => {
    if (data) {
      setResumeEducations(data);
    }
  }, [data]);

  return resumeEducations && !isLoading ? (
    <>
      <SlotTitle title="education" />
      {resumeEducations.map((edu, index) => {
        <div className="" key={index}>
          <p className="font-light">{edu.institution.toUpperCase()}</p>
          <p className="font-semibold text-gray-900">{edu.major}</p>
        </div>;
      })}
    </>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default EducationPage;
