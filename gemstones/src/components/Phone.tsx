import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  darkMode?: boolean;
}

const Phone = ({
  className,
  imgSrc,
  darkMode = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          darkMode
            ? "/phone-template-dark-edges.png"
            : "phone-template-white-edges.png"
        }
        className=" pointer-events-none z-50 select-none"
        alt="phone-image"
      />
      {/* -z-10 sends div to the back; z-axis */}
      <div className=" absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          className="object-cover"
          alt="cover"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Phone;
