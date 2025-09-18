import React from "react";

const WhyWallex = () => {
  const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ECO-FRIENDLY",
    "ENDLESS OPTIONS",
    "ULTIMATE DURABILITY",
    "TERMITE RESISTANT",
    "SAFE AND BETTER AIR QUALITY",
    "LOW COST INSTALLATION",
  ];

  return (
    <section className="px-4 md:px-6 lg:px-10 py-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why Choose{" "}
            <span className="text-green-700 font-semibold">WALLEX</span> panels ?
          </h2>

          <p className="text-gray-600 max-w-md">
            Premium quality, formulated finishes, durable, eco-friendly, smart
            surfaces with timeless craftsmanship — crafted to elevate every
            space.
          </p>

          <a
            href="#"
            className="inline-block text-green-700 font-medium hover:underline"
          >
            Learn More ›
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-gray-800 text-sm font-medium">
          {features.map((item, idx) => (
            <div key={idx} className="tracking-wide">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWallex;
