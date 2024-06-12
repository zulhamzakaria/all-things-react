import React, { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { PlusIcon, XIcon } from "lucide-react";
import { useDialog } from "@/lib/use-dialog";

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

const CreateExperience = () => {
  const { onClose } = useDialog();
  const { data, mutate, error } = useSWR(`/experiences`, fetcher);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [tasks, setTasks] = useState<Task[]>([{ task: "" }]);
  const [experiences, setExperiences] = useState<
    ExperiencesProps["experiences"]
  >([]);

  if (error) return <div>error fetching data</div>;

  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [data]);

  function handleEditTask(index: number, e: ChangeEvent<HTMLInputElement>) {
    const values = [...tasks];
    values[index].task = e.target.value;
    setTasks(values);
  }

  function handleAddTask() {
    setTasks([...tasks, { task: "" }]);
  }

  function handleDeleteTask(index: number) {
    const values = [...tasks];
    values.splice(index, 1);
    setTasks(values);
  }

  async function handleAddNewExperience() {
    if (!validateData()) return;
    setIsSubmitting(true);
    try {
      const newExp = {
        company: company,
        period: period,
        title: title,
        responsibilities: tasks,
      };

      const response = await fetch(`/experiences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exp: newExp }),
      });

      if (!response) {
        toast.error("Failed adding a new experience");
      }

      const updatedData = await response.json();
      mutate({ ...data, experiences: updatedData });
      onClose("create-experience");
      toast.success("New experience added");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function validateData(): boolean {
    if (
      company.trim() === "" ||
      period.trim() === "" ||
      title.trim() === "" ||
      tasks.length === 0
    ) {
      const response = confirm("Are you sure you want to add incomplete data?");

      if (response) return true;
      return false;
    }
    return true;
  }

  return experiences ? (
    <>
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
            <Label className=" font-sans mb-2">Responsibilities</Label>
          </div>
        </div>
        <div className=" flex flex-col">
          {tasks.map((task, index) => (
            <div key={index}>
              <div className=" flex flex-row mb-1">
                <div className=" flex items-center justify-center rounded-l-lg bg-slate-800 text-white w-10">
                  <Label htmlFor={`task-${index}`} className=" font-sans">
                    {index + 1}.
                  </Label>
                </div>
                <Input
                  id={`task-${index}`}
                  value={task.task}
                  onChange={(e) => {
                    handleEditTask(index, e);
                  }}
                  className=" rounded-r-none"
                />
                <Button
                  type="button"
                  onClick={() => handleDeleteTask(index)}
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
              onClick={() => handleAddTask()}
              className=" items-center my-2 text-gray-950 inline-flex rounded-full hover:bg-emerald-500 hover:text-white font-mono font-semibold"
            >
              <PlusIcon className="mr-2" />
              add responsibility
            </Button>
          </div>
        </div>
        <div className=" w-full flex justify-end">
          <Button
            type="submit"
            className=" px-10 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
            onClick={handleAddNewExperience}
            disabled={isSubmitting}
            
          >
            save
          </Button>
        </div>
      </div>
    </>
  ) : (
    "loading..."
  );
};

export default CreateExperience;
