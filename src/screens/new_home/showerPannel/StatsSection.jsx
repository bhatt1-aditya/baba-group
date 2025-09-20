// StatsSection.jsx
import React from "react";
import factoryImage from "../../../Assets/new_home/homeimage5.png"; // replace with your actual image

const StatsSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 pb-16 text-center ">
     

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <p className="text-orange-500 text-2xl font-bold">100+</p>
          <p className="text-gray-600 text-sm">Current Clients</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">20+</p>
          <p className="text-gray-600 text-sm">Years of Experience</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">25+</p>
          <p className="text-gray-600 text-sm">Awards Won</p>
        </div>
        <div>
          <p className="text-orange-500 text-2xl font-bold">15+</p>
          <p className="text-gray-600 text-sm">Availability Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
