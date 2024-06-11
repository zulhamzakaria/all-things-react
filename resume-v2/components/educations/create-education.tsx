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
import { useState, useTransition } from "react";
import { Input } from "../ui/input";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const CreateEducation = () => {
  const [isPending, startTransition] = useTransition();
  const [createEducation, setCreateEducation] = useState<
    CreateEducationProps[]
  >([]);

  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
  });

  const handleAddEducation = () => {
    setCreateEducation([...createEducation, { institution: "", major: "" }]);
  };

  return (
    <div>
      <Form {...form}>
        <FormField
          name="institution"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="University of Science"
                  disabled={isPending}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};

export default CreateEducation;
