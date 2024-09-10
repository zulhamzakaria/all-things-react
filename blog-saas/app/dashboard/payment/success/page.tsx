import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className=" w-full flex flex-1 justify-center items-center">
      <Card className=" w-[350px]">
        <div className=" p-6">
          <div className=" w-full flex justify-center">
            <Check className=" size-12 rounded-full bg-green-500/30 text-green-500" />
          </div>

          <div className=" mt3 text-center sm:mt-5 w-full">
            <h2 className=" text-lg font-medium">Payment Success</h2>
            <p className=" text-sm mt-2 text-muted-foreground tracking-tight">
              <span className=" text-primary">Congratulation</span> and{" "}
              <span className=" text-blue-500">Thank You</span> for the
              Subscription
            </p>
            {/* asChild cause it contains a Link */}
            <Button asChild className=" w-full mt-5">
              <Link href={`/dashboard`}>Go back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuccessPage;
