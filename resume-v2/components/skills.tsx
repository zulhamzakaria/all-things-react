import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";

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
          <span
            key={skill.id}
            className=" mt-1 bg-slate-200 text-slate-950 w-auto mr-1 rounded-md p-1 text-sm font-semibold inline-block"
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
