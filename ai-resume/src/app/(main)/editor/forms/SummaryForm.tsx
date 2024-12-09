import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { summarySchema, SummaryValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SummaryForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<SummaryValues>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: resumeData.summary || "",
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      //update resume data
      setResumeData({ ...resumeData, ...values });
    });
    // ensure that theres always one form watcher
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">professional summary</h2>
        <p className="text-sm text-muted-foreground">
          write a short introduction for your resume or let the AI generate one
          based on the entered data
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-30">
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Summary</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="brief, engaging text about yourself"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="summary"
            control={form.control}
          ></FormField>
        </form>
      </Form>
    </div>
  );
}
