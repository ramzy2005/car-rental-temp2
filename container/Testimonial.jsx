"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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

export default function Testimonial() {
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false });
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

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section
      className="py-16 bg-gray-50 overflow-hidden mt-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Don't just take our word for it - hear from our satisfied customers who
          have experienced our exceptional service firsthand.
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] min-w-0 px-4"
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
