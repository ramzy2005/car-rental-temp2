"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { sampleCars } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function CarSlider() {
  const autoplay = Autoplay({ delay: 2500, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay, ClassNames()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Dots handling
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    // Pause autoplay while scrolling
    emblaApi.on("scroll", () => autoplay.stop());
    emblaApi.on("settle", () => autoplay.play());

    onSelect();
  }, [emblaApi]);

  // Pause autoplay on hover
  const handleMouseEnter = () => autoplay.stop();
  const handleMouseLeave = () => autoplay.play();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

  return (
    <div
      id="cars"
      className="relative mx-auto w-11/12 sm:w-10/12 lg:w-9/12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        LUXURY LIMOUSINE <br /> FOR MAXIMUM SATISFACTION
      </h1>

      {/* Prev Button - hidden on small screens */}
      <button
        onClick={scrollPrev}
        className="hidden sm:flex cursor-pointer  absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 
                   bg-gray-700 bg-opacity-80 text-white p-2 rounded-full 
                   hover:bg-gray-600 transition-colors"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sampleCars.map((car, index) => (
            <div
              key={car.id}
              className="
                flex-[0_0_100%] 
                sm:flex-[0_0_50%] 
                lg:flex-[0_0_25%] 
                min-w-0 p-2
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Next Button - hidden on small screens */}
      <button
        onClick={scrollNext}
        className="hidden cursor-pointer sm:flex absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 
                   bg-gray-700 bg-opacity-80 text-white p-2 rounded-full 
                   hover:bg-gray-600 transition-colors"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-gray-600 scale-110"
                : "bg-gray-400 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
