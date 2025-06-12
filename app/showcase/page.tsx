import Footer from "@/components/demos/Footer";
import { NavbarDemo } from './../../components/demos/NavbarDemo';
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { HeroParallaxDemo } from "@/components/demos/HeroParallaxDemo";

const Showcase = () => {
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
      {/* <section className="md:px-0 mx-3 xl:w-4/5 2xl:w-[68%] md:mx-auto"> */}
        
        <HeroParallaxDemo/>

        <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
              <LetsMakeThingsHappenSection />
        </section>


      {/* </section> */}

      <Footer />
    </div>
  );
};

export default Showcase;
