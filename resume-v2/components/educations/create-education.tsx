import { z } from "zod";
import { useForm } from "react-hook-form";
import { EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useState } from "react";
import { educations } from "@/data";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const CreateEducation = () => {
  const [createEducation, setCreateEducation] = useState<
    CreateEducationProps[]
  >([]);

  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
  });

  const handleAddEducation = () => {
    setCreateEducation([...createEducation, { institution: "", major: "" }]);
  };

  return <div>Create Education page!</div>;
};

export default CreateEducation;
