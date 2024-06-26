import { EditEducationSchema, EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { EditDialogItemIdStore } from "@/lib/use-dialog";

const EditEducationV2 = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof EditEducationSchema>>({
    resolver: zodResolver(EditEducationSchema),
  });

  const { itemId, userId } = EditDialogItemIdStore();

  const onSubmit = async (values: z.infer<typeof EditEducationSchema>) => {
    alert("button clicked");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        EditEducationV2
        <Input {...register("institution")} defaultValue={itemId} />
        {errors.institution && <p>{errors.institution.message}</p>}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default EditEducationV2;
