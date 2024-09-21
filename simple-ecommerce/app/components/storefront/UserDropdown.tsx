import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Avatar>
            <AvatarFallback>e-commerce</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
