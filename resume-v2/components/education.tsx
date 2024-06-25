import React, { useEffect, useState } from "react";
import SlotTitle from "./slot-title";
import useSWR, { mutate } from "swr";
import LoadingCard from "./loading-card";
import { SignedIn } from "@clerk/nextjs";
import DialogContainer from "./dialog-container";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import CreateEducation from "./educations/create-education";
import { createEducationDialogId, editEducationDialogId } from "@/constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import EditEducation from "./educations/edit-education";
import EditEducationV2 from "./educations/edit-education-v2";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface EducationProps {
  id: number;
  institution: string;
  major: string;
}

const EducationPage = () => {
  const { data, isLoading, error } = useSWR<EducationProps[]>(
    "/education",
    fetcher
  );
  const [resumeEducations, setResumeEducations] = useState<EducationProps[]>(
    []
  );

  const confirmDelete = (id: number) => {
    handleDelete(id);
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/education/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response) {
        throw new Error(response);
      }
      const updatedData = await response.json();
      //how to mutate?
      if (data) {
        mutate("/education", [...data, ...updatedData]);
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  useEffect(() => {
    if (data) {
      setResumeEducations(data);
    }
  }, [data]);

  return resumeEducations && !isLoading ? (
    <>
      <SlotTitle title="education" />
      <div className=" mb-1">
        {resumeEducations.map((edu, index) => (
          <>
            <div key={edu.id}>
              <p className="font-light">{edu.institution.toUpperCase()}</p>
              <p className="font-semibold text-gray-900">{edu.major}</p>
            </div>
            <SignedIn>
              <div className=" flex justify-end mb-10 w-full" key={edu.id}>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className=" hover:text-red-600 font-mono font-semibold hover:underline">
                      delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" bg-slate-50">
                    <AlertDialogHeader>
                      <AlertDialogTitle className=" text-slate-900">
                        Are you sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-slate-800">
                        This will delete the entry permanently.
                      </AlertDialogDescription>
                      <AlertDialogFooter className="pt-5">
                        <AlertDialogCancel className=" text-slate-900 rounded-full border-solid border-2 border-black font-mono font-semibold hover:bg-black hover:text-white">
                          cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            confirmDelete(edu.id);
                          }}
                          className=" text-slate-900 font-mono font-semibold hover:text-red-600 hover:underline"
                        >
                          confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
                <DialogContainer
                  dialogTitle="edit education"
                  dialogDescription="Make changes to the experience here. Click save once you're done."
                  dialogId={editEducationDialogId}
                >
                  <Button className="font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold">
                    edit
                  </Button>
                  {/* <EditEducation id={edu.id} /> */}
                  <EditEducationV2 />
                </DialogContainer>
              </div>
            </SignedIn>
          </>
        ))}
      </div>
      <SignedIn>
        <DialogContainer
          dialogTitle="add educations"
          dialogDescription="For adding education(s). Click save once done."
          dialogId={createEducationDialogId}
        >
          <Button className=" mt-10 w-full font-mono rounded-full  hover:bg-emerald-700 hover:text-white font-semibold">
            <PlusIcon className=" mr-2" />
            add new education
          </Button>
          <CreateEducation />
        </DialogContainer>
      </SignedIn>
    </>
  ) : (
    <div>
      <LoadingCard />
    </div>
  );
};

export default EducationPage;
