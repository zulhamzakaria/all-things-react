import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

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
  return (
    <div className=" rounded-lg">
      <Carousel className=" w-full mx-auto">
        <CarouselContent>
          {product.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className=" relative h-[330px]">
                <Image src={image} alt='product-image' fill  />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default ProductCard;
