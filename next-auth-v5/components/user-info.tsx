// agnostic component ; depends on whether the parent is a client or server page
import ExtendedUser from "@/next-auth"

interface UserInfoProps{
    user?: ExtendedUser
}
const UserInfoPage = () => {
  return <div>User Info Page</div>;
};

export default UserInfoPage;
