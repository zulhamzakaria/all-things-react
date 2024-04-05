import Header from "@/components/auth/header";
import BackButton from "./back-button";
import { CardHeader, Card, CardFooter } from "@/components/ui/card";
const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops, something went wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
