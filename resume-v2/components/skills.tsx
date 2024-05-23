import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";
import { skills } from "@/data";
import SkillPage from "./skill";

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
    <div className="mb-5">
      <SlotTitle title="Skills" />
      <div>
        {skills.map((skill) => (
          <span
            key={skill.id}
            className=" mt-1 bg-slate-100 w-auto mr-1 rounded-md p-1 text-sm font-semibold hover:border hover:border-slate-950 inline-block"
          >
            {skill.skill}
          </span>
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
