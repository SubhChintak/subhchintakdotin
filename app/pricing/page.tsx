
import Footer from "@/components/demos/Footer";
import { NavbarDemo } from '../../components/demos/NavbarDemo';
import React from 'react';
import PriceSection from "@/components/demos/PriceSection";

export default function Pricing (){
  return (

<div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <NavbarDemo/>
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
       <PriceSection/>
      </section>
      <Footer />

    </div>
  );
};
