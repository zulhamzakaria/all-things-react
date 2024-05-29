import { SignedIn } from "@clerk/nextjs";
import { PenIcon } from "lucide-react";

const SlotTitle = ({ title }: { title?: string }) => {
  return (
    <>
      <div className=" w-full flex-between font-bold text-slate-950 border-solid border-b-4 border-red-600 mb-2 p-1 mt-10">
        <p className="flex items-center gap-1 font-sans text-xl font-medium">
          {title?.toLocaleUpperCase()}
        </p>
        {/* <div className=" flex-between gap-4">
          <SignedIn>
            <PenIcon
              className=" cursor-pointer"
              onClick={() => alert("click")}
              width={20}
              height={20}
            />
          </SignedIn>
        </div> */}
      </div>
    </>
  );
};

export default SlotTitle;
