import { Metadata } from "next";

type ProductDetailsProps = {
  params: {
    productId: number;
  };
};

export const generateMetadata = ({ params }: ProductDetailsProps): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const page = ({ params }: ProductDetailsProps) => {
  return <h1>product details for id: {params.productId}</h1>;
};

export default page;
