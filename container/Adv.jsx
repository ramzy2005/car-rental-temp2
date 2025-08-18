"use client";

import React from "react";

const CarRentalAd = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-8 px-4 sm:py-10 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        {/* Text content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Drive Your Dream Car Today
          </h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            Premium car rentals made easy and affordable. Choose from a wide range of vehicles to suit your journey.
          </p>
        </div>

        {/* Call to action */}
        <a
          href="/fleet"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium text-sm md:text-base px-6 py-3 rounded-2xl shadow-md transition duration-300"
        >
           Explore Our Fleet
        </a>
      </div>
    </section>
  );
};

export default CarRentalAd;
