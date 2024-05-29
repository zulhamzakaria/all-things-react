import SlotTitle from "./slot-title";
import useSWR from "swr";
import LoadingCard from "./loading-card";
import ItemCard from "./item-card";

import {
  Dialog,
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
        <span className="font-light">{resumeSummary}</span>
      </ItemCard>
      <div className=" mt-5 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              className=" rounded-full font-mono text-amber-50 bg-rose-500 font-semibold"
            >
              edit summary
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-50 lg:min-w-[600px]">
            <DialogHeader>
              <DialogTitle className=" font-sans text-xl">
                Edit Summary
              </DialogTitle>
              <DialogDescription className="font-sans">
                Make changes to the resume summary here. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className="flex flex-col">
                <Label htmlFor="summary" className="my-2 font-sans text-lg">
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
              <Button
                type="submit"
                className=" bg-rose-500 text-white font-mono font-semibold"
                onClick={handleClick}
              >
                save
              </Button>
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
