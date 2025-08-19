import About from "./About";
import Choose from "./Choose";
import Collections from "./Collections";
import Explore from "./Explore";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Inspirations from "./Inspirations";
import Map from "./Map";
import OtherProducts from "./OtherProducts";

const CristaloFlexx = () => {
  return (
   <div className="bg-black overflow-x-hidden">
    <Hero/>
    <Collections/>
    <Explore/>
    <Map/>
    <OtherProducts/>
    {/* <Choose/> */}
    {/* <Inspirations/> */}
    <About/>
    <Faqs/>
   </div>
  );
};

export default CristaloFlexx;
