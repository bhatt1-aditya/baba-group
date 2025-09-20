import React from "react";

export default function CristallooFeatures() {
  const features = [
    ["Soundproof", "Safe & Better Air Quality", "Warranty"],
    ["Endless Options", "Low Cost Installation", "Ultimate Durability"],
    ["Termite Resistant", "Eco-friendly", "Waterproof"],
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm tracking-wide text-gray-300">Why Choose</p>
        <h2 className="text-3xl md:text-4xl font-serif">CRISTALLOO?</h2>
      </div>

      {/* Features Grid */}
      <div className="space-y-10">
        {features.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {row.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center space-y-3"
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                  <span className="text-sm md:text-base text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider (not after last row) */}
            {rowIndex < features.length - 1 && (
              <hr className="border-gray-500 mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
