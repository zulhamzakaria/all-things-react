"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const PHONES = [
  "/phones/hr.jpg",
  "/phones/jn.jpg",
  "/phones/elgato.jpg",
  "/phones/maxwell.jpg",
  "/phones/mc.jpg",
  "/phones/kl-skyline.jpg",
];

function splitArray<T>(array: Array<T>, columns: number) {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % columns;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const colRef = useRef<HTMLDivElement | null>(null);
  const [colHeight, setColHeight] = useState(0);
  const duration = `${colHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!colRef.current) return;
    const resizeObserver = new window.ResizeObserver(() => {
      setColHeight(colRef.current?.offsetHeight ?? 0);
    });
    resizeObserver.observe(colRef.current);

    // clean-up
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={colRef}
      className={cn(" animate-marquee space-y-8 py-4", className)}
      style={{ "--maquee-duration": duration } as React.CSSProperties}
    >
      review col
    </div>
  );
}

function ReviewGrid() {
  // animation only work if it's in view
  // useRef is for accessing DOM elements
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const col1 = columns[0];
  const col2 = columns[1];
  const col3 = splitArray(columns[0], 2);
  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn />
        </>
      )}
    </div>
  );
}

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden
        src="/what-people-are-buying.png"
        alt="sold-items"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
