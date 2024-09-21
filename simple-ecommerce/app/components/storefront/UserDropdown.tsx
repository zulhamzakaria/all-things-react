import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface UserDropdownProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

export function UserDropdown({ email, name, userImage }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button value={"ghost"} className=" relative size-10 rounded-full">
          <Avatar className=" size-10">
            <AvatarFallback className=" text-muted-foreground">
              LS
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-56" align="end" forceMount>
        <DropdownMenuLabel className=" flex flex-col space-y-1">
          <p className=" text-sm font-medium leading-none">Leonn Sameonn</p>
          <p className=" text-xs leading-none text-muted-foreground ">
            ls@google.com
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink>Sign out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
