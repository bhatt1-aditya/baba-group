import React from "react";
import img1 from "../../../Assets/new_home/floorexx/whatsnew.png";
import img2 from "../../../Assets/new_home/homeimage4.png";
import whatsnew from "../../../Assets/new_home/floorexx/whatsnew.png";

const WhatsNew = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">

        {/* Left Column */}
        <div className="space-y-6">
          {/* Two small images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img1}
              alt="Floor design 1"
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <img
              src={img2}
              alt="Floor design 2"
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            What’s New at{" "}
            <span className="text-orange-500 font-semibold">FLOOREXX?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-md">
            Discover our latest SPC flooring designs, fresh textures, and
            upgraded finishes that bring even more durability and style to
            your spaces. Floorexx keeps innovating so your floors always stay
            ahead of trends.
          </p>

          {/* Explore Link */}
          <a
            href="#"
            className="inline-flex items-center text-orange-500 font-medium hover:underline"
          >
            Explore More <span className="ml-2">→</span>
          </a>
        </div>

        {/* Right Column - Big Image */}
        <div>
          <img
            src={whatsnew}
            alt="New flooring"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  );
};

export default WhatsNew;
