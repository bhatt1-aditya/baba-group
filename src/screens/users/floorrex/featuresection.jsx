import React from "react";

export default function FeaturesSection() {
  return (
    <div className="bg-white">
      {/* Top Images */}
      <div className="flex justify-center gap-6 py-8">
        <img
          src="https://source.unsplash.com/600x400/?living-room,interior"
          alt="Living Room"
          className="rounded-lg shadow-lg w-[300px] h-[200px] object-cover"
        />
        <img
          src="https://source.unsplash.com/600x400/?sofa,modern-home"
          alt="Modern Sofa"
          className="rounded-lg shadow-lg w-[300px] h-[200px] object-cover"
        />
      </div>

      {/* Quote */}
      <div className="text-center px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8B5E3C] tracking-wide italic py-4">
          "CREATING BEAUTIFUL SPACES SINCE A DECADE."
        </h2>
        <p className="text-[#6b4226] max-w-3xl mx-auto leading-relaxed text-md md:text-lg">
          Baba Group has been a leading producer and exporter for over a decade,
          based in the Rajasthan province of India. We have been into Quartz
          Powder, Grit and Engineered Quartz Slab with a splendid presence across
          the Globe. We're a pioneer in India for the manufacturing and exporting
          Engineered Quartz Slab.
        </p>
        <p className="text-[#6b4226] max-w-3xl mx-auto leading-relaxed text-md md:text-lg mt-4 mb-6">
          After creating a very successful legacy in Quartz Powder, Grit & Engineered Quartz Stone,
          we are overjoyed to launch our New Product - SPC floors by Baba Flooring Pvt Ltd,
          a subsidiary organization of "BABA QUARTZ" (Baba Super Minerals Pvt Ltd).
        </p>
      </div>

      <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1920&q=80"
        alt="floor background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Center Box */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-center px-10 py-16 md:px-20 md:py-24 rounded-2xl shadow-2xl max-w-2xl w-full">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-widest drop-shadow-lg">
            SPECIAL
          </h2>
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-widest drop-shadow-lg">
            FEATURES
          </h2>
          <div className="mt-6 w-32 mx-auto border-t-4 border-white/70"></div>
        </div>
      </div>

      {/* Bottom Scrolling Text */}
      <div className="absolute bottom-8 w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex text-white text-7xl font-serif font-bold">
          <span className="px-8">Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish</span>
          <span className="px-8">Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish</span>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
}
