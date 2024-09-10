import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { SubmitButton } from "../dashboard/SubmitButton";
import Link from "next/link";
import { CreateSubscription } from "@/app/actions";

interface PricingTableProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
}

export const PricingPlans: PricingTableProps[] = [
  {
    id: 1,
    cardTitle: "Freelancer",
    cardDescription:
      "Vivamus auctor, nulla eu tincidunt tincidunt, justo odio tincidunt justo, vel bibendum justo justo nec justo",
    benefits: ["1 Site", "1000 Visitors"],
    priceTitle: "Freemium",
  },
  {
    id: 2,
    cardTitle: "Startup",
    cardDescription:
      "Vivamus auctor, nulla eu tincidunt tincidunt, justo odio tincidunt justo, vel bibendum justo justo nec justo",
    benefits: ["100 Sites", "1000_000 Visitors"],
    priceTitle: "$29",
  },
];

const PricingTable = () => {
  return (
    <>
      <div className=" max-w-3xl mx-auto text-center">
        <h1 className=" font-semibold text-primary">Pricing</h1>
        <h1 className=" mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing Plans for <span className=" text-primary">everyone</span> and
          every <p className=" text-blue-500">budget</p>
        </h1>
      </div>
      {/* leading is for the spacing between paragraph */}
      <p className=" mx-auto mt-6 max-w-2xl text-center leading-tight text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        sapien vel justo rhoncus ultricies.
      </p>

      {/* rendition: lg: 2 cards horizontally, mobile: 2 cards vertically */}
      <div className=" grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
        {PricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={plan.id === 2 ? " border-blue-500" : ""}
          >
            <CardHeader>
              {plan.id === 2 ? (
                <div className=" flex items-center justify-between">
                  <h3 className=" dark:text-primary text-blue-500">Startup</h3>
                  <p className=" dark:text-primary text-blue-500 font-semibold leading-5 rounded-full dark:bg-primary/10 px-3 py-1 text-xs">
                    Most popular
                  </p>
                </div>
              ) : (
                <>
                  <CardTitle>{plan.cardTitle}</CardTitle>
                </>
              )}

              <CardDescription>{plan.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" mt-6 text-4xl font-bold tracking-tight">
                {plan.priceTitle}
              </p>
              {/* leading is for the gap between lines */}
              <ul className=" mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className=" flex gap-x-3">
                    <Check className=" dark:text-primary text-blue-500 size-5 " />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.id === 2 ? (
                <form action={CreateSubscription} className="w-full">
                  <SubmitButton text="Get Plan" className=" mt-5 w-full" />
                </form>
              ) : (
                // asChild since it contains a Link
                <Button className="w-full mt-6" asChild>
                  <Link href={"/dashboard"}>Try for Free</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PricingTable;
