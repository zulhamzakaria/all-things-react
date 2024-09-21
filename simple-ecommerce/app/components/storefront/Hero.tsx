import prisma from "@/app/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { notFound } from "next/navigation";

async function GetBanners() {
  const results = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!results) {
    return notFound();
  }

  return results;
}

export async function Hero() {
  const banners = await GetBanners();
  return (
    <Carousel>
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className=" relative h-[60vh] lg:h-[80vh]">
              <Image
                src={banner.imageString}
                alt="banner image"
                className=" rounded-lg object-cover w-full h-full "
                fill
              />
              <div className=" absolute top-6 bg-opacity-75 transition-transform hover:scale-105 p-6 rounded-xl text-white bg-black left-6 ">
                <h1 className=" text-xl lg:text-4xl font-bold">
                  {banner.title}
                </h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ml-16" />
      <CarouselNext className=" mr-16" />
    </Carousel>
  );
}
