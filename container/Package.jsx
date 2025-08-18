"use client";

import React from "react";
import { Shuffle, DollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";

function Package() {
  const packages = [
    {
      icon: <Shuffle className="w-10 h-10 text-blue-400" />,
      title: "Flexible Options",
      description:
        "We understand that every customer’s needs are unique. That’s why we offer a wide range of cars, from compact city vehicles to spacious SUVs, with flexible rental durations ranging from a single day to several months. You have complete freedom to choose what fits your schedule and budget without being tied down to strict contracts.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-green-400" />,
      title: "Affordable Rates",
      description:
        "Our pricing is designed to give you maximum value for your money. We regularly review market rates to ensure we remain competitive, and we offer seasonal discounts and special deals for loyal customers. With us, you can enjoy a top-quality driving experience without worrying about hidden fees or inflated prices.",
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-400" />,
      title: "Quick Process",
      description:
        "Your time is valuable, and we make sure not to waste it. Our booking process is quick and easy — you can reserve a car online in just a few clicks and pick it up almost immediately upon arrival. Our team ensures all paperwork is ready in advance, so you can spend more time driving and less time waiting.",
    },
  ];

  return (
    <div id="comparison" className="mt-40 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl md:text-4xl text-center text-gray-700 mb-10"
      >
        The Full Package <br /> In One Month Payment
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.3 }}
            className="bg-gray-100 shadow-md rounded-2xl p-6 flex flex-col 
                       text-center lg:text-left hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center lg:justify-start">
              {pkg.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {pkg.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pkg.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Package;
