"use client";

import useSWR from "swr";

interface DetailsProps {
  name: string;
  phone: string;
  email: string;
  jobtitle: string;
  location: string;
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

  return (
    <div>
      <h3 className=" font-sans text-3xl justify-center flex mb-10">
        {data.name}
      </h3>
      <p className=" justify-center items-stretch flex">
        {data.email} | {data.phone} | {data.location}
      </p>
    </div>
  );
};

export default DetailsPage;
