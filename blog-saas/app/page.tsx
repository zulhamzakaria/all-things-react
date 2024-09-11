import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Features from "./components/frontend/Features";
import { Hero } from "./components/frontend/Hero";
import Logos from "./components/frontend/Logos";
import { PricingPlans } from "./components/shared/PricingTable";
import PricingPage from "./dashboard/pricing/page";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const userSession = await getUser();
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <Hero />
      <Logos />
      <Features />
      <PricingPage />
    </div>
  );
}
