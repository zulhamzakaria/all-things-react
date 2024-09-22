"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ImageSlider({ images }: { images: Array<string> }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  }

  function handleNextClick() {
    setMainImageIndex((previousIndex) =>
      // at the last last, get the first image
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    );
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }

  return (
    <div className=" grid gap-6 md:gap-3 items-start">
      <div className=" relative overflow-hidden rounded-lg">
        <Image
          className=" object-cover w-[600px] h-[600px]"
          src={images[mainImageIndex]}
          alt="product-image"
          width={600}
          height={600}
        />
        <div className=" absolute inset-0 flex items-center justify-between px-4">
          <Button onClick={handlePreviousClick} variant={"ghost"} size={"icon"}>
            <ChevronLeft className=" w-6 h-6" />
          </Button>
          <Button onClick={handlePreviousClick} variant={"ghost"} size={"icon"}>
            <ChevronRight className=" w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            className={cn(
              index === mainImageIndex
                ? " border-2 border-primary"
                : " border-white",
              "relative rounded-lg cursor-pointer overflow-hidden"
            )}
            key={index}
          >
            <Image
              src={image}
              alt={`image${index + 1}`}
              width={100}
              height={100}
              className=" object-cover h-[100px] w-[100px] "
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
