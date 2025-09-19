import React from "react";
import image1 from "../../../Assets/new_home/baba_group/image1.png"
const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:px-6 px-4 lg:px-10 max-w-7xl w-full mx-auto py-16">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          About <span className="text-orange-500">BABA</span>{" "}
          <span className="text-green-500">GROUP.</span>
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          Baba Group is a leading Indian manufacturer and exporter in the
          flooring, wall décor, and engineered quartz surface industry. With
          multiple specialized brands under its umbrella, the group focuses on
          offering high-performance, innovative, and visually rich interior &
          architectural solutions.
        </p>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          Our mission is to deliver world-class products with cutting-edge
          designs and eco-conscious manufacturing, while building trust across
          global and Indian markets.
        </p>

        <img
          src={image1}
          alt="About Baba Group"
          className="mt-6 rounded-lg shadow-md"
        />
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          <span className="text-orange-500">Our</span> Story{" "}
          <span className="text-green-500">in motion.</span>
        </h2>

        <button className="mt-4 px-6 py-2 border border-gray-500 rounded-full text-gray-800 hover:bg-gray-100 transition">
          Watch Now
        </button>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          Watch how Baba Group evolved from a single unit to a global supplier,
          delivering unmatched quality and reliability.
        </p>

        <img
          src={image1}
          alt="Our Story"
          className="mt-6 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutSection;
