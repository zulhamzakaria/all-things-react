import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PencilIcon } from "lucide-react";

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
              <span
                key={skill.id}
                className=" mt-1 bg-slate-200 text-slate-950 w-auto rounded-l-full py-1 px-2 text-sm font-semibold inline-block"
              >
                {skill.skill}
              </span>
              <Button className=" bg-blue-400 h-7 w-1 rounded-none text-white">
                e
              </Button>
              <Button className=" bg-red-600 text-white rounded-r-full h-7 w-1 mr-2">
                x
              </Button>
            </SignedIn>
          </>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default SkillsPage;
