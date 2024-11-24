import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AuthModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test!</DialogTitle>
          </DialogHeader>
          <div>cock!</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
