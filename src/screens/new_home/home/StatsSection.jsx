// StatsSection.jsx
import React from "react";
import factoryImage from "../../../Assets/new_home/homeimage5.png"; // replace with your actual image

const StatsSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 pb-16 text-center ">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-light mb-10">
        <span className="block">“ Crafting Beautiful Spaces</span>
        <span className="block">
          Since A <span className="text-orange-500 font-semibold">Decade.</span> ”
        </span>
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <p className="text-orange-500 text-2xl font-bold">100+</p>
          <p className="text-gray-600 text-sm">Current Clients</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">20+</p>
          <p className="text-gray-600 text-sm">Years of Experience</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">25+</p>
          <p className="text-gray-600 text-sm">Awards Won</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">15+</p>
          <p className="text-gray-600 text-sm">Availability Worldwide</p>
        </div>
      </div>

      {/* Image */}
      <div className="mb-4 max-w-6xl mx-auto">
        <img
          src={factoryImage}
          alt="Factory view"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Caption */}
      <p className="text-gray-500 text-xs md:text-sm">
        Watch how Baba Group blends innovation, craftsmanship, and sustainability to deliver world-class surfaces.
      </p>
    </section>
  );
};

export default StatsSection;
