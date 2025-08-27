"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import { sampleCars } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function CarSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar
  useEffect(() => {
    if (!emblaApi) return;

    const updateProgress = () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setScrollProgress(progress);
    };

    emblaApi.on("scroll", updateProgress);
    emblaApi.on("reInit", updateProgress);

    updateProgress();
  }, [emblaApi]);

  // Prev & Next buttons
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div id="cars" className="relative mx-auto w-11/12 sm:w-10/12 lg:w-9/12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        LUXURY LIMOUSINE <br /> FOR MAXIMUM SATISFACTION
      </h1>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 cursor-pointer text-white p-2 rounded-full hover:bg-opacity-90"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sampleCars.map((car, index) => (
            <motion.div
              key={car.id}
              // Responsive widths
              className="
                flex-[0_0_100%]   /* default = 1 slide per view */
                sm:flex-[0_0_50%] /* 2 per view on tablets */
                lg:flex-[0_0_25%] /* 4 per view on desktop */
                min-w-0 p-2
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="cursor-pointer absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Progress bar */}
      <div className="mt-6 h-2 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-200"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
}
