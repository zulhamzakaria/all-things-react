import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEducationDialogId } from "@/constants";
import { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { PlusIcon, XIcon } from "lucide-react";
import { useDialog } from "@/lib/use-dialog";
import useSWR from "swr";
import { mutate } from "swr";
import { Label } from "../ui/label";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CreateEducation = () => {
  const { data } = useSWR("/education", fetcher);
  const { onClose } = useDialog();
  const [isPending, startTransition] = useTransition();
  const [createEducations, setCreateEducations] = useState<
    CreateEducationProps[]
  >([{ institution: "", major: "" }]);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const handleAddEducation = () => {
    setCreateEducations([...createEducations, { institution: "", major: "" }]);
  };

  const onSubmit = async (values: z.infer<typeof EducationSchema>) => {
    try {
      const { educations } = values;
      var response = await fetch(`/education`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(educations),
      });
      if (!response) {
        throw new Error(`HTTP error! Status:${response}`);
      }
      const updatedData = await response.json();
      mutate("/education", [...data, ...updatedData], false);
      onClose(createEducationDialogId);
      toast.success("New education added");
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-row mb-1">
          <Label htmlFor="institution" className=" font-sans mb-2 w-1/2 mx-1">
            Institution
          </Label>
          <Label htmlFor="major" className=" font-sans mb-2 w-1/2 mx-1">
            Major
          </Label>
        </div>
        {fields.map((field, index) => (
          <>
            <div className=" w-full flex flex-row mb-1" key={field.id}>
              <Input
                {...register(`educations.${index}.institution`)}
                className=" w-1/2 mx-1"
                placeholder="Institution"
              />
              <Input
                {...register(`educations.${index}.major`)}
                className=" w-1/2 mr-1"
                placeholder="Major"
              />
              <Button
                type="button"
                className=" bg-rose-500 text-white "
                onClick={() => remove(index)}
              >
                <XIcon />
              </Button>
            </div>
            {errors.educations?.[index]?.institution && (
              <p className=" text-red-400 text-sm mx-1">
                {errors.educations[index].institution.message}
              </p>
            )}
          </>
        ))}
        <div className="w-full flex justify-center">
          <Button
            type="button"
            onClick={() => append({ institution: "", major: "" })}
            className="items-center my-2 text-gray-950 inline-flex rounded-full hover:bg-emerald-500 hover:text-white font-mono font-semibold"
          >
            <PlusIcon className="mr-2" />
            add education
          </Button>
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className=" px-10 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
          >
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEducation;
