import React from "react";

const WhyCristalloo = () => {
  const features = [
    "Representatives available worldwide",
    "20+Countries Supply chain",
    "HOMAG line German Technology",
    "Unilin Locking System",
    "Customer Centric",
    "Since 2 decades",
    "Quality & Design",
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        Why <span className="text-gray-400">Cristalloo</span>{" "}
        <span className="text-black">SPC ?</span>
      </h2>

      {/* Features */}
      <div className="flex flex-wrap gap-4 justify-center mt-8 max-w-4xl">
        {features.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 border border-gray-400 rounded-full text-sm md:text-base text-gray-700 hover:bg-gray-100 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WhyCristalloo;
