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
import { Button } from "../ui/button";
import { toast } from "sonner";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const CreateEducation = () => {
  const [isPending, startTransition] = useTransition();
  const [createEducations, setCreateEducations] = useState<
    CreateEducationProps[]
  >([]);

  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
  });

  const handleAddEducation = () => {
    setCreateEducations([...createEducations, { institution: "", major: "" }]);
  };

  const onSubmit = (values: z.infer<typeof EducationSchema>) => {
    toast.success("education(s) added");
    //TODO
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="major"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Computer Science"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <div>
          <Button onClick={handleAddEducation} disabled={isPending}>
            Add Education
          </Button>
          <Button type="submit" disabled={isPending}>
            save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateEducation;
