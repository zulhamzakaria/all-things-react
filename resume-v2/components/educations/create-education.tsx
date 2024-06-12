import { z } from "zod";
import { useForm } from "react-hook-form";
import { EducationSchema } from "@/schemas/education";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { PlusIcon, XIcon } from "lucide-react";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const CreateEducation = () => {
  const [isPending, startTransition] = useTransition();
  const [createEducations, setCreateEducations] = useState<
    CreateEducationProps[]
  >([{ institution: "", major: "" }]);

  const form = useForm<z.infer<typeof EducationSchema>>({
    resolver: zodResolver(EducationSchema),
    mode: "onSubmit",
  });

  const handleAddEducation = () => {
    setCreateEducations([...createEducations, { institution: "", major: "" }]);
  };

  const handleDeleteEducation = (index: number) => {
    const educations = [...createEducations];
    educations.splice(index, 1);
    setCreateEducations(educations);
  };

  const onSubmit = (values: z.infer<typeof EducationSchema>) => {
    toast.success("education(s) added");
    //TODO
  };

  return (
    <div className=" w-full">
      <Form {...form}>
        {createEducations.map((edu, index) => (
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
              {/* <Button
                className="bg-red-500"
                onClick={() => handleDeleteEducation(index)}
              >
                <XIcon />
              </Button> */}
              <Button
                type="submit"
                disabled={isPending}
                className=" px-10 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
              >
                save
              </Button>
            </div>
          </form>
        ))}
        {/* <div className=" w-full flex justify-center ">
          <Button
            onClick={handleAddEducation}
            disabled={isPending}
            className=" items-center my-2 text-gray-950 inline-flex rounded-full
          hover:bg-emerald-500 hover:text-white font-mono font-semibold"
          >
            <PlusIcon className="mr-2" />
            add education
          </Button>
        </div> */}
        {/* <div className=" w-full flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className=" px-10 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
          >
            save
          </Button>
        </div> */}
      </Form>
    </div>
  );
};

export default CreateEducation;
