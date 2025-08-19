import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../Assets/brands/backgroundImge.svg";
import polygon1 from "../../Assets/brands/Polygon 1.svg";
import polygon2 from "../../Assets/brands/Polygon 2.svg";
import polygon3 from "../../Assets/brands/Polygon 3.svg";
import polygon4 from "../../Assets/brands/Polygon 4.svg";
import polygon5 from "../../Assets/brands/Polygon 5.svg";
import polygon6 from "../../Assets/brands/Polygon 6.svg";
import Arrow from "../../Assets/brands/Arrow up-right.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    if (!section || !scrollContainer) return;

    const updateScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const horizontalScrollLength = scrollWidth - clientWidth;

      gsap.to(scrollContainer, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${horizontalScrollLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("resize", updateScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#171717FC] opacity-95 min-h-screen xl:flex hidden items-center justify-center"
    >
      <div
        className="relative flex items-center justify-center text-white bg-cover bg-no-repeat object-fill min-h-screen w-full"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0" />

        {/* Horizontal Scroll Container */}
                                   <div
            ref={scrollRef}
            className="relative z-10 flex flex-row gap-40 w-full px-8 md:px-16 lg:px-24 py-10 items-center"
            style={{
              minHeight: "100vh",
              fontSize: "1.35rem",
              willChange: "transform",
            }}
          >
          {/* Title */}
          <div className="flex flex-col items-center min-w-[350px] max-w-[400px]">
            <h1 className="text-5xl font-bold tracking-wider mb-8">
              PREMIUM <br /> BRANDS
            </h1>
          </div>

                     {/* Brand 1 */}
           <div className="pl-16 flex flex-col min-w-[600px] max-w-[650px] relative">
            <div className="pr-14 pt-10 absolute">
              <p className="text-lg">( 60+ PRODUCTS )</p>
            </div>
                         <div className="grid grid-cols-2 gap-12">
               <img src={polygon1} alt="" className="w-[600px] h-[600px] object-contain" />
               <img src={polygon2} alt="" className="w-[420px] h-[420px] object-contain" />
             </div>
            <div className="flex pl-2 absolute bottom-36">
              <h1 className="text-4xl font-semibold tracking-wider">
                NATURAL STONE
              </h1>
            </div>
            <div className="flex justify-end pr-[5rem]">
              <button className=" text-lg">Explore more →</button>
            </div>
          </div>

                     {/* Brand 2 */}
           <div className="relative top-24 flex flex-col min-w-[600px] max-w-[650px]">
            <div className="flex justify-end pr-[6rem] pb-1 ">
              <button className="mt-2 text-lg">Explore more →</button>
            </div>
            <div className="flex pl-2 absolute top-28">
              <h1 className="text-4xl font-semibold tracking-wider">
                CERAMIC TILES
              </h1>
            </div>
                         <div className="grid grid-cols-2 items-end gap-12">
               <img src={polygon4} alt="" className="w-[600px] h-[600px] object-contain" />
               <img src={polygon3} alt="" className="w-[420px] h-[420px] object-contain" />
             </div>
            <div className="pr-14 pb-1 absolute bottom-28">
              <p className="text-lg">( 75+ PRODUCTS )</p>
            </div>
          </div>

                     {/* Brand 3 */}
           <div className="flex flex-col min-w-[600px] max-w-[650px] relative">
            <div className="pr-14 pb-1 absolute top-28">
              <p className="text-lg">( 75+ PRODUCTS )</p>
            </div>
                         <div className="grid grid-cols-2 gap-12">
               <img src={polygon5} alt="" className="w-[600px] h-[600px] object-contain" />
               <img src={polygon6} alt="" className="w-[420px] h-[420px] object-contain" />
             </div>
            <div className="flex pl-2 absolute bottom-36">
              <h1 className="text-4xl font-semibold tracking-wider">
                Glass TILES
              </h1>
            </div>
            <div className="flex justify-end pr-[10rem]">
              <button className="mt-2 text-lg">Explore more →</button>
            </div>
          </div>

          {/* Explore Arrow */}
          <div className="flex flex-col gap-4 items-center justify-center min-w-[300px] max-w-[350px]">
            <div className="bg-[#FCFCFC59] h-[5rem] w-[5rem] rounded-full flex items-center justify-center">
              <button className="bg-white p-3 rounded-full">
                <img src={Arrow} alt="" className="w-6 h-6" />
              </button>
            </div>
            <p className="text-lg">(Tap to explore more)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
