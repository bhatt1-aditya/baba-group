import React from "react";

const CatalogueSection = () => {
  return (
    <div className="w-full bg-white py-16 md:px-6 px-4 lg:px-10 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Browse Our{" "}
        <span className="text-blue-600">E-Catalogue</span> &{" "}
        <span className="text-blue-600">Resources</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
        Discover the full range of Baba Group products, specifications, and
        designs at your fingertips. Our interactive e-catalogue makes it easy to
        explore our collections, download details, and choose the right solution
        for your project.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">
          View E-Catalogues →
        </button>
        <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">
          Browse Resources →
        </button>
      </div>

      <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
        CONTACT US →
      </button>
    </div>
  );
};

export default CatalogueSection;
