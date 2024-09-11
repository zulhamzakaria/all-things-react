import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import PricingTable from "@/app/components/shared/PricingTable";
import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/requireUser";
import { stripe } from "@/app/utils/stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";

async function getData(userId: string) {
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      User: {
        select: {
          customerId: true,
        },
      },
    },
  });
  return data;
}

const PricingPage = async () => {
  const user = await requireUser();
  const data = await getData(user.id);

  //server action for re-direction
  async function CreateCustomerPortal() {
    "use server"; //for telling nextJs this is a server action

    const session = await stripe.billingPortal.sessions.create({
      customer: data?.User?.customerId as string,
      return_url: "http://localhost:3000/dashboard",
    });

    return redirect(session.url);
  }

  if (data?.status === "active") {
    return (
      <Card className=" w-full">
        <CardHeader>
          <CardTitle>Edit Subscription</CardTitle>
          <CardDescription>
            You may change your payment details and view your invoices by
            clicking the button below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={CreateCustomerPortal}>
            <SubmitButton text="View Subs Details" />
          </form>
        </CardContent>
      </Card>
    );
  }

  return <PricingTable />;
};

export default PricingPage;
