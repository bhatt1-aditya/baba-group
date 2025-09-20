import React from "react";
import luxuryImg from "../../../Assets/new_home/wallexx/luxury.png";

const LuxuryWalls = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 md:pb-12">
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto grid-cols-1 gap-10 items-center">

        {/* LEFT - Image */}
        <div>
          <img
            src={luxuryImg}
            alt="Luxury bathroom walls"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT - Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-snug">
            Walls That Speak <br />
            <span className="text-green-800 font-semibold">Luxury.</span>
          </h2>

          <p className="text-green-700 leading-relaxed">
            Watch how Baba Group blends innovation, craftsmanship, and
            sustainability to deliver world-class surfaces.
          </p>

          <a
            href="#"
            className="inline-block text-sm text-gray-800 hover:underline font-medium"
          >
            Watch Now ›
          </a>
        </div>
      </div>
    </section>
  );
};

export default LuxuryWalls;
