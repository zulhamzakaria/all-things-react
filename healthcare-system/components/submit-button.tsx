import Image from "next/image";
import { Button } from "./ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
}: SubmitButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      className={className ?? " shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className=" flex items-center gap-4">
          <Image
            src={"/assets/icons/loader.svg"}
            height={24}
            width={24}
            alt="loading"
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
