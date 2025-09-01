import React from "react";

export default function CreatingBeautifulSpaces() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-snug">
        “CREATING BEAUTIFUL SPACES <br /> SINCE A DECADE.”
      </h2>

      {/* Paragraphs */}
      <p className="text-sm md:text-base max-w-3xl mx-auto mb-6 text-gray-300 leading-relaxed">
        Baba Group has been a leading producer and exporter for over a decade,
        based in the Rajasthan province of India. We have been into Quartz
        Powder, Grit and Engineered Quartz Slab with a splendid presence across
        the Globe. We’re a pioneer in India for the manufacturing and exporting
        Engineered Quartz Slab.
      </p>
      <p className="text-sm md:text-base max-w-3xl mx-auto text-gray-300 leading-relaxed">
        After creating a very successful legacy in Quartz Powder, Grit &
        Engineered Quartz Stone, we are overjoyed to launch our New Product -SPC
        floors by Baba Flooring Pvt Ltd, a subsidiary organization of “BABA
        QUARTZ” (Baba Super Minerals Pvt Ltd).
      </p>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Card */}
        <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/bathroom.jpg" // replace with actual image
            alt="Awards"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <button className="bg-white text-black rounded-full px-6 py-2 text-xs tracking-wider uppercase shadow-md">
              Awards & Achievements
            </button>
          </div>
        </div>

        {/* Middle Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center h-full py-16">
          <img
            src="/images/piramal-logo.png" // replace with your logo
            alt="Piramal Realty"
            className="h-20 mb-6"
          />
          <button className="bg-black text-white rounded-full px-8 py-2 text-xs tracking-wider uppercase shadow-md">
            Our Projects
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/bathroom.jpg" // replace with actual image
            alt="Events"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <button className="bg-white text-black rounded-full px-10 py-2 text-xs tracking-wider uppercase shadow-md">
              Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
