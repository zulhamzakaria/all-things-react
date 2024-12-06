"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import { steps } from "./steps";

const ResumeEditor = () => {
  const searchParams = useSearchParams();

  const currentStep = searchParams.get("step") || steps[0].key;
  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    // alternative to router.push. tihs runs on client side
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">design your resume.</h1>
        <p className="text-sm text-muted-foreground">
          follow the steps below to create your resume. Progress is saved
          automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="bottom-0 top-0 flex w-full">
          <div className="w-full overflow-y-auto p-3 md:w-1/2">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && <FormComponent />}
          </div>
          <div className="grow md:border-r" />
          <div className="hidden w-1/2 md:flex">right</div>
        </div>
      </main>
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
    </div>
  );
};

export default ResumeEditor;
