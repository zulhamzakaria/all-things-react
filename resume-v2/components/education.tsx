import React, { useEffect, useState } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import { SignedIn } from "@clerk/nextjs";
import DialogContainer from "./dialog-container";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import CreateEducation from "./educations/create-education";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface EducationProps {
  id: number;
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
      alert(JSON.stringify(data));

      setResumeEducations(data);
    }
  }, [data]);

  return resumeEducations && !isLoading ? (
    <>
      <SlotTitle title="education" />
      <div className=" mb-1">
        {resumeEducations.map((edu, index) => (
          <div className="" key={index}>
            <p className="font-light">{edu.institution.toUpperCase()}</p>
            <p className="font-semibold text-gray-900">{edu.major}</p>
          </div>
        ))}
      </div>
      <SignedIn>
        <DialogContainer
          dialogTitle="add educations"
          dialogDescription="For adding education(s). Click save once done."
          dialogId="create-education"
        >
          <Button className=" mt-10 w-full font-mono rounded-full  hover:bg-emerald-700 hover:text-white font-semibold">
            <PlusIcon className=" mr-2" />
            add new education
          </Button>
          <CreateEducation />
        </DialogContainer>
      </SignedIn>
    </>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default EducationPage;
