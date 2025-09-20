import React from "react";
import excellence from "../../../Assets/new_home/minerals/excellence.png"
const ExcellenceSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 md:py-12 py-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
        From Earth’s Heart to <br /> Global Excellence.
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
        At Baba Group, our carefully sourced and refined minerals form the foundation of
        excellence behind every product we create. Responsibly and sustainably procured,
        these minerals meet the highest global standards of purity and performance.
      </p>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10">
        They are not just raw materials but the driving force behind innovation, powering
        our premium quartz surfaces, flooring, wall panels, and other engineered solutions.
        With rigorous quality checks and a robust international supply chain, we ensure
        that our mineral solutions support industries worldwide with consistency,
        durability, and unmatched reliability.
      </p>

      {/* Image */}
      <div className="w-full">
        <img
          src={excellence}
          alt="Quartz mining"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default ExcellenceSection;
