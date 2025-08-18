"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { sampleCars } from "@/data/cars";
import CarCard from "@/components/CarCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="cars" className="relative mx-auto w-9/12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        LUXURY LIMOUSINE <br /> FOR MAXIMUM SATISFACTION
      </h1>

      {/* Prev Button */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 cursor-pointer text-white p-2 rounded-full hover:bg-opacity-90"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {sampleCars.map((car, index) => (
          <motion.div
            key={car.id}
            className="px-2 flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </Slider>

      {/* Next Button */}
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="cursor-pointer absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
}
