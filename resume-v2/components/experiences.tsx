import { useState, useEffect, ChangeEvent } from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PlusIcon, SaveAllIcon, XIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { toast } from "sonner";
import DialogContainer from "./dialog-container";
import CreateExperience from "./experiences/create-experience";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ExperiencesProps {
  experiences: {
    id: number;
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
  const { data, isLoading, error, mutate } = useSWR<ExperiencesProps>(
    "/experiences",
    fetcher
    // { revalidateOnMount: true }
  );

  const [tasks, setTasks] = useState<Task[]>([]);
  const [company, setCompany] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [resumeExperiences, setResumeExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  useEffect(() => {
    if (data) {
      setResumeExperiences(data.experiences);
      const firstExperience = data.experiences[0];
      if (firstExperience) {
        setTasks(firstExperience.responsibilities);
      }
    }
  }, [data]);

  const handleEdit = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const values = [...tasks];
    values[index].task = e.target.value;
    setTasks(values);
  };

  function handleSaveNewExperience() {
    toast.success("new exp added");
  }

  const handleAdd = () => {
    setTasks([...tasks, { task: "" }]);
  };

  const handleRemove = (index: number) => {
    const values = [...tasks];
    values.splice(index, 1);
    setTasks(values);
  };

  async function handleSaveEdit(index: number, id: number) {
    const addedTasks = tasks.filter((task) => task.task.trim() !== "");
    const updatedExperiences = [...resumeExperiences];

    if (updatedExperiences[index]) {
      updatedExperiences[index].responsibilities = addedTasks;
      updatedExperiences[index].company = company;
      updatedExperiences[index].period = period;
      updatedExperiences[index].title = title;
    }

    try {
      const response = await fetch(`/experiences/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exp: updatedExperiences[index] }),
      });

      if (!response.ok) {
        toast.error("Failed to update experience");
      }

      const updatedData = await response.json();
      mutate({ ...data, experiences: updatedData });
      mutate({ ...resumeExperiences, experiences: updatedData });
      // alert(JSON.stringify(data?.experiences[index], null, 2));
      // alert(JSON.stringify(resumeExperiences[index], null, 2));

      toast.success("Experience updated");
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  const handleEditDialog = (index: number) => {
    const experience = resumeExperiences[index];
    if (experience) {
      setTasks(experience.responsibilities);
      setCompany(experience.company);
      setPeriod(experience.period);
      setTitle(experience.title);
    }
  };

  const confirmDelete = (index: number, id: number) => {
    handleDelete(index, id);
  };

  async function handleDelete(index: number, id: number) {
    try {
      const response = await fetch(`experiences/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        toast.error("Failed to delete experience");
      }
      const updatedData = await response.json();
      mutate({ ...data, experiences: updatedData });
      // mutate({ ...resumeExperiences, experiences: updatedData });
      toast.success("Experience deleted");
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return resumeExperiences && !isLoading ? (
    <div>
      <SlotTitle title="Experiences" />
      {resumeExperiences.map((experience, index) => (
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
              <div className=" flex justify-end mb-10 w-full">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className=" hover:text-red-600 font-mono font-semibold hover:underline">
                      delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" bg-slate-50">
                    <AlertDialogHeader>
                      <AlertDialogTitle className=" text-slate-900">
                        Are you sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-slate-800">
                        This will delete the entry permanently.
                      </AlertDialogDescription>
                      <AlertDialogFooter className="pt-5">
                        <AlertDialogCancel className=" text-slate-900 rounded-full border-solid border-2 border-black font-mono font-semibold hover:bg-black hover:text-white">
                          cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            confirmDelete(index, experience.id);
                          }}
                          className=" text-slate-900 font-mono font-semibold hover:text-red-600 hover:underline"
                        >
                          confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>

                <DialogTrigger asChild>
                  <Button
                    onClick={() => handleEditDialog(index)}
                    className="font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold"
                  >
                    edit experience
                  </Button>
                </DialogTrigger>
              </div>
              <DialogContent className=" lg:min-w-[800px] bg-gray-50 overflow-auto h-screen">
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
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      />
                    </div>
                    <div className=" col-span-1 ">
                      <Label htmlFor="period" className=" font-sans mb-2">
                        Period
                      </Label>
                      <Input
                        id="period"
                        value={period}
                        onChange={(e) => {
                          setPeriod(e.target.value);
                        }}
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
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
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
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      onClick={() => handleSaveEdit(index, experience.id)}
                      className=" mt-10 font-mono rounded-lg w-full bg-emerald-500  hover:bg-emerald-700 text-white font-semibold"
                    >
                      <SaveAllIcon className=" mr-2" />
                      save
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SignedIn>
        </div>
      ))}
      <SignedIn>
        <DialogContainer
          dialogTitle="add experience"
          dialogDescription="For adding experience. Click save once done."
          onSave={handleSaveNewExperience}
        >
          <Button className=" w-full font-mono rounded-lg  hover:bg-emerald-700 hover:text-white font-semibold">
            <PlusIcon className=" mr-2" />
            add new experience
          </Button>
          <CreateExperience />
        </DialogContainer>
      </SignedIn>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default ExperiencesPage;
