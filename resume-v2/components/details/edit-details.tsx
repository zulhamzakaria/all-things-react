import { EditDialogItemIdStore, useDialog } from "@/lib/use-dialog";
import { CreateDetailsSchema } from "@/schemas/details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import { z } from "zod";
import LoadingCard from "../loading-card";
import { UserDetails } from "@/constants";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditDetails = () => {
  const { userId, itemId } = EditDialogItemIdStore();
  // format: http://localhost:3000/details/user_2gb3uVBwoAB9WzzUB5Ix3FIBc8e
  // data is for mutating it
  const { data, isLoading } = useSWR<UserDetails>(
    `/details/${userId}`,
    fetcher
  );
  const [isPending, setIsPending] = useState<boolean>(false);
  const { onClose } = useDialog();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof CreateDetailsSchema>>({
    resolver: zodResolver(CreateDetailsSchema),
  });

  const mappedFields = {
    name: data?.name,
    phone: data?.phone,
    email: data?.email,
    role: data?.role,
    fulllocation: data?.fulllocation,
    shortlocation: data?.shortlocation,
  };

  const onSubmit = async (values: z.infer<typeof CreateDetailsSchema>) => {
    setIsPending(true);
    try {
      const details = values;
      var response = await fetch(`details/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ details }),
      });
      toast.success("Details updated");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return data && !isLoading ? (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col mb-1">
            <Label htmlFor="name" className=" font-sans mb-1 w-1/2 mx-1">
              Name
            </Label>
            <Input
              id="name"
              {...register("name")}
              className=" text-slate-900 mb-2"
              defaultValue={mappedFields.name}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mx-1">{errors.name.message}</p>
            )}
            <Label htmlFor="role" className=" font-sans mb-1 w-1/2 mx-1">
              Role
            </Label>
            <Input
              id="role"
              {...register("role")}
              defaultValue={mappedFields.role}
              className="text-slate-900 mb-2"
            />
            {errors.role && (
              <p className="text-red-400 text-sm mx-1">{errors.role.message}</p>
            )}
            <div className="w-full flex justify-between mb-1">
              <Label htmlFor="email" className=" font-sans mb-1 w-1/2 mx-1">
                Email
              </Label>
              <Label htmlFor="phone" className=" font-sans mb-1 w-1/2 mx-1">
                Phone
              </Label>
            </div>
            <div className="w-full flex justify-between mb-2 space-x-1">
              <Input
                id="email"
                {...register("email")}
                defaultValue={mappedFields.email}
                className="text-slate-900"
              />

              <Input
                id="phone"
                {...register("phone")}
                defaultValue={mappedFields.phone}
                className="text-slate-900"
              />
            </div>
            <div className="w-full mb-2 flex flex-row">
              <div className="w-1/2">
                {errors.email && (
                  <p className="text-red-400 text-sm mx-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                {errors.phone && (
                  <p className="text-red-400 text-sm mx-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full flex justify-between ">
              <Label
                htmlFor="fulllocation"
                className=" font-sans mb-2 w-1/2 mx-1"
              >
                Full Location
              </Label>
              <Label
                htmlFor="shortlocation"
                className=" font-sans mb-2 w-1/2 mx-1"
              >
                Short Location
              </Label>
            </div>
            <div className="w-full space-x-1 grid grid-cols-2">
              <Input
                id="fulllocation"
                {...register("fullLocation")}
                defaultValue={mappedFields.fulllocation}
                className="text-slate-900"
              />
              <Input
                id="shortlocation"
                {...register("shortLocation")}
                defaultValue={mappedFields.shortlocation}
                className=" text-slate-900"
              />
            </div>
            <div className="space-x-1 grid grid-cols-2">
              {errors.fullLocation && (
                <p className="text-red-400 text-sm mx-1">
                  {errors.fullLocation.message}
                </p>
              )}
              {errors.shortLocation && (
                <p className="text-red-400 text-sm mx-1">
                  {errors.shortLocation.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
              className="px-10 mt-10 mb-2 font-mono font-semibold rounded-full  bg-emerald-500  hover:bg-emerald-700 text-white"
            >
              save
            </Button>
          </div>
        </form>
      </div>
    </>
  ) : (
    <div className=" w-full flex justify-center">
      <LoadingCard />
    </div>
  );
};

export default EditDetails;
