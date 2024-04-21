"use client";

import UserInfoPage from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();
  return <UserInfoPage user={user} label="💻 Client component" />;
};

export default ClientPage;
