"use client";

import DetailsPage from "./details";
import ExperiencesPage from "./experiences";
import SkillsPage from "./skills";
import SummaryPage from "./summary";
import { Button } from "./ui/button";

const ResumePage = () => {
  const handleClick = () => {
    console.log("cock!");
  };

  return (
    <>
      <div className=" h-[auto] w-[900px] bg-gray-50 rounded-sm shadow-sm pt-10 pb-10 pl-5 pr-5">
        <DetailsPage />
        <SummaryPage />
        <SkillsPage />
        <ExperiencesPage />

        <p className="mt-10">This is the resume body</p>
        {/* slots inside this
      header, 
      skills
      work history,
      ed. history */}
        <Button
          onClick={handleClick}
          className=" ml-2 mr-2 bg-rose-200 border-2 border-white shadow-sm text-gray-900 hover:bg-rose-500 hover:text-slate-50 hover:shadow-md pl-2 pr-2"
        >
          Click me!
        </Button>
        <Button
          onClick={handleClick}
          className=" bg-gray-50 border-2 border-gray-900 text-slate-600 hover:bg-slate-300 hover:text-slate-900 hover:shadow-md pl-2 pr-2"
        >
          Click me!
        </Button>
        <Button
          onClick={handleClick}
          className=" ml-2 bg-red-500 text-white border-2 border-white  hover:bg-red-500 hover:text-white hover:shadow-md pl-2 pr-2"
        >
          Click me!
        </Button>
        <Button
          onClick={handleClick}
          className=" ml-2 bg-orange-500 text-white border-2 border-white  hover:bg-orange-600 hover:text-white hover:shadow-md pl-2 pr-2"
        >
          Click me!
        </Button>
      </div>
    </>
  );
};

export default ResumePage;
