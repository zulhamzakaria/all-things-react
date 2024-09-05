import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const userSession = await getUser();
  return (
    <div className="flex gap-2 p-2">
      {userSession ? (
        <LogoutLink>
          <Button>Signout</Button>
        </LogoutLink>
      ) : (
        <div>
          <RegisterLink>
            <Button>Signup</Button>
          </RegisterLink>
          <LoginLink>
            <Button>Signin</Button>
          </LoginLink>
        </div>
      )}
    </div>
  );
}
