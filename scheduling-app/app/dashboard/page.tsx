import React from "react";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) return redirect("/");

  return <div>Dashboard</div>;
};

export default Dashboard;
