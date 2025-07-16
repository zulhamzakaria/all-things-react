export default function ProductDetails({ params }: { params: { id: string } }) {
  return <h1>Product Details {params.id}</h1>;
}
