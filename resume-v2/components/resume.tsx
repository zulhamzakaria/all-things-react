"use client";

import DetailsPage from "./details";
import EducationPage from "./education";
import ExperiencesPage from "./experiences";
import SkillsPage from "./skills";
import SummaryPage from "./summary";
import { Button } from "./ui/button";
import ReactToPrint from "react-to-print";
import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UserStore } from "@/lib/use-store";
import { useUser } from "@clerk/nextjs";
import NotificationWrapper from "./wrappers/notification-wrapper";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Tooltip } from "react-tooltip";

const ResumePage = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // const { user } = useUser();
  // const { setUserId } = UserStore();
  const searchParams = useSearchParams();
  const query = searchParams.get("user") as string;

  const pathname = usePathname();
  const resumeLink = `${
    window.location.origin
  }${pathname}?${searchParams.toString()}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Link copied.");
      })
      .catch((err) => {
        toast.error("Failed to copy link: ", err);
      });
  };

  // useEffect(() => {
  //   setUserId(user ? user.id : query);
  // }, [user, query]);

  return (
    <>
      <NotificationWrapper>
        <div className=" text-slate-100 flex flex-row space-x-2">
          <p>The link to your resume is </p>
          <span className="text-white font-semibold">{resumeLink}</span>{" "}
          <Tooltip id="copy" />
          <p data-tooltip-id="copy" data-tooltip-content="Copy Link">
            <Copy
              className="text-slate-100 size-3 cursor-pointer"
              onClick={() => {
                copyToClipboard(resumeLink);
              }}
            />
          </p>
        </div>
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
