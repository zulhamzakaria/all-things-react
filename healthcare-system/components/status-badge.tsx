import { StatusIcon } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-rose-600": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="status"
        width={20}
        height={20}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-rose-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;