import { useDialog } from "@/lib/use-dialog";
import { EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import { z } from "zod";

interface EditEducationProps {
  institution: string;
  major: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditEducation = () => {
  const { data } = useSWR("/education", fetcher);
  const { onClose } = useDialog();

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

  return <h1>Edit Education</h1>;
};

export default EditEducation;
