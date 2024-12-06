import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export function Footer({currentStep, setCurrentStep}:FooterProps) {
  return (
    <footer className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button variant={"secondary"}>previous step</Button>
          <Button>next step</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant={"secondary"} asChild>
            <Link href={"/resumes"}>close</Link>
          </Button>
          <p className="text-muted-foreground opacity-0">saving...</p>
        </div>
      </div>
    </footer>
  );
}
