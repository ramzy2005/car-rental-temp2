"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignRight } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full z-50">
      <div
        className={`fixed top-0 w-full flex items-center justify-between px-10 md:px-20 transition-colors duration-300 ${
          isScrolled ? " bg-gray-800" : "bg-transparent"
        }`}
      >
        <div
          id="logo"
          className="flex items-center justify-center h-16"
          style={{ fontFamily: "var(--font-rum-raisin)" }}
        >
          <span className="text-xl md:text-2xl text-gray-100 font-semibold">my</span>
          <span className="text-xl md:text-2xl text-green-400 font-semibold">car</span>
          <span className="text-xl md:text-2xl text-gray-100 font-semibold">direct</span>
        </div>

        <div id="" className="flex items-center text-gray-300">
          <div id="links" className="text-sm space-x-4 hidden lg:flex">
            <a href="#cars" className="hover:underline text-underline-offset-4">
              Cars
            </a>
            <a href="#how-it-works" className="hover:underline text-underline-offset-4">
              How it works
            </a>
            <a href="#comparison" className="hover:underline text-underline-offset-4">
              Subscription Comparison
            </a>
            <a href="#blog" className="hover:underline text-underline-offset-4">
              Book Now
            </a>
            <a href="#contact" className="hover:underline text-underline-offset-4">
              Contact
            </a>
          </div>

          <div id="btns" className="flex items-center ml-4">
            <Link href="/login-page" passHref>
              <Button
                as="a"
                variant="disable"
                className="cursor-pointer px-5 md:px-10 bg-green-500 text-white hover:bg-green-600"
              >
                Log in
              </Button>
            </Link>

            <div className="flex items-center justify-center ml-2 md:ml-4 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <AlignRight className="cursor-pointer hover:scale-110 transition-transform duration-300" />
                </SheetTrigger>
                <SheetContent side="left" className="bg-gray-800 text-gray-300">
                  <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                    <SheetDescription>Navigate through the site</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-4 pl-4">
                    <a href="#about">About</a>
                    <a href="#cars">Cars</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#comparison">Subscription Comparison</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
