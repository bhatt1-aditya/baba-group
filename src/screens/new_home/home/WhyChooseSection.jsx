import React from "react";

const WhyChooseSection = () => {
  const features = [
    {
      number: "01",
      title: "SOUNDPROOF",
      color: "text-orange-500"
    },
    {
      number: "02", 
      title: "ECO-FRIENDLY",
      color: "text-orange-500"
    },
    {
      number: "03",
      title: "SAFE AND BETTER AIR QUALITY",
      color: "text-orange-500"
    },
    {
      number: "04",
      title: "TERMITE RESISTANT",
      color: "text-orange-500"
    },
    {
      number: "05",
      title: "ENDLESS OPTIONS",
      color: "text-orange-500"
    },
    {
      number: "06",
      title: "ULTIMATE DURABILITY",
      color: "text-orange-500"
    },
    {
      number: "07",
      title: "WATERPROOF",
      color: "text-orange-500"
    },
    {
      number: "08",
      title: "WARRANTY",
      color: "text-orange-500"
    },
    {
      number: "09",
      title: "LOW COST INSTALLATION",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="bg-white py-16 md:px-6 px-4 lg:px-10">
      <div className="">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side - Title and Description */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                Why Choose
              </h2>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                <span className="text-orange-500 font-normal">BABA QUARTZ</span>
                <span className="text-gray-800"> ?</span>
              </h2>
            </div>

            <div className="md:space-y-4">
              <p className="text-gray-600 leading-relaxed text-base">
                Premium quality, Innovative designs, Durable, eco-friendly quartz 
                surfaces with reliable global supply — crafted to elevate every 
                space.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 group text-sm uppercase tracking-wide"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group hover:bg-gray-50 py-2 rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${feature.color} font-bold text-lg flex-shrink-0 min-w-[2rem]`}>
                      {feature.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseSection;