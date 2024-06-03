import { useState, useEffect } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";

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
  const { data, isLoading, error } = useSWR<ExperiencesProps>(
    "/experiences",
    fetcher
  );

  const [resumeExperiences, setResumeExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  useEffect(() => {
    if (data) {
      setResumeExperiences(data.experiences);
    }
  }, [data]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return resumeExperiences && !isLoading ? (
    <div>
      <SlotTitle title="Experiences" />
      {resumeExperiences.map((experience) => (
        <div
          key={`${experience.company}_${experience.period}`}
          className="mb-2"
        >
          <div className=" justify-between flex">
            <p className="font-light ">
              {experience.company.toLocaleUpperCase()}
            </p>
            <p className="mr-2 font-light lg:block sm:hidden text-sm">
              {experience.period}
            </p>
          </div>
          <div className=" font-semibold text-gray-900">{experience.title}</div>
          <div className="mb-5">
            {experience.responsibilities.map((responsibility) => (
              <li
                className="ml-10 font-thin font-sans "
                key={responsibility.task}
              >
                {responsibility.task}
              </li>
            ))}
          </div>
          <SignedIn>
            <Dialog>
              <DialogTrigger className=" flex justify-end mb-10 w-full">
                <Button className="font-mono rounded-full bg-rose-500 text-white font-semibold">
                  edit experience
                </Button>
              </DialogTrigger>
            </Dialog>
          </SignedIn>
        </div>
      ))}
      <Button className="font-mono w-full rounded-sm bg-blue-800 text-white font-semibold">
        add new experience
      </Button>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default ExperiencesPage;
