"use client";

import useSWR from "swr";

interface DetailsProps {
  name: string;
  phone: string;
  email: string;
  jobtitle: string;
  test: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DetailsPage = () => {
  const { data, error } = useSWR<DetailsProps>("/details", fetcher);

  if (error) {
    return <h1>somn wrong</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <div>{data.name}</div>;
};

export default DetailsPage;
