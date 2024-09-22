import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

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
                <Image
                  src={image}
                  alt="product-image"
                  fill
                  className=" object-cover object-center w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" ml-16" />
        <CarouselNext className=" mr-16 " />
      </Carousel>
      <div className=" flex justify-between items-center mt-2 ">
        <h1 className=" font-semibold text-xl ">{product.name}</h1>
        <h3 className=" inline-flex items-center rounded-md ring-1 ring-inset ring-primary/10  px2 font-medium py-1 text-xs bg-primary/10">
          RM{product.price}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {product.description}
      </p>
      <Button className=" w-full mt-5" asChild>
        <Link href={`/product/${product.id}`}>Learn more</Link>
      </Button>
    </div>
  );
};
export default ProductCard;
