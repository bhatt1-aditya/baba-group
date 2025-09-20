import React from "react";

const WhyChoose = () => {
  const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ENDLESS OPTIONS",
    "TERMITE RESISTANT",
    "ECO-FRIENDLY",
    "ULTIMATE DURABILITY",
    "SAFE AND BETTER AIR QUALITY",
    "LOW COST INSTALLATION",
  ];

  return (
    <section className="md:py-12 px-4 md:px-6 lg:px-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900">
        Why Choose <span className="text-teal-700"><br/>WALLEX</span> panels ?
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Premium quality. Innovative designs. Durable, eco-friendly quartz surfaces with 
        reliable global supply — crafted to elevate every space.
      </p>

      {/* Learn More */}
      <div className="mt-4">
        <a
          href="#"
          className="text-teal-700 font-medium hover:underline inline-flex items-center"
        >
          Learn More <span className="ml-1">›</span>
        </a>
      </div>

      {/* Features */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-y-6 gap-x-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="text-sm font-medium text-gray-800 tracking-wide"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
