// App.jsx
import React from "react";
import mainImage from "../../../Assets/new_home/baba_group/mainImage.png";
import thumb1 from "../../../Assets/new_home/baba_group/thumb1.png";
import thumb2 from "../../../Assets/new_home/baba_group/thumb1.png";
import thumb3 from "../../../Assets/new_home/baba_group/thumb1.png";
import thumb4 from "../../../Assets/new_home/baba_group/thumb1.png";
import thumb5 from "../../../Assets/new_home/baba_group/thumb1.png";

const MainHome = () => {
  const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainImage})`,
          }}
        ></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center md:justify-end md:px-6 px-4 lg:px-10 pb-16 text-white">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 max-w-2xl">
            Transforming Materials <br /> into Masterpieces.
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base text-gray-200 mb-6 max-w-xl">
            Delivering premium quartz, minerals, and innovative surface
            solutions for homes, businesses, and industries.
          </p>

          {/* Thumbnail Row */}
          <div className="flex flex-wrap gap-2 mb-8">
            {thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-md shadow hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              Become a Dealer
            </button>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
