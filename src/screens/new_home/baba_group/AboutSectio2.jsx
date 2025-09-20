import React from "react";
import image1 from "../../../Assets/new_home/baba_group/designing1.png"
import image2 from "../../../Assets/new_home/baba_group/designing2.png"
import image3 from "../../../Assets/new_home/baba_group/designing3.png"
const AboutSection2 = () => {
  return (
    <section className="md:px-6 px-4 lg:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left - Text Content */}
        <div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Baba Group has been a leading producer and exporter for over a
            decade, based in the Rajasthan province of India. We have been into
            Quartz Powder, Grit and Engineered Quartz Slab with a splendid
            presence across the Globe. We’re a pioneer in India for the
            manufacturing and exporting Engineered Quartz Slab.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4 text-sm md:text-base">
            After creating a very successful legacy in Quartz Powder, Grit &
            Engineered Quartz Stone, we are overjoyed to launch our New Product
            - SPC floors by Baba Flooring Pvt Ltd, a subsidiary organization of
            “BABA QUARTZ” (Baba Super Minerals Pvt Ltd).
          </p>
        </div>

        {/* Right - Heading */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Designing Excellence. <br /> Delivering Trust.
          </h2>
        </div>
      </div>

      {/* Bottom - Image Gallery */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          src={image1}
          alt="Factory"
          className="w-full h-72 object-cover rounded-lg shadow"
        />
        <img
          src={image2}
          alt="Production"
          className="w-full h-96 object-cover rounded-lg shadow"
        />
        <img
          src={image3}
          alt="Plant"
          className="w-full h-60 object-cover rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default AboutSection2;
