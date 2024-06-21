import { useDialog } from "@/lib/use-dialog";
import { EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Label } from "../ui/label";

interface EditEducationProps {
  id: number;
  institution: string;
  major: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditEducation = () => {
  const { data } = useSWR<EditEducationProps[]>("/education", fetcher);
  const { onClose } = useDialog();
  const [isPending, setisPending] = useState(false);
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

  const mappedFields =
    data?.map((edu) => ({
      id: edu.id,
      institution: edu.institution,
      major: edu.major,
    })) || [];

  const onSubmit = async (values: z.infer<typeof EducationSchema>) => {};

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-row mb-1">
          <Label htmlFor="institution" className=" font-sans mb-2 w-1/2 mx-1">
            Institution
          </Label>
          <Label htmlFor="major" className=" font-sans mb-2 w-1/2 mx-1">
            Major
          </Label>
        </div>

        {mappedFields.map((field, index) => (
          <>
            <div className="w-full flex flex-row mb-1" key={field.id}>
              <Input
                id="institution"
                className="w-1/2 mx-1"
                {...register(`educations.${index}.institution`)}
                defaultValue={field.institution}
              />
              <Input
                id="major"
                className="w-1/2 mx-1"
                {...register(`educations.${index}.major`)}
                defaultValue={field.major}
              />
            </div>
            {errors.educations?.[index]?.institution && (
              <p className="text-red-400 text-sm mx-1">
                {errors.educations[index].institution.message}
              </p>
            )}
          </>
        ))}
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="px-10 mt-10 mb-2 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
          >
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditEducation;
