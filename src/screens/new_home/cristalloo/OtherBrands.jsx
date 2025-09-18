import React from "react";
import image1 from "../../../Assets/new_home/homeimage7.png"
const brands = [
  {
    id: 1,
    name: "FLOOREXX",
    description:
      "18,Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "FLOOREXX", // Replace with actual logo if available
    logoColor: "bg-orange-500",
    features: [
      "Ultra Strong Layered Core",
      "Waterproof",
      "Greenguard Certified",
      "Warranty",
    ],
  },
  {
    id: 2,
    name: "WALLEX",
    description:
      "18,Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "WALLEX",
    logoColor: "bg-green-700",
    features: [
      "Ultra Strong Layered Core",
      "Waterproof",
      "Greenguard Certified",
      "Warranty",
    ],
  },
];

const OtherBrands = () => {
  return (
    <section className="relative py-12 bg-gray-50" style={{ backgroundImage: `url(${image1})` }}>
      <div className="px-4 md:px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Heading & Buttons */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
            Explore Our <br />
            Other <span className="text-orange-500">BRANDS</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-orange-500 px-5 py-4 rounded-full text-sm font-medium transition">
              LOCATE A DEALER
            </button>
            <button className="border border-white text-white px-5 py-4 rounded-full text-sm font-medium transition">
              FIND A SHOWROOM
            </button>
            <button className="border border-white text-white px-5 py-4 rounded-full text-sm font-medium transition">
              BECOME A DEALER
            </button>
          </div>
        </div>

        {/* Right Side - Brand Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white shadow-md rounded-lg border p-6 flex flex-col justify-between hover:shadow-lg transition "
            >
              {/* Logo */}
              <div className="flex items-center mb-4">
                
                <h3 className="ml-3 text-lg font-semibold">{brand.name}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{brand.description}</p>
              <div
                  className={`${brand.logoColor} mb-4 text-white rounded-full w-12  h-12 p-9 flex items-center justify-center text-xs font-bold`}
                >
                  {brand.logo}
                </div>

              {/* Features */}
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                {brand.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-orange-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
                Explore Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherBrands;
