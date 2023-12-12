import { FC, useEffect, useState } from "react";
import useSWR from "swr";

interface pageProps {
  params: { id: number };
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const page: FC<pageProps> = ({ params }) => {
  const [experience, setExperience] = useState("");
  const { data, error, isLoading } = useSWR(
    `https://online-resume-with-minimal-api.azurewebsites.net/api/experiences/${params.id}`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      setExperience(data);
    }
  }, [isLoading, data]);

  if (error) {
    return <div>Error loading data... (`${error.message}`)</div>;
  }
if(isLoading){return <div>Loading data...</div>}
  return <div>page: {}</div>;
  
};

export default page;
