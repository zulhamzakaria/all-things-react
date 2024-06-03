import { useState, useEffect } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { DeleteIcon, PlusIcon, XIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";

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

  const [tasks, setTasks] = useState([{ task: "" }]);

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
                <Button className="font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold">
                  edit experience
                </Button>
              </DialogTrigger>
              <DialogContent className=" lg:min-w-[800px] bg-gray-50">
                <DialogHeader className="">
                  <DialogTitle className=" text-2xl font-light my-10 flex justify-center">
                    EDIT EXPERIENCE
                  </DialogTitle>
                  <DialogDescription className=" font-sans font-light">
                    Make changes to the experience here. Click save once you're
                    done
                  </DialogDescription>
                </DialogHeader>

                <Separator className="bg-gray-950" />

                <div className=" flex flex-col">
                  <div className=" grid grid-cols-4 gap-4 mb-4 ">
                    <div className=" col-span-3 ">
                      <Label htmlFor="company" className=" font-sans mb-2">
                        Company
                      </Label>
                      <Input id="company" />
                    </div>
                    <div className=" col-span-1 ">
                      <Label htmlFor="period" className=" font-sans mb-2">
                        Period
                      </Label>
                      <Input id="period" />
                    </div>
                  </div>
                  <div className=" mb-4">
                    <div className=" flex flex-col">
                      <Label htmlFor="title" className=" font-sans mb-2">
                        Title
                      </Label>
                      <Input id="title" className="w-full" />
                    </div>
                  </div>
                  <div>
                    <div className=" flex flex-col">
                      <Label className=" font-sans mb-2">
                        Responsibilities
                      </Label>
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    {tasks.map((task, index) => (
                      <div key={index}>
                        <div className=" flex flex-row">
                          <div className=" items-center flex">
                            <Label
                              htmlFor={`task-${index}`}
                              className=" font-sans mr-2 font-light"
                            >
                              {index + 1}.
                            </Label>
                          </div>
                          <Input
                            id={`task-${index}`}
                            value={task.task}
                            onChange={() => {}}
                            className=" rounded-r-none"
                          />
                          <Button
                            type="button"
                            onClick={() => {}}
                            className=" bg-rose-500 text-white rounded-l-none"
                          >
                            <XIcon />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className=" w-full flex justify-center ">
                      <Button
                        type="button"
                        onClick={() => {}}
                        className=" items-center my-2 text-gray-950 inline-flex hover:bg-emerald-500 hover:text-white font-mono font-semibold"
                      >
                        <PlusIcon className="mr-2" />
                        add responsibility
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </SignedIn>
        </div>
      ))}
      <SignedIn>
        <Button className=" w-full font-mono rounded-lg bg-emerald-500  hover:bg-emerald-700 text-white font-semibold">
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
