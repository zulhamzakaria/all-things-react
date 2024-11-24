import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export function AuthModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
            <Button>Click me!</Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
}
