"use client";

import Image from "next/image";

const FormModal = ({
  table,
  requestType,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  requestType: "create" | "update" | "delete";
  data?: any;
  id: number;
}) => {
  const size = requestType === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    requestType === "create"
      ? "bg-lamaYellow"
      : requestType === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image
          src={`/${requestType}.png`}
          alt={`${requestType}`}
          width={16}
          height={16}
        />
      </button>
    </>
  );
};

export default FormModal;
