import UserInfoPage from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfoPage user={user} label="🖥️ Server component" />;
};

export default ServerPage;
