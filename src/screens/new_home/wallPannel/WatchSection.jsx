import React from "react";
import watchSection1 from "../../../Assets/new_home/wallex-pannel/watchSection1.png"
import watchSection2 from "../../../Assets/new_home/wallex-pannel/watchSection2.png"
const WatchSection=()=> {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-10 md:px-6 pb-12 text-center">
      {/* Heading */}
      <p className="text-gray-700 mb-2 md:max-w-xl w-full md:mx-auto text-center">
        Watch how Baba Group blends innovation, craftsmanship, and
        sustainability to deliver world-class surfaces.
      </p>
      <a
        href="#"
        className="text-green-700 font-medium hover:underline inline-block mb-10"
      >
        Watch Now ›
      </a>

      {/* Image 1 */}
      <div className="mb-12">
        <img
          src={watchSection1}
          alt="Modern Lounge Interior"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Image 2 */}
      <div>
        <img
          src={watchSection2}
          alt="Luxury Bathroom Interior"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}


export default WatchSection