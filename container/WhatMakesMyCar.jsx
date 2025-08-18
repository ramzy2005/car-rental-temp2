"use client";

import React from "react";
import { motion } from "framer-motion";

const headingWords = [
  { word: "What", from: "left" },
  { word: "Makes", from: "bottom" },
  { word: "My", from: "right" },
  { word: "Car", from: "top" },
  { word: "Direct", from: "left" },
  { word: "Different", from: "right" },
];

function WhatMakesMyCar() {
  return (
    <div className="mt-40 flex flex-col md:flex-col lg:flex-row justify-between items-center w-full bg-gray-200 px-6 sm:px-10 lg:px-20 py-10 rounded-4xl gap-8">
      {/* Text Section */}
      <div className="flex-1">
        {/* Animated Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 flex flex-wrap gap-2">
          {headingWords.map((item, index) => {
            const fromX =
              item.from === "left"
                ? -50
                : item.from === "right"
                ? 50
                : 0;
            const fromY =
              item.from === "top"
                ? -30
                : item.from === "bottom"
                ? 30
                : 0;

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: fromX, y: fromY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {item.word}
              </motion.span>
            );
          })}
        </h1>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed"
        >
          At our dealership, we offer a unique blend of quality, service, and
          value that truly sets us apart from the competition. Every vehicle in
          our collection is carefully selected and maintained to meet the
          highest standards, giving you confidence in every drive.
          <div className="italic border-l-2 pl-2 py-1 mt-2 border-gray-600">
            Our team is dedicated to providing personalized assistance, guiding
            you through each step with transparency and care.
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <img
          src="./car-hero.webp"
          className="w-[100%] sm:w-[80%] max-w-md object-contain"
          alt="Car"
        />
      </motion.div>
    </div>
  );
}

export default WhatMakesMyCar;
