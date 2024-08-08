import { EditDialogItemIdStore, useDialog } from "@/lib/use-dialog";
import { CreateDetailsSchema } from "@/schemas/details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import { z } from "zod";
import LoadingCard from "../loading-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditDetails = () => {
  const { userId, itemId } = EditDialogItemIdStore();
  // format: http://localhost:3000/details/user_2gb3uVBwoAB9WzzUB5Ix3FIBc8e
  // data is for mutating it
  const { data, isLoading } = useSWR(`/details/${userId}`, fetcher);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { onClose } = useDialog();

  const {} = useForm<z.infer<typeof CreateDetailsSchema>>({
    resolver: zodResolver(CreateDetailsSchema),
  });

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
    <div>{userId}</div>
  ) : (
    <div className=" w-full flex justify-center">
      <LoadingCard />
    </div>
  );
};

export default EditDetails;
