"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { Fuel, Gauge, Timer } from "lucide-react";
import Link from "next/link";

export default function OurCars() {
  const cars = [
    { badge: "Best Seller", img: "car6.png", name: "Toyota Supra", price: "$180/day", fuel: "Petrol", speed: "250 km/h", acceleration: "4.2s", detailLink: "/car-details/toyota-supra", bookLink: "/booking" },
    { badge: "New", img: "car5.png", name: "BMW M4", price: "$200/day", fuel: "Petrol", speed: "280 km/h", acceleration: "3.9s", detailLink: "/car-details/bmw-m4", bookLink: "/booking" },
    { badge: "Luxury", img: "car6.png", name: "Audi R8", price: "$350/day", fuel: "Petrol", speed: "330 km/h", acceleration: "3.5s", detailLink: "/car-details/audi-r8", bookLink: "/booking" },
    { badge: "Sport", img: "car7.png", name: "Mercedes AMG", price: "$400/day", fuel: "Petrol", speed: "320 km/h", acceleration: "3.6s", detailLink: "/car-details/mercedes-amg", bookLink: "/booking" },
    { badge: "Electric", img: "car-hero.webp", name: "Tesla Model S", price: "$300/day", fuel: "Electric", speed: "250 km/h", acceleration: "3.2s", detailLink: "/car-details/tesla-model-s", bookLink: "/booking" },
  ];

  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [autoplay, ClassNames()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    emblaApi.on("scroll", () => autoplay.stop());
    emblaApi.on("settle", () => autoplay.play());

    onSelect();
  }, [emblaApi]);

  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);
  const handleMouseEnter = () => autoplay.stop();
  const handleMouseLeave = () => autoplay.play();

  return (
    <section
      id="cars"
      className="relative mt-20 px-6 md:px-20 py-20 bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        LUXURY LIMOUSINE <br /> FOR MAXIMUM SATISFACTION
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {cars.map((car, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2"
            >
              <div className="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition">
                <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full self-start mb-4">
                  {car.badge}
                </span>
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 object-contain mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">{car.name}</h3>
                <p className="text-lg font-bold text-green-700 mb-4">{car.price}</p>

                <div className="flex justify-between text-green-800 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Fuel className="w-4 h-4" /> {car.fuel}
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" /> {car.speed}
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4" /> {car.acceleration}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <Link href={car.detailLink} className="flex-1">
                    <button className="w-full cursor-pointer border border-green-700 py-2 rounded-lg text-green-900 hover:bg-green-100 hover:border-transparent transition">
                      View Detail
                    </button>
                  </Link>
                  <Link href={car.bookLink} className="flex-1">
                    <button className="w-full bg-green-700 cursor-pointer text-white py-2 rounded-lg hover:bg-green-800 transition">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-green-700 scale-125"
                : "bg-green-500 hover:bg-green-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
