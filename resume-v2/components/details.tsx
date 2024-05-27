"use client";

import useSWR from "swr";
import Card from "./card";
import LoadingCard from "./loading-card";
import { LoaderPinwheel } from "lucide-react";

interface DetailsProps {
  name: string;
  phone: string;
  email: string;
  jobtitle: string;
  fulllocation: string;
  shortlocation: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DetailsPage = () => {
  const { data, error } = useSWR<DetailsProps>("/details", fetcher);

  if (error) {
    return <h1>{error}</h1>;
  }

  return data ? (
    <Card>
      <div>
        <h3 className=" font-sans lg:text-3xl sm:text-xl justify-center flex mb-10 font-bold">
          {data.name}
        </h3>
        <div className=" justify-center flex pb-5 sm:text-xs lg:text-base">
          <p>{data.phone}</p>
          <p className=" lg:text-lg lg:font-bold sm:px-1 lg:px-10">|</p>
          <p>{data.email}</p>
          <p className=" lg:text-lg lg:font-bold sm:px-1 lg:px-10">|</p>
          <p className=" sm:hidden lg:block">{data.fulllocation}</p>
          <p className=" sm:block lg:hidden">{data.shortlocation}</p>
        </div>
      </div>
    </Card>
  ) : (
    <div className=" h-auto">
      <LoadingCard />
    </div>
  );
};

export default DetailsPage;
