import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PencilIcon } from "lucide-react";
import { Input } from "./ui/input";

interface SkillsProps {
  skills: {
    id: number;
    skill: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SkillsPage = () => {
  const { data, error } = useSWR<SkillsProps>("/skills", fetcher);

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
        <Button className="mt-1 bg-slate-200 text-slate-950 w-7 h-7 rounded-full py-1 px-2 font-semibold hover:bg-slate-300 ">
          +
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default SkillsPage;
