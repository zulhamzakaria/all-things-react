import { UserButton } from "@clerk/nextjs";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default RootPage;
