"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Slider() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
      infinite
      centerMode={false}
      itemClass="item"
    >
      <SliderCard
        image="/images/r1.jpg"
        name="Emily R."
        role="Web Developer"
      />
      <SliderCard
        image="/images/r2.jpg"
        name="Emily R."
        role="Next.js Developer"
      />
      <SliderCard
        image="/images/r3.jpg"
        name="Emily R."
        role="Mern Stack Developer"
      />
    </Carousel>
  );
}
