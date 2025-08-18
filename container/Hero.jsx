"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative top-0 bg-[url('https://media.toyota.com.br/998b4b41-8f6a-4d4a-bcf2-c4bc8b3c9117.png')] bg-cover bg-center h-[550px] flex flex-row justify-center mask-luminance mask-b-from-white mask-b-from-30% mask-b-to-black pt-20 px-10 md:px-20 overflow-hidden font-poppins">
      
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      <div className="flex-1 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl text-gray-200 font-bold text-start"
        >
          Car And Van Subscription From 1 To 49 Months
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6"
        >
          <button className="px-5 py-2 bg-green-500 hover:bg-green-500/80 text-sm cursor-pointer">
            BROWSE CARS
          </button>
          <button className="px-5 py-2 border text-white text-sm hover:opacity-60 cursor-pointer">
            BROWSE ELECTRIC VEHICLES
          </button>
        </motion.div>
      </div>

      <div className="flex-1 relative z-10 flex flex-row justify-end pt-28">
        <div className="flex flex-col gap-1">
          <div className="w-[20px] h-[20px] rounded-full border border-green-500"></div>
          <div className="w-[40px] h-[40px] rounded-full bg-green-500"></div>
          <div className="w-[20px] h-[20px] rounded-full border border-green-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
