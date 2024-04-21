// "use client";

// import { useCurrentRole } from "@/hooks/use-current-role";
import { currentUserRole } from "@/lib/auth";
import React from "react";

const AdminPage = async () => {
  const role = await currentUserRole();
  return <div>{role}</div>;
};

export default AdminPage;
