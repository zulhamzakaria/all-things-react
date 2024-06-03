import { useState, useEffect } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PenIcon, PlusIcon } from "lucide-react";

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
                <Button className="font-mono rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  edit experience
                </Button>
              </DialogTrigger>
            </Dialog>
          </SignedIn>
        </div>
      ))}
      <SignedIn>
        <Button className="font-mono rounded-full bg-emerald-600  hover:bg-emerald-700 text-white font-semibold">
          <PlusIcon className=" mr-2" />
          add new experience
        </Button>
      </SignedIn>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default ExperiencesPage;
