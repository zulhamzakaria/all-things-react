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
      <p className=" justify-center flex pb-5 ">
        <p>{data.phone}</p>
        <p className=" text-lg font-bold pr-10 pl-10">|</p>
        <p>{data.email}</p>
        <p className=" text-lg font-bold pr-10 pl-10">|</p>
        <p>{data.location}</p>
      </p>
    </div>
  );
};

export default DetailsPage;
