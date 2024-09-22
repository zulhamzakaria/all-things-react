interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>product card</div>;
};
export default ProductCard;
