import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, XCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessfulPaymentPage = () => {
  return (
    <section className=" w-full min-h-[80vh] flex items-center justify-center ">
      <Card className=" w-[350px]">
        <div className=" p-6">
          <div className=" w-full flex justify-center">
            <Check className=" size-12 rounded-full p-2 bg-green-500/40 text-green-500" />
          </div>
          <div className=" mt-6 text-center sm:mt-5 w-full">
            <h3 className=" text-lg leading-6 font-medium ">Payment Success</h3>
            <p className=" mt-2 text-sm text-muted-foreground ">
              Payment Received. Thank you for your purchase.
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

export default SuccessfulPaymentPage;
