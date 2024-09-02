"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 chars long" })
    .max(20, { message: "Username must be at most 20 chars long" }),
  email: z.string().email({ message: "Invalid email address format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 chars long" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  birthDay: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female", "others"], { message: "Sex is required" }),
  image: z.instanceof(File, { message: "Image is required" }),
});

const TeacherForm = ({
  requestType,
  data,
}: {
  requestType: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className=" flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className=" text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <label className=" text-xs text-gray-500">Username</label>
      <input
        type="text"
        {...register("username")}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
      />
      {errors.username?.message && (
        <p className=" text-xs font-thin text-red-400">
          {errors.username?.message.toString()}
        </p>
      )}
      <span className=" text-xs text-gray-400 font-medium">
        Personal Informartion
      </span>
      <button className=" bg-black text-white p-2 rounded-md">
        {requestType === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
