import { EditDialogItemIdStore, useDialog } from "@/lib/use-dialog";
import { CreateDetailsSchema } from "@/schemas/details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import { z } from "zod";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EditDetails = () => {
  const { userId, itemId } = EditDialogItemIdStore();
  // format: http://localhost:3000/details/user_2gb3uVBwoAB9WzzUB5Ix3FIBc8e
  // data is for mutating it
  const { data } = useSWR(`/details/${userId}`, fetcher);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { onClose } = useDialog();

  const {} = useForm<z.infer<typeof CreateDetailsSchema>>({
    resolver: zodResolver(CreateDetailsSchema),
  });

  const onSubmit = async () => {
    setIsLoading(true);
    try {
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return <div>{userId}</div>;
};

export default EditDetails;
