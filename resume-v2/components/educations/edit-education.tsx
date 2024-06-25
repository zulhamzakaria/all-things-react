import { useDialog } from "@/lib/use-dialog";
import { EditEducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import LoadingCard from "../loading-card";

interface EditEducationProps {
  id: number;
  institution: string;
  major: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditEducation = ({ id }: { id: number }) => {
  const { data, isLoading } = useSWR<EditEducationProps>(
    `/education/${id}`,
    fetcher
  );
  const { onClose } = useDialog();
  const [isPending, setisPending] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof EditEducationSchema>>({
    resolver: zodResolver(EditEducationSchema),
  });

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "educations",
  // });

  // const mappedFields =
  //   data?.map((edu) => ({
  //     id: edu.id,
  //     institution: edu.institution,
  //     major: edu.major,
  //   })) || [];

  const mappedField = {
    id: data?.id,
    institution: data?.institution,
    major: data?.major,
  };

  const onSubmit = async (values: z.infer<typeof EditEducationSchema>) => {
    alert(JSON.stringify("123"));
  };

  return data && !isLoading ? (
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
        <>
          <div className="w-full flex flex-row mb-1" key={mappedField.id}>
            <Input
              id="institution"
              className="w-1/2 mx-1"
              {...register("institution")}
              defaultValue={mappedField.institution}
            />
            <Input
              id="major"
              className="w-1/2 mx-1"
              {...register("major")}
              defaultValue={mappedField.major}
            />
          </div>
          {errors.institution && (
            <p className="text-red-400 text-sm mx-1">
              {errors.institution.message}
            </p>
          )}
        </>
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
  ) : (
    <div className=" w-full flex justify-center">
      <LoadingCard />
    </div>
  );
};

export default EditEducation;
