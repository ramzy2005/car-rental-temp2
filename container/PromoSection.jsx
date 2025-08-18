"use client";

import React from "react";
import { motion } from "framer-motion";

function PromoSection() {
  return (
    <div className="flex flex-col md:flex-row-reverse mt-20 px-6 md:px-20 h-[500px] gap-6">
      
      {/* Left Side - Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center p-6 md:p-10 text-gray-800"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4">Experience the Best Drive</h2>
        <p className="mb-4">
          Explore our premium car collection tailored to fit your style, comfort, and safety needs. Each car is maintained to perfection to ensure a flawless ride.
        </p>
        <p className="italic border-l-2 border-green-600 pl-4 py-2">
          "Every journey is special when you drive with confidence and style. Our commitment is to deliver excellence on every road."
        </p>
      </motion.div>

      {/* Right Side - Background Image */}
      <motion.div
        className="flex-2 relative rounded-2xl"
        style={{
          backgroundImage: "url('https://i.redd.it/a72u49n37kq21.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)",
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
      </motion.div>
    </div>
  );
}

export default PromoSection;
