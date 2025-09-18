// AboutSection.jsx
import React from "react";
import img1 from "../../../Assets/new_home/homeimage3.png"; 
import img2 from "../../../Assets/new_home/homeimage4.png"; 

const AboutSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-12 py-4 space-y-12">
      
     <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
         {/* Row 1: Text + Image */}
      <div className="flex flex-col gap-4">
        <div className="text-gray-700 leading-relaxed">
          <p>
            <span className="text-orange-500 font-semibold">BABA QUARTZ</span> is
            the prominent manufacturer of engineered Quartz Surfaces,
            Headquartered in Rajasthan province in India. We have independent
            distributors across all part of world to serve our customers. With
            one state-of-the-art production sites of 40000 sq meter with 2
            production line for Quartz slabs & 12 production line for Quartz grits
            and filler,{" "}
            <span className="text-orange-500 font-semibold">BABA QUARTZ</span> has
            an annual capacity of over 75000 mt of quartz grits & fillers.
          </p>
        </div>

        <img
          src={img1}
          alt="Factory view 1"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Row 2: Image + Text */}
      <div className="flex flex-col gap-4">
        <img
          src={img2}
          alt="Factory view 2"
          className="w-full rounded-lg shadow-md"
        />

        <div className="text-gray-700 leading-relaxed">
          <p>
            <span className="text-orange-500 font-semibold">BABA QUARTZ</span>{" "}
            have Latest facilities to handle export orders & container packing.
            Packing materials conform to International standards and Mineral Bags
            are wrapped with plastic for protection. We have our own Research &
            Development section with Moisture Analyzer, Spectrophotometer, Visual
            spectrometer, Chemical Testing and Sieve Analysis to Test the Sieve on
            ASTM Standards.
          </p>

          <a
            href="#"
            className="mt-4 inline-block text-orange-500 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>
     </div>
    </section>
  );
};

export default AboutSection;
