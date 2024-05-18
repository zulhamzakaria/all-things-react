import { SignedIn } from "@clerk/nextjs";
import { PenIcon } from "lucide-react";

const SlotTitle = ({ title }: { title?: string }) => {
  return (
    <>
      <div className=" w-full flex-between font-bold text-slate-950 border-solid border-b-4 border-red-600 mb-2 ">
        <p className="flex items-center gap-1">{title?.toLocaleUpperCase()}</p>
        <div className=" flex-between gap-5">
          <SignedIn>
            <PenIcon
              className=" cursor-pointer"
              onClick={() => alert("click")}
              width={15}
              height={15}
            />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default SlotTitle;
