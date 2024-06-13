import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import ItemCard from "./item-card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Separator } from "./ui/separator";
import { SaveAllIcon } from "lucide-react";

interface SummaryProps {
  userId: string;
  summary: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SummaryPage = () => {
  const { data, mutate, error } = useSWR<SummaryProps>("/summary", fetcher);

  const [resumeSummary, setResumeSummary] = useState(data?.summary || "");

  const handleClick = () => {
    if (data) {
      mutate({ ...data, summary: resumeSummary }, false);
    }
    toast.success("Summary updated", { duration: 2000 });
  };

  useEffect(() => {
    setResumeSummary(data?.summary || "");
  }, [data]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return resumeSummary ? (
    <div>
      <SlotTitle title="SUMMARY" />
      <ItemCard>
        <span className=" text-slate-950 font-semibold font-sans ">
          {resumeSummary}
        </span>
      </ItemCard>
      <div className=" mt-5 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              className=" rounded-full font-mono text-amber-50 bg-blue-500 hover:bg-blue-700 font-semibold"
            >
              edit
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-50 lg:min-w-[600px]">
            <DialogHeader>
              <DialogTitle className=" font-sans text-4xl font-light my-10 flex justify-center">
                EDIT SUMMARY
              </DialogTitle>
              <DialogDescription className="font-sans font-light">
                Make changes to the resume summary here. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <Separator className="bg-gray-950" />
            <div>
              <div className="flex flex-col">
                <Label htmlFor="summary" className="mb-3 font-sans">
                  Summary
                </Label>
                <Textarea
                  id="summary"
                  value={resumeSummary}
                  className=" col-span-3 font-sans"
                  rows={7}
                  onChange={(e) => setResumeSummary(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="flex flex-rows">
              <DialogClose asChild>
                <Button
                  type="submit"
                  className=" mt-10 w-full font-mono rounded-lg bg-emerald-500  hover:bg-emerald-700 text-white font-semibold"
                  onClick={handleClick}
                >
                  <SaveAllIcon className=" mr-2" />
                  save
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ) : (
    <LoadingCard />
  );
};

export default SummaryPage;
