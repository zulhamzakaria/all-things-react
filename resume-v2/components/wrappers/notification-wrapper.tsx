import { AlertCircleIcon, XIcon } from "lucide-react";
import React from "react";

const NotificationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-10 bg-dark-3 space-x-2  rounded-md my-2 lg:w-[900px] w-auto p-2 flex flex-row">
      <p className="text-yellow-100">
        <AlertCircleIcon />
      </p>
      <span className="text-slate-100 font-sans w-full">{children}</span>
      <div className="border-l border-gray-400 h-full mx-2"></div>
      <span className="text-white font-semibold cursor-pointer">
        <XIcon />
      </span>
    </div>
  );
};

export default NotificationWrapper;
