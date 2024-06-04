import { useState, useEffect, ChangeEvent } from "react";
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
import { PlusIcon, SaveAllIcon, XIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
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

interface Task {
  task: string;
}

const ExperiencesPage = () => {
  const { data, isLoading, error } = useSWR<ExperiencesProps>(
    "/experiences",
    fetcher
  );

  const [tasks, setTasks] = useState<Task[]>([{ task: "" }]);

  const [resumeExperiences, setResumeExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  useEffect(() => {
    if (data) {
      setResumeExperiences(data.experiences);
    }
  }, [data]);

  const handleEdit = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const values = [...tasks];
    values[index].task = e.target.value;
    setTasks(values);
  };

  const handleAdd = () => {
    setTasks([...tasks, { task: "" }]);
  };

  const handleRemove = (index: number) => {
    const values = [...tasks];
    values.splice(index, 1);
    setTasks(values);
  };

  const handleSave = () => {
    const addedTasks = tasks.filter((task) => task.task.trim() !== "");
  };

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
              <DialogTrigger asChild className=" flex justify-end mb-10">
                <Button className="font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold">
                  edit experience
                </Button>
              </DialogTrigger>
              <DialogContent className=" lg:min-w-[800px] bg-gray-50">
                <DialogHeader className="">
                  <DialogTitle className=" text-4xl font-light my-10 flex justify-center">
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
                      <Input
                        id="company"
                        value={experience.company}
                        onChange={() => {}}
                      />
                    </div>
                    <div className=" col-span-1 ">
                      <Label htmlFor="period" className=" font-sans mb-2">
                        Period
                      </Label>
                      <Input
                        id="period"
                        value={experience.period}
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className=" mb-4">
                    <div className=" flex flex-col">
                      <Label htmlFor="title" className=" font-sans mb-2">
                        Title
                      </Label>
                      <Input
                        id="title"
                        className="w-full"
                        value={experience.title}
                        onChange={() => {}}
                      />
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
                        <div className=" flex flex-row mb-1">
                          <div className=" flex items-center justify-center rounded-l-lg bg-slate-800 text-white w-10">
                            <Label
                              htmlFor={`task-${index}`}
                              className=" font-sans"
                            >
                              {index + 1}.
                            </Label>
                          </div>
                          <Input
                            id={`task-${index}`}
                            value={task.task}
                            onChange={(e) => {
                              handleEdit(index, e);
                            }}
                            className=" rounded-r-none"
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              handleRemove(index);
                            }}
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
                        onClick={handleAdd}
                        className=" items-center my-2 text-gray-950 inline-flex hover:bg-emerald-500 hover:text-white font-mono font-semibold"
                      >
                        <PlusIcon className="mr-2" />
                        add responsibility
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleSave}
                  className=" mt-10 font-mono rounded-lg bg-emerald-500  hover:bg-emerald-700 text-white font-semibold"
                >
                  <SaveAllIcon className=" mr-2" />
                  save
                </Button>
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
