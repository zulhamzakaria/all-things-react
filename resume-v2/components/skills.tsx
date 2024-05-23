import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";
import { skills } from "@/data";

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
      <div className="flex flex-row">
        {/* {skills.map((skill) => (
          <span key={skill.id} className=" text-wrap bg-slate-600 text-white">
            {skill.skill}
          </span>
        ))} */}
        <div>item1 item2 item3 item4</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
        <div>item item item item</div>
      </div>
    </div>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default SkillsPage;
