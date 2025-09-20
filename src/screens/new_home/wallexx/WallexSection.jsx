import React from "react";
import img1 from "../../../Assets/new_home/wallexx/newwallex1.png";
import img2 from "../../../Assets/new_home/wallexx/newwallex2.png";
// import img3 from "../../../Assets/new_home/wallexx/newwallex3.png";
import bigImg from "../../../Assets/new_home/wallexx/newwallex3.png";


const WallexSection = () => {
  return (
    <section className="px-4 lg:px-10 md:px-6 py-16">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Text */}
          <div className="text-gray-700 space-y-4">
            <p>
              Wallex is a premium brand under the Baba Group, delivering
              next-generation SPC wall and shower panel solutions. Designed for
              modern interiors, Wallex blends style, durability, and ease of
              installation — offering elegant, long-lasting choices for both dry
              and wet areas.
            </p>
            <p>
              Our vision is to transform Indian interiors with premium,
              practical, and aesthetic panel solutions for walls and bathrooms —
              panels that are effortless to install, built to endure, and
              elevate every space they adorn.
            </p>
          </div>

          {/* Small images row */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img1}
              alt="Wallex factory 1"
              className="rounded-md shadow"
            />
            <img
              src={img2}
              alt="Wallex factory 2"
              className="rounded-md shadow"
            />
            {/* <img
              src={img3}
              alt="Wallex factory 3"
              className="w-full h-28 object-cover rounded-md shadow"
            /> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Learn more link */}
          <a
            href="#"
            className="flex justify-center mb-6 items-center top-8 right-0 text-sm text-green-700 hover:underline"
          >
            Learn More ›
          </a>

          {/* Big image */}
          <img
            src={bigImg}
            alt="Wallex main factory"
            className="object-contain bg-center mx-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WallexSection;
