"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Card from "./card";
import LoadingCard from "./loading-card";

interface DetailsProps {
  name: string;
  phone: string;
  email: string;
  jobtitle: string;
  fulllocation: string;
  shortlocation: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DetailsPage = ({ userId }: { userId: string }) => {
  const searchParams = useSearchParams();

  // // get the userId from query string
  // let userId;
  // const userFromURL = searchParams.get("user");
  // if (userFromURL !== "") userId = userFromURL;

  const { data, error } = useSWR<DetailsProps>(`/details/${userId}`, fetcher);

  if (error) {
    return <h1>{error}</h1>;
  }

  return data ? (
    <Card>
      <div>
        <h3 className=" font-sans lg:text-5xl sm:text-xl justify-center flex mb-7 mt-8 ">
          {data.name}
        </h3>
        <div className=" justify-center flex pb-5">
          <p className="text-sm xl:text-base lg:text-base xl:font-normal lg:font-normal">
            {data.phone}
          </p>
          <p className=" lg:text-lg lg:font-bold sm:px-1 lg:px-10">|</p>
          <p className="text-sm xl:text-base lg:text-base xl:font-normal lg:font-normal">
            {data.email}
          </p>
          <p className=" lg:text-lg lg:font-bold sm:px-1 lg:px-10 ">|</p>
          <p className=" hidden lg:block text-sm xl:text-base lg:text-base xl:font-normal lg:font-normal">
            {data.fulllocation}
          </p>
          <p className=" sm:block lg:hidden xl:hidden text-sm xl:text-base lg:text-base xl:font-normal lg:font-normal">
            {data.shortlocation}
          </p>
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
