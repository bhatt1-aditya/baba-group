import React from "react";

export default function AwardsProjectsEvents() {
  return (
    <div className="bg-[#f9f9f9] text-center py-12 px-6 md:px-16">
      
      {/* Top Section - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        
        {/* Awards & Achievements */}
        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-4">
            Awards & <br /> Achievements
          </h2>
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e6aeb1c4dc?auto=format&fit=crop&w=900&q=80"
            alt="Awards"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* Our Projects */}
        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-4">Our Projects</h2>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
            alt="Projects"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* Events */}
        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-4">Events</h2>
          <img
            src="https://images.unsplash.com/photo-1600607687487-c0e1f7a04c49?auto=format&fit=crop&w=900&q=80"
            alt="Events"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* Quote */}
      <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">
        “CREATING BEAUTIFUL SPACES <br /> SINCE A DECADE.”
      </h3>

      {/* Paragraphs */}
      <div className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
        <p className="mb-4">
          Baba Group has been a leading producer and exporter for over a decade,
          based in the Rajasthan province of India. We have been into Quartz
          Powder, Grit and Engineered Quartz Slab with a splendid presence across
          the Globe. We’re a pioneer in India for the manufacturing and exporting
          Engineered Quartz Slab.
        </p>
        <p>
          After creating a very successful legacy in Quartz Powder, Grit &
          Engineered Quartz Stone, we are overjoyed to launch our New Product
          -SPC floors by Baba Flooring Pvt Ltd, a subsidiary organization of
          "BABA QUARTZ" (Baba Super Minerals Pvt Ltd).
        </p>
      </div>
    </div>
  );
}
