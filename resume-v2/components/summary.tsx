import React from "react";
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

interface SummaryProps {
  userId: string;
  summary: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SummaryPage = () => {
  const { data, error } = useSWR<SummaryProps>("/summary", fetcher);

  if (error) {
    return <h1>{error}</h1>;
  }

  return data ? (
    <div>
      <SlotTitle title="SUMMARY" />
      <ItemCard>
        <span className="font-light">{data.summary}</span>
      </ItemCard>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>Edit Summary</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit summary</DialogTitle>
            <DialogDescription>
              Make changes to the resume summary here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className=" grid gap-4 py-4">
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlFor="summary" className=" text-right">
                Summary
              </Label>
              <Textarea
                id="summary"
                value={data.summary}
                className=" col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
            <DialogClose asChild>
              <Button type="button" variant={"secondary"}>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    <LoadingCard />
  );
};

export default SummaryPage;
