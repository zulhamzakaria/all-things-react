type ProductDetailsProps = {
  params: {
    productId: number;
  };
};

const page = ({ params }: ProductDetailsProps) => {
  return <h1>product details for id: {params.productId}</h1>;
};

export default page;
