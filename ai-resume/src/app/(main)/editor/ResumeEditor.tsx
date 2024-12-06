"use client";

import { useSearchParams } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import { steps } from "./steps";
import { Footer } from "./Footer";
import { useState } from "react";

const ResumeEditor = () => {
  const searchParams = useSearchParams();

const[resumeData, setResumeData] = useState()

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
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
};

export default ResumeEditor;
