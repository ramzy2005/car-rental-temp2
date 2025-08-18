"use client";
import { motion } from "framer-motion";

import React from "react";
import Slider from "react-slick";
import { Fuel, Gauge, Timer } from "lucide-react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurCars() {
  const cars = [
    {
      badge: "Best Seller",
      img: "./car1.jpg", // Transparent bg example or you can swap
      name: "Toyota Supra",
      price: "$180/day",
      fuel: "Petrol",
      speed: "250 km/h",
      acceleration: "4.2s",
      detailLink: "/car-details/toyota-supra",
      bookLink: "/booking",
    },
    {
      badge: "New",
      img: "./car2.jpg", 
      name: "BMW M4",
      price: "$200/day",
      fuel: "Petrol",
      speed: "280 km/h",
      acceleration: "3.9s",
      detailLink: "/car-details/bmw-m4",
      bookLink: "/booking",
    },
    {
      badge: "Luxury",
      img: "./car2.jpg",
      name: "Audi R8",
      price: "$350/day",
      fuel: "Petrol",
      speed: "330 km/h",
      acceleration: "3.5s",
      detailLink: "/car-details/audi-r8",
      bookLink: "/booking",
    },
    {
      badge: "Sport",
      img: "./car1.jpg",
      name: "Mercedes AMG",
      price: "$400/day",
      fuel: "Petrol",
      speed: "320 km/h",
      acceleration: "3.6s",
      detailLink: "/car-details/mercedes-amg",
      bookLink: "/booking",
    },
    {
      badge: "Electric",
      img: "./car2.jpg",
      name: "Tesla Model S",
      price: "$300/day",
      fuel: "Electric",
      speed: "250 km/h",
      acceleration: "3.2s",
      detailLink: "/car-details/tesla-model-s",
      bookLink: "/booking",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-3 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-green-500 rounded-full transition-transform duration-300"></div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="blog" className="mt-20 px-6 md:px-20 bg-gray-900 py-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row text-start mb-12 w-full gap-6">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-300 flex-1">OUR CARS</h2>
        <p className="text-gray-300 text-sm md:text-base flex-1">
          Discover our collection of premium vehicles tailored to your driving desires. From sleek sports cars to comfortable sedans, we have the perfect ride for every journey.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="gap-6">
  {cars.map((car, index) => (
    <motion.div
      key={index}
      className="px-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
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
    </motion.div>
  ))}
</Slider>


      {/* Active Dot Styling */}
      <style jsx global>{`
        /* Inactive dots */
        .slick-dots li div {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #16a34a;
          transition: transform 0.3s, background-color 0.3s;
          margin-top: 20px;
        }

        /* Active dot */
        .slick-dots li.slick-active div {
          transform: scale(2);
          background-color: #10b981;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default OurCars;
