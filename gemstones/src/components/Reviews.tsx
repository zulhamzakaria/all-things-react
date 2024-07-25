import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden
        src="/what-people-are-buying.png"
        alt="sold-items"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
    </MaxWidthWrapper>
  );
};

export default Reviews;
