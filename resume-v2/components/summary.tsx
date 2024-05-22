import React from "react";
import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import ItemCard from "./item-card";

interface SummaryProps {
  summary: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SummaryPage = () => {
  const { data, error } = useSWR<SummaryProps>("/summary", fetcher);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!data) {
    return <LoadingCard />;
  }

  return (
    <div>
      <SlotTitle title="SUMMARY" />
      <ItemCard>
        <span>{data.summary}</span>
      </ItemCard>
    </div>
  );
};

export default SummaryPage;
