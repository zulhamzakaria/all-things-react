import useAuthStore from "@/stores/authstore";
import { EditOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import * as cheerio from "cheerio";
import { sanitize } from "dompurify";

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
      const sanitizedData = data.map((item: any) => {
        const html = processHTML(sanitize(item.responsibility));
        return { ...item, sanitizedResponsibilities: html };
      });
      setExperiences(sanitizedData);
    }
  }, [isLoading, data]);

  const processHTML = (html: string): string => {
    const $ = cheerio.load(html);
    $("ul").contents().unwrap();
    return $.html();
  };

  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  if (isLoading)
    return (
      <div className="pl-5 pt-1 text-xs font-extrabold font-mono text-justify w-full">
        Loading experiences...
      </div>
    );
  return (
    <div className="pl-2 pt-1 text-sm text-justify w-full">
      {experiences.map((experience) => (
        <div key={experience["id"]} className="pb-5">
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
          <div className="flex">
            <p className="font-mono font-bold text-sm uppercase">
              {experience["companyName"]} / {experience["jobTitle"]} /{" "}
              {experience["period"]}
            </p>
          </div>
          <div
            className="pl-5 pt-1 text-xs font-extrabold font-mono text-justify w-full"
            dangerouslySetInnerHTML={{
              __html: experience["sanitizedResponsibilities"],
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Experiences;
