"use client";

import { Button } from "./ui/button";

const ResumePage = () => {
  const handleClick = () => {
    console.log("cock!");
  };

  return (
    <div className=" h-[auto] w-[900px] bg-gray-50 rounded-sm shadow-sm pt-10 pb-10 pl-5 pr-5">
      This is the resume body
      {/* slots inside this
      header, 
      skills
      work history,
      misc */}
      <Button
        onClick={handleClick}
        className=" ml-2 mr-2 bg-rose-300 shadow-sm text-slate-900 hover:bg-rose-500 hover:text-slate-50 hover:shadow-md pl-2 pr-2"
      >
        Click me!
      </Button>
      <Button
        onClick={handleClick}
        className=" bg-gray-50 text-slate-600 hover:bg-slate-300 hover:text-slate-900 hover:shadow-md pl-2 pr-2"
      >
        Click me!
      </Button>
    </div>
  );
};

export default ResumePage;
