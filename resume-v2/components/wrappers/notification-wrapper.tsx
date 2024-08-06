import { AlertCircleIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

const NotificationWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible &&  (
    <div className="bg-dark-3/75 space-x-2  rounded-md my-2 lg:w-[900px] py-6 w-auto px-5 flex flex-row">
      <p className="text-yellow-100">
        <AlertCircleIcon />
      </p>
      <span className="text-slate-100 font-sans w-full">{children}</span>
      <div className="border-l border-gray-400 h-full mx-2"></div>
      <span
        className="text-white font-semibold cursor-pointer"
        onClick={handleClose}
      >
        <XIcon />
      </span>
    </div>
  );
};

export default NotificationWrapper;
