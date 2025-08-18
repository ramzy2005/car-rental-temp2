import Hero from "@/container/Hero"
import Navbar from "@/components/Navbar";
import Carslider from "@/container/CarSlider";
import WhatMakesMyCar from "@/container/WhatMakesMyCar";
import Package from "@/container/Package";
import OurCars from "@/container/OurCars";
import Brand from "@/container/Brand";
import HowWeWork from "@/container/HowWeWork";
import PromoSection from "@/container/PromoSection";
import Testimonial from "@/container/Testimonial";
import Adv from "@/container/Adv"
import Footer from "@/container/Footer"
import "./globals.css"
function page() {
  return (
    <div className="h-[1000px]">
      <Navbar />
      <Hero/>
      <Carslider />

      <div className="px-10">
      <WhatMakesMyCar />
      </div>
    
      <Package />
      <OurCars />
      <Brand />
      <HowWeWork/>
      <PromoSection />
      <Testimonial />
      <Adv/>
      <Footer/>
    </div>
  )
}

export default page