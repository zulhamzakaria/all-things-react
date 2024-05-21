"use client";

import useSWR from "swr";

interface DetailsProps {
  name: string;
  phone: string;
  email: string;
  jobtitle: string;
}

const DetailsPage = () => {
  const { data } = useSWR("/details");

  if (!data) {
    console.log("no data");
  } else {
    console.log(data);
  }

  return <div>Calls from API!</div>;
};

export default DetailsPage;
