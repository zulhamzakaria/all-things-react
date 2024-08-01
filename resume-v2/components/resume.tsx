"use client";

import DetailsPage from "./details";
import EducationPage from "./education";
import ExperiencesPage from "./experiences";
import SkillsPage from "./skills";
import SummaryPage from "./summary";
import { Button } from "./ui/button";
import ReactToPrint from "react-to-print";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { UserStore } from "@/lib/use-store";
import { useUser } from "@clerk/nextjs";
import NotificationWrapper from "./wrappers/notification-wrapper";

const ResumePage = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
  const { setUserId } = UserStore();
  const searchParams = useSearchParams();
  const query = searchParams.get("userId") as string;

  useEffect(() => {
    setUserId(user ? user.id : query);
  }, [user, query]);

  return (
    <>
      <NotificationWrapper>
        <div>Notification</div>
      </NotificationWrapper>
      <div
        ref={componentRef}
        className=" h-[auto] lg:w-[900px] sm:w-auto bg-gray-50 rounded-t-sm shadow-sm pt-10 pb-10 pl-5 pr-5 flex flex-col"
      >
        <DetailsPage />
        {/* <SummaryPage />
        <SkillsPage />
        <ExperiencesPage />
        <EducationPage /> */}
        <div className="flex flex-row text-sm font-thin mt-36 justify-end mr-2">
          <span>powered by</span>
          <p className=" ml-1 font-semibold">nextJS</p>
        </div>
        <div className=" invisible">
          <Button
            onClick={() => {}}
            className=" ml-2 mr-2 bg-rose-200 border-2 border-white shadow-sm text-gray-900 hover:bg-rose-500 hover:text-slate-50 hover:shadow-md pl-2 pr-2"
          >
            Click me!
          </Button>
          <Button
            onClick={() => {}}
            className=" bg-gray-50 border-2 border-gray-900 text-slate-600 hover:bg-slate-300 hover:text-slate-900 hover:shadow-md pl-2 pr-2"
          >
            Click me!
          </Button>
          <Button
            onClick={() => {}}
            className=" ml-2 bg-red-500 text-white border-2 border-white  hover:bg-red-500 hover:text-white hover:shadow-md pl-2 pr-2"
          >
            Click me!
          </Button>
          <Button
            onClick={() => {
              return;
            }}
            className=" ml-2 bg-orange-500 text-white border-2 border-white  hover:bg-orange-600 hover:text-white hover:shadow-md pl-2 pr-2"
          >
            Click me!
          </Button>
        </div>
      </div>
      <ReactToPrint
        trigger={() => (
          <Button
            variant={"default"}
            className=" text-white bg-rose-600 rounded-b-sm rounded-t-none font-mono font-semibold text-lg opacity-95 lg:w-[900px] sm:w-full"
          >
            print
          </Button>
        )}
        content={() => componentRef.current}
      />
    </>
  );
};

export default ResumePage;
