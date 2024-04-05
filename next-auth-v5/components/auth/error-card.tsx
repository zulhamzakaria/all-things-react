import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Ooops, something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <ExclamationTriangleIcon />
    </CardWrapper>
  );
};

export default ErrorCard;
