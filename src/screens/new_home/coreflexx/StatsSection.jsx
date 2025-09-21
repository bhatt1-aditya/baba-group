// StatsSection.jsx
import React from "react";
import factoryImage from "../../../Assets/new_home/homeimage5.png"; // replace with your actual image

const StatsSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-12 py-6 text-center ">
       
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:mb-12 mb-6">
        <div>
          <p className="text-black text-2xl font-bold">100+</p>
          <p className="text-black text-sm">Current Clients</p>
        </div>
        <div>
          <p className="text-black text-2xl font-bold">20+</p>
          <p className="text-black text-sm">Years of Experience</p>
        </div>
        <div>
          <p className="text-black text-2xl font-bold">25+</p>
          <p className="text-black text-sm">Awards Won</p>
        </div>
        <div>
          <p className="text-black text-2xl font-bold">15+</p>
          <p className="text-black text-sm">Availability Worldwide</p>
        </div>
      </div>
     
    </section>
  );
};

export default StatsSection;
