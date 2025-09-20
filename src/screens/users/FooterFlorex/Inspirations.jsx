import React from "react";
import { TfiMinus } from "react-icons/tfi";

// Replace these with your actual images
import img1 from "../../../Assets/footer_florex/inspire1.png";
import img2 from "../../../Assets/footer_florex/inspire2.png";
import img3 from "../../../Assets/footer_florex/inspire3.png";
import img4 from "../../../Assets/footer_florex/inspire4.png";
import img5 from "../../../Assets/footer_florex/inspire5.png";

const images = [img1, img2, img3, img4, img5];

const Inspirations = () => {
  return (
  <div className="bg-black min-h-screen text-white py-16 px-4 md:px-10">
  {/* Title */}
  <div className="mb-12">
    <h1 className="text-white font-libertinus text-center grid grid-cols-3 items-center">
      <TfiMinus className="text-3xl md:text-5xl justify-self-end" />
      <span className="text-2xl md:text-4xl uppercase text-center font-normal">
        Inspirations
      </span>
      <TfiMinus className="text-3xl md:text-5xl justify-self-start" />
    </h1>
  </div>

  {/* Row of Cards with Curved Top & Bottom */}
  <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
    {images.map((img, index) => (
      <div
        key={index}
        className="w-[100px] md:w-[160px] lg:w-[200px] aspect-[3/4] overflow-hidden relative rounded-t-[100px] rounded-b-[100px]"
        style={{
          transition: "transform 0.3s ease",
        }}
      >
        <img
          src={img}
          alt={`Inspiration ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default Inspirations;
