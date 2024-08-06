import { useDialog } from "@/lib/use-dialog";
import { AddDetailsSchema } from "@/schemas/details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { z } from "zod";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CreateDetails = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = useSWR(`/details/${userId}`, fetcher);
  const { onClose } = useDialog();

  const {} = useForm<z.infer<typeof AddDetailsSchema>>({
    resolver: zodResolver(AddDetailsSchema),
  });

  return <div>CreateDetails</div>;
};

export default CreateDetails;
