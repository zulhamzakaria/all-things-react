import { Form } from "@/components/ui/form";
import { EditorFormProps } from "@/lib/types";
import { workExperienceSchema, WorkExperienceValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function WorkExperienceForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<WorkExperienceValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      //update resume data
      // get only existing workExperience, if theres none, use empty array
      setResumeData({
        ...resumeData,
        workExperiences:
          values.workExperiences?.filter((exp) => exp !== undefined) || [],
      });
    });
    // ensure that theres always one form watcher
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "workExperiences",
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">work experience</h2>
        <p className="text-sm text-muted-foreground">
          add your working experiences here
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          {fields.map((field) => (
            <WorkExperienceItem key={field.id} />
          ))}
        </form>
      </Form>
    </div>
  );
}

function WorkExperienceItem() {
  return <div>work experience item</div>;
}
