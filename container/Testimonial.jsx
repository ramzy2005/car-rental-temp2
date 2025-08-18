"use client";

import React from "react";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion"; // <-- import motion here

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "Exceptional service! The team went above and beyond to ensure we got exactly what we needed. The quality of their work exceeded our expectations.",
    rating: 5,
    image: "/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupHub",
    content:
      "Professional, reliable, and incredibly talented. They transformed our vision into reality with attention to every detail. Highly recommended!",
    rating: 5,
    image: "/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateNow",
    content:
      "Working with this team was a game-changer for our project. Their expertise and dedication made all the difference in our success.",
    rating: 5,
    image: "/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Operations Manager",
    company: "GlobalTech",
    content:
      "Outstanding results and exceptional customer service. They delivered beyond our expectations and were a pleasure to work with throughout.",
    rating: 5,
    image: "/testimonial-4.jpg",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Creative Director",
    company: "DesignStudio",
    content:
      "The creativity and attention to detail were impressive. They understood our brand perfectly and delivered exactly what we envisioned.",
    rating: 5,
    image: "/testimonial-5.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who
            have experienced our exceptional service firsthand.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-4 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                    <p className="text-gray-700 leading-relaxed text-base">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
