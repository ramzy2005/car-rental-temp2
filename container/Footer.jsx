"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const carBrands = [
  "/audi-svgrepo-com.svg",
  "/chevrolet-svgrepo-com.svg",
  "/land-rover-svgrepo-com.svg",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-gray-100 text-gray-800 w-full min-h-[80vh] py-12 px-4 sm:px-8 flex flex-col justify-between"
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Top section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* Company Info */}
        <motion.div className="max-w-md" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">GreenRide Rentals</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            GreenRide is your trusted car rental partner offering affordable, eco-conscious rides across the country. Explore luxury, efficiency, and freedom with every drive.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-green-600 transition" aria-label="Website">
              <Globe size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-600 transition">About Us</a></li>
              <li><a href="/fleet" className="hover:text-green-600 transition">Our Fleet</a></li>
              <li><a href="/pricing" className="hover:text-green-600 transition">Pricing</a></li>
              <li><a href="/contact" className="hover:text-green-600 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 support@greenride.com</li>
              <li>📍 123 Eco Drive, NY, USA</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Car Brands Section */}
      <motion.div
        className="border-t border-gray-300 mt-12 pt-8"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6">
          {carBrands.map((logo, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Image
                src={logo}
                alt="Car brand logo"
                width={60}
                height={60}
                className="opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="mt-8 text-center text-sm text-gray-500"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        © {new Date().getFullYear()} GreenRide Rentals. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
