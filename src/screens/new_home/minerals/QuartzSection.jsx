import React from "react";
import image from "../../../Assets/new_home/minerals/minerals.png"
import image2 from "../../../Assets/new_home/minerals/calcite.png"
import image3 from "../../../Assets/new_home/minerals/feldsper.png"
const QuartzSection = () => {
  return (
    <div>

    <section className="max-w-6xl mx-auto px-4 lg:px-10 md:px-6 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div>
        <img
          src={image}
          alt="Quartz Minerals"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-orange-500">Quartz</span>{" "}
          <span className="text-gray-900">Minerals.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md">
          Pure brilliance from the earth — strength and clarity you can trust.
        </p>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300">
          Explore More →
        </button>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 lg:px-10 md:px-6 md:py-12 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="text-center md:text-left">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-orange-500">Quartz</span>{" "}
          <span className="text-gray-900">Minerals.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md">
          Pure brilliance from the earth — strength and clarity you can trust.
        </p>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300">
          Explore More →
        </button>
      </div>

      {/* Right Content */}
      <div>
        <img
          src={image2}
          alt="Quartz Minerals"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      
    </section>
    <section className="max-w-6xl mx-auto px-4 lg:px-10 md:px-6 md:py-12 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div>
        <img
          src={image3}
          alt="Quartz Minerals"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-orange-500">Quartz</span>{" "}
          <span className="text-gray-900">Minerals.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md">
          Pure brilliance from the earth — strength and clarity you can trust.
        </p>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300">
          Explore More →
        </button>
      </div>
    </section>
    </div>
  );
};

export default QuartzSection;
