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

interface SkillsProps {
  skills: {
    id: number;
    skill: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SkillsPage = () => {
  const { data, error } = useSWR<SkillsProps>("/skills", fetcher);

  const [resumeSkills, setResumeSkills] = useState(data?.skills || []);

  useEffect(() => {
    if (data?.skills) setResumeSkills(data.skills);
    console.log(resumeSkills);
  }, [data?.skills]);

  function handleAdd() {
    //howwwww
  }

  if (error) return <h1>{error}</h1>;

  return data ? (
    <div>
      <SlotTitle title="Skills" />
      <div>
        {data.skills.map((skill) => (
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
                  className=" mt-1 bg-slate-200 text-slate-950 w-10 h-7 rounded-l-full py-1 px-2 text-sm font-semibold inline-block"
                />
                <Button className=" bg-rose-500 h-7 w-1 rounded-none text-white hover:bg-rose-600">
                  e
                </Button>
                <Button className=" bg-blue-800 hover:bg-blue-900 text-white rounded-r-full h-7 w-1 mr-2">
                  x
                </Button>
              </span>
            </SignedIn>
          </>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-1 bg-slate-200 text-slate-950 w-7 h-7 rounded-full py-1 px-2 font-semibold hover:bg-slate-300 ">
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
              <Input id="skill" className="col-span-3" />
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
      </div>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default SkillsPage;
