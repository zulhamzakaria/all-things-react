import { requireUser } from "../lib/hooks";

const Dashboard = async () => {
  const session = await requireUser();

  return <div>{session.user?.name}</div>;
};

export default Dashboard;
