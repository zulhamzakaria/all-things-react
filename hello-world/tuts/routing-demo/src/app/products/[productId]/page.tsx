export default function ProductDetails({ params }: PageProps) {
  return <h1>Product Details {params.productId}</h1>;
}

interface PageProps {
  params: { productId: string };
}
