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
      {data.experiences.map((experience) => (
        <>
          <div className=" justify-between flex">
            <p className="font-light">
              {experience.company.toLocaleUpperCase()}
            </p>
            <p className="mr-2 font-light">{experience.period}</p>
          </div>
          <div className=" font-semibold text-gray-900">{experience.title}</div>
          <div className="mb-5">
            {experience.responsibilities.map((responsibility) => (
              <li className="ml-10 font-thin font-sans ">
                {responsibility.task}
              </li>
            ))}
          </div>
        </>
      ))}
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default ExperiencesPage;
