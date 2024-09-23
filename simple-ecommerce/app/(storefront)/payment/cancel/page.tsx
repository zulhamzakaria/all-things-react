import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";

const CancelPaymentPage = () => {
  return (
    <section className=" w-full min-h-[80vh] flex items-center justify-center ">
      <Card className=" w-[350px]">
        <div className=" p-6">
          <div className=" w-full flex justify-center">
            <XCircleIcon className=" size-12 rounded-full p-2 bg-red-500/40 text-red-500" />
          </div>
          <div className=" mt-6 text-center sm:mt-5 w-full">
            <h3 className=" text-lg leading-6 font-medium ">
              Payment Cancelled
            </h3>
            <p className=" mt-2 text-sm text-muted-foreground ">
              Something went wrong with the payment. No charge applied. Please
              try again
            </p>
            <Button asChild className=" w-full mt-5 sm:mt-6">
              <Link href={"/"}>Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CancelPaymentPage;
