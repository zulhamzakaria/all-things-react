import useAuthStore from "@/stores/authstore";
import { EditOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Experiences = () => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => {
    return state.isAuthenticated;
  });
  const handleUpdateExperience = (id: number) => {
    router.push(`/experiences/${id}`);
  };
  const [experiences, setExperiences] = useState([]);
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/experiences",
    fetcher
  );
  useEffect(() => {
    if (!isLoading && data) {
      setExperiences(data);
    }
  }, [isLoading, data]);
  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  if (isLoading) return <div>Loading data...</div>;
  return (
    <div className="pl-5 pt-1 text-sm text-justify w-full">
      {experiences.map((experience) => (
        <div key={experience["id"]}>
          {isAuthenticated && (
            <div
              className=" w-full text-right"
              onClick={() => handleUpdateExperience(experience["id"])}
            >
              <EditOutlined
                sx={{ height: 15, width: 15 }}
                className="mr-1 mb-1"
              />
            </div>
          )}
          {/* <p>{experience["id"]}</p> */}
          <p>{experience["companyName"]}</p>
          <p>{experience["jobTitle"]}</p>
          <p>{experience["period"]}</p>
          <p>{experience["responsibility"]}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
