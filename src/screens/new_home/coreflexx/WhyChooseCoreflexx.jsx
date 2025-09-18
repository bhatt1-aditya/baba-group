import React from "react";

const WhyChooseCoreflexx = () => {
  const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ENDLESS OPTIONS",
    "TERMITE RESISTANT",
    "ECO-FRIENDLY",
    "SAFE AND BETTER AIR QUALITY",
    "LOW COST INSTALLATION",
    "ULTIMATE DURABILITY",
  ];

  return (
    <section className="text-center pb-16 bg-white">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">Why Choose</h2>
      <h3 className="text-4xl font-bold text-gray-800 mb-4">CRISTALLOO ?</h3>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Premium quality. Innovative designs. Durable, eco-friendly quartz
        surfaces with reliable global supply — crafted to elevate every space.
      </p>
      <div className="flex flex-wrap gap-6 max-w-4xl justify-center items-center mx-auto mb-10">
        {features.map((feature, index) => (
          <span
            key={index}
            className="text-sm font-medium text-gray-800 tracking-wide"
          >
            {feature}
          </span>
        ))}
      </div>
      <button className="text-gray-600 text-sm font-medium flex items-center gap-1 mx-auto">
        Learn More <span>›</span>
      </button>
    </section>
  );
};

export default WhyChooseCoreflexx;
