import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../Assets/inspirations/image1.png";
import image2 from "../../../Assets/inspirations/image2.png";
import image3 from "../../../Assets/inspirations/image3.png";
import image4 from "../../../Assets/inspirations/image4.png";
import image5 from "../../../Assets/inspirations/image5.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Inspirations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false,    // 🔄 ensures animation triggers every time you scroll back
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#faf7f2] min-h-screen flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1
        className="text-3xl font-serif mb-3 tracking-wider"
        data-aos="fade-up"
      >
        INSPIRATIONS
      </h1>

      {/* Images collage */}
      <div
        className="relative w-full max-w-[900px] h-[520px] mb-12 flex justify-center items-center"
        data-aos="zoom-in"
      >
        {/* Top Left */}
        <img
          src={image1}
          alt="Modern Bathroom"
          data-aos="fade-right"
          className="absolute left-0 top-0 w-[300px] rounded-xl z-50 object-cover shadow-md"
        />
        {/* Top Right */}
        <img
          src={image2}
          alt="Minimal Kitchen"
          data-aos="fade-left"
          className="absolute right-0 top-0 w-[300px] rounded-xl object-cover shadow-md"
        />
        {/* Center */}
        <img
          src={image3}
          alt="Vanity Closeup"
          // data-aos="fade-up"
          className="absolute left-1/2 top-1/2 w-[500px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-lg z-10"
        />
        {/* Bottom Left */}
        <img
          src={image4}
          alt="Oven Wall"
          data-aos="fade-right"
          className="absolute bottom-0 left-0 w-[300px] rounded-xl object-cover shadow-md"
        />
        {/* Bottom Right */}
        <img
          src={image5}
          alt="White Kitchen"
          data-aos="fade-left"
          className="absolute bottom-0 z-50 right-0 w-[300px] rounded-xl object-cover shadow-md"
        />
      </div>

      {/* Footer */}
      <div
        className="flex flex-col items-center"
        data-aos="fade-up"
      >
        <p className="uppercase text-gray-700 tracking-widest text-base font-light">
          Find
        </p>
        <p className="uppercase text-gray-900 tracking-wider text-lg font-medium mt-1 mb-3">
          A SHOWROOM NEAR YOU
        </p>
        <FaRegArrowAltCircleRight className="text-2xl" />
      </div>
    </div>
  );
};

export default Inspirations;
