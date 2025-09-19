import React from "react";

const CatalogueSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 md:px-6 px-4 lg:px-10">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Browse Our E-Catalogue & Resources
      </h2>

      {/* Subtext */}
      <p className="mt-4 max-w-2xl text-gray-600 text-sm md:text-base">
        Discover the full range of Beta Group products, specifications, and
        designs at your fingertips. Our interactive e-catalogue makes it easy
        to explore our collections, download details, and choose the right
        solution for your project.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition">
          View E-Catalogues
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition">
          Browse Resources
        </button>
      </div>

      {/* Contact Button */}
      <button className="mt-8 px-8 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
        Contact Us
      </button>
    </section>
  );
};

export default CatalogueSection;
