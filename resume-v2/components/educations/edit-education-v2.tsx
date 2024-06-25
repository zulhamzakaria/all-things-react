import { EditEducationSchema, EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

const EditEducationV2 = () => {
  const { handleSubmit } = useForm<z.infer<typeof EditEducationSchema>>({
    resolver: zodResolver(EditEducationSchema),
  });

  const onSubmit = async (values: z.infer<typeof EditEducationSchema>) => {
    alert("button clicked");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        EditEducationV2
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default EditEducationV2;
