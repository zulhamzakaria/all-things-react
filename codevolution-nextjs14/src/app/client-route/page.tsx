"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientOnlyPage() {
  //   const result = serverSideFunction();

  const settings = { dots: true };

  return (
    <div className="image-slider-container">
      <h1>This is a client-only component</h1>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
