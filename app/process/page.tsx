"use client";
import Footer from "@/components/demos/Footer";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import { NavbarDemo } from './../../components/demos/NavbarDemo';
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { FeaturesSectionDemo } from "@/components/demos/features-section-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo"


const Process = () => {
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


      <Element name="process">
              <main className="md:px-0 mx-6 md:mx-auto mt-10">
              <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Our{" "}
                  <span className="text-blue-500 flex gap-x-1 items-center">
                    {" "}
                    <Image
                      src={"/icons/squiggle.svg"}
                      width={10000}
                      height={10000}
                      className="w-6"
                      alt="image"
                    />
                    Creative
                    <Image
                      src={"/icons/star.svg"}
                      width={10000}
                      height={10000}
                      className="w-6 mb-8"
                      alt="image"
                    />
                  </span>{" "}
                  Process
                </h1>
      
                <p className="text-center 
                py-4 md:w-1/2 mx-auto 
                text-xl md:text-2xl text-gray-500">
                  All of our services are designed to help your business to get
                  noticed.
                </p>
      
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <AnimatedBeamMultipleOutputDemo />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                  <BoxRevealDemo />
                </div>
      
                </div>
      
              </main>
            </Element>


      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        {/* <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Design & Code That Helps Your Business Grow"
          />
        </div> */}

        <FeaturesSectionDemo/>



      </section>

      <Footer />
    </div>
  );
};

export default Process;
