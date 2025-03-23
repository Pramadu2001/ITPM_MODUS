"use client";

import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 1, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 764 }, items: 1, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

function Slider() {
  const [hideArrows, setHideArrows] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setHideArrows(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setHideArrows(false), 1000); // Show arrows after 1s of inactivity
    };

    document.addEventListener("wheel", handleScroll);
    document.addEventListener("touchmove", handleScroll); // Mobile scrolling

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={!hideArrows} // Hide arrows when scrolling
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <SliderCard image="/images/r1.jpg" name="Jastica Doe" role="Web Developer" />
      <SliderCard image="/images/r2.jpg" name="John Doe" role="Next.js Developer" />
      <SliderCard image="/images/r3.jpg" name="Jones Doe" role="MERN Developer" />
    </Carousel>
  );
}

export default Slider;


