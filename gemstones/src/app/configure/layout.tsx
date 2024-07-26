import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
