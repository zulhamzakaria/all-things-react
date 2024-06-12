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
import { XIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

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

  const handleDeleteEducation = (index: number) => {
    const educations = [...createEducations];
    educations.splice(index, 1);
  };

  const onSubmit = (values: z.infer<typeof EducationSchema>) => {
    toast.success("education(s) added");
    //TODO
  };

  return (
    <div className=" w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {createEducations.map((edu, index) => (
            <div className=" flex flex-row mb-1" key={index}>
              <FormField
                name="institution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className=" w-1/2 pr-1">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Institution"
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
                  <FormItem className=" w-1/2 pr-1">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Major"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-red-500"
                onClick={() => handleDeleteEducation}
              >
                <XIcon />
              </Button>
            </div>
          ))}
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
