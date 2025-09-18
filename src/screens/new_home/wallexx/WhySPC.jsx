import React from "react";
import spcImage from "../../../Assets/new_home/wallexx/spcPanels.png";

const WhySPC = () => {
  const features = [
    "Representative available worldwide",
    "HOMAG line German Technology",
    "20+ Countries Supply chain",
    "Unilin Locking System",
    "Customer Centric",
    "Since 2 decades",
    "Quality & Design",
  ];

  return (
    <section className="px-4 md:px-10 lg:px-20 py-16">
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto grid-cols-1 gap-10 items-center">

        {/* LEFT - Title and Tags */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why <span className="text-green-700 font-semibold">SPC Panels?</span>
          </h2>

          <div className="flex flex-wrap gap-4 max-w-lg">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border border-green-700 text-green-700 rounded-full text-sm font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Image */}
        <div>
          <img
            src={spcImage}
            alt="SPC Panels"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySPC;
