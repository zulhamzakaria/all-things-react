import useSWR from "swr";
import SlotTitle from "./slot-title";
import LoadingCard from "./loading-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SkillsPage = () => {
  const { data, error } = useSWR("/skills", fetcher);

  if (error) return <h1>{error}</h1>;

  return data ?(
    <div>
      <SlotTitle title="Skills" />
      {data.skills}
    </div>
  ): (<div>
    <LoadingCard/>
  </div>);
};

export default SkillsPage;
