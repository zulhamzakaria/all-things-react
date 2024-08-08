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

  const onSubmit = async () => {
    setIsPending(true);
    try {
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return data && !isLoading ? (
    <>
      <div style={{ display: "none" }}>
        {data.name}
        {data.email}
        {data.phone}
        {data.role}
        {data.fulllocation}
        {data.shortlocation}
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col mb-1">
            <Label htmlFor="name" className=" font-sans mb-2 w-1/2 mx-1">
              Name
            </Label>
            <Label htmlFor="role" className=" font-sans mb-2 w-1/2 mx-1">
              Role
            </Label>
            <div className="w-full flex justify-between ">
              <Label htmlFor="email" className=" font-sans mb-2 w-1/2 mx-1">
                Email
              </Label>
              <Label htmlFor="phone" className=" font-sans mb-2 w-1/2 mx-1">
                Phone
              </Label>
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
            <div>
              {errors.name && (
                <p className="text-red-400 text-sm mx-1">
                  {errors.name.message}
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
