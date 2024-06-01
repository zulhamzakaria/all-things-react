import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface SkillsProps {
  skills: {
    id: number;
    skill: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SkillsPage = () => {
  const { data, mutate, isLoading, error } = useSWR<SkillsProps>(
    "/skills",
    fetcher
  );
  const [resumeSkills, setResumeSkills] = useState(data?.skills || []);
  const [updatedSkill, setUpdatedSkill] = useState<string>("");
  const [newSkill, setNewSkill] = useState<string>("");

  useEffect(() => {
    if (data?.skills) setResumeSkills(data.skills);
  }, [data?.skills]);

  async function handleAdd() {
    try {
      const response = await fetch("/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill: newSkill }),
      });
      if (!response.ok) {
        toast.error("Failed to add new skill", error);
      }
      const updatedData = await response.json();
      mutate({ ...data, skills: updatedData });
      // console.log(resumeSkills.length);
      // console.log(data?.skills.length);
      // console.log(updatedData.length);
      toast.success("New skill added");
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  async function handleEdit(index: number, id: number) {
    try {
      const response = await fetch(`/skills/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill: updatedSkill }),
      });
      if (!response.ok) {
        toast.error("Failed to update skill.");
      }
      const updatedData = await response.json();
      mutate({ ...resumeSkills, skills: updatedData }, false);
      // console.log(resumeSkills);
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  if (error) return <h1>{error}</h1>;

  return resumeSkills && !isLoading ? (
    <div>
      <SlotTitle title="Skills" />
      <div>
        {resumeSkills.map((skill, index) => (
          <>
            <SignedOut>
              <span
                key={skill.id}
                className=" mt-1 bg-slate-200 text-slate-950 w-auto mr-1 rounded-full py-1 px-2 text-sm font-semibold inline-block"
              >
                {skill.skill}
              </span>
            </SignedOut>
            <SignedIn>
              {/* <span
                key={skill.id}
                className=" mt-1 bg-slate-200 text-slate-950 w-auto rounded-l-full py-1 px-2 text-sm font-semibold inline-block"
              >
                {skill.skill}
              </span> */}
              <span className=" inline-block">
                <Input
                  key={skill.id}
                  value={skill.skill}
                  style={{ width: `${skill.skill.length + 2}ch` }}
                  onChange={(e) => {
                    const editedSkill = [...resumeSkills];
                    editedSkill[index].skill = e.target.value;
                    setUpdatedSkill(editedSkill[index].skill);
                  }}
                  className=" mt-1 bg-slate-200 text-slate-950 w-10 h-7 rounded-l-full py-1 px-2 text-sm font-semibold inline-block"
                />
                <Button
                  onClick={() => handleEdit(index, skill.id)}
                  className=" bg-rose-500 h-7 w-1 rounded-none text-white hover:bg-rose-600"
                >
                  e
                </Button>
                <Button className=" bg-blue-800 hover:bg-blue-900 text-white rounded-r-full h-7 w-1 mr-2">
                  x
                </Button>
              </span>
            </SignedIn>
          </>
        ))}
        <SignedIn>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-1 bg-slate-300 text-slate-950 w-7 h-7 rounded-full py-1 px-2 font-semibold hover:bg-slate-600 hover:text-white ">
                +
              </Button>
            </DialogTrigger>
            <DialogContent className=" bg-slate-50 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className=" font-sans text-xl">
                  Add skill
                </DialogTitle>
                <DialogDescription className=" font-sans">
                  Add a skill. Click save once done
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-row items-center">
                {/* <div className="grid grid-cols-4 items-center"> */}
                <Label htmlFor="skill" className=" text-right mx-2 ">
                  Skill
                </Label>
                <Input
                  id="skill"
                  className="col-span-3"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                {/* </div> */}
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className=" font-mono rounded-full bg-rose-500 text-white font-semibold"
                  onClick={handleAdd}
                >
                  save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </SignedIn>
      </div>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default SkillsPage;
