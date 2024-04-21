// agnostic component ; depends on whether the parent is a client or server page
import { ExtendedUser } from "@/next-auth";
import { Card, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}
const UserInfoPage = ({ user, label }: UserInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
    </Card>
  );
};

export default UserInfoPage;
