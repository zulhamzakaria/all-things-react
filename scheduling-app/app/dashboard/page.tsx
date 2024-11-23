import { requireUser } from "../lib/hooks";

const Dashboard = async () => {
  const session = await requireUser()

  return <div>Dashboard</div>;
};

export default Dashboard;
