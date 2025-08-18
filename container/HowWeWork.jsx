"use client";

import React from "react";
import { Settings2, Shield, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

function FeaturesSection() {
  const features = [
    {
      icon: <Settings2 className="w-6 h-6 text-green-600" />,
      title: "Your Car",
      description:
        "Select from an extensive fleet that matches your needs, whether it's a compact city car, a family SUV, or a high-performance sports car. Every vehicle is fully maintained and ready for your journey.",
      direction: "left",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Insurance Collection",
      description:
        "We provide comprehensive insurance coverage options to ensure peace of mind. Our easy-to-understand policies protect you and your rental in any situation, giving you full confidence on the road.",
      direction: "right",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Delivery",
      description:
        "Convenient delivery directly to your desired location. Whether it’s your home, hotel, or office, we ensure timely and secure delivery so you can start your journey without delays.",
      direction: "bottom",
    },
    {
      icon: <Star className="w-6 h-6 text-green-600" />,
      title: "Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to answer questions, handle requests, and provide assistance whenever you need it. Your satisfaction is our top priority.",
      direction: "top",
    },
  ];

  // Variants for sliding from different directions
  const variants = {
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    top: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    bottom: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  };

  return (
    <div id="how-it-works" className="mt-20 px-6 md:px-20 py-10 bg-gray-50">
      <div className="flex flex-col justify-center lg:flex-row gap-10">
        {/* Left Side - Animated */}
        <motion.div
          className="flex-1 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants.left}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-4">
            At our company, we strive to offer the best service and quality in the car rental industry.
            Every vehicle is carefully maintained, and our team is dedicated to making your experience seamless.
          </p>
          <p className="text-gray-600 mb-4">
            We provide a wide range of vehicles to match your lifestyle, whether you're planning a weekend getaway, a business trip, or a long-term rental. Each car undergoes regular inspections to ensure safety, reliability, and peak performance.
          </p>
          <p className="italic text-gray-500 border-l-2 border-green-600 pl-4 py-2">
            "Our commitment is to provide reliability, comfort, and exceptional customer service in every ride. With flexible options, transparent pricing, and round-the-clock support, we ensure that your journey is as smooth and enjoyable as possible."
          </p>
        </motion.div>

        {/* Right Side - Features */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={variants[feature.direction]}
              transition={{ duration: 0.6, delay: (index + 1) * 0.3 }} // delay shifted by +1 to not overlap with left div
              className="bg-white rounded-2xl p-6 flex flex-col border-b-4 border-green-100 h-full items-start md:items-center lg:items-start text-left md:text-center lg:text-left"
            >
              <div className="bg-green-100 w-[60px] h-[60px] rounded-full p-3 mb-3 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
