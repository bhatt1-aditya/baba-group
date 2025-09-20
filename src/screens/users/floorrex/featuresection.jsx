import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, ShieldCheck, Wind, Layers } from "lucide-react";
import stoneImage from "../../../Assets/floorrex/speciaImage.png"
export default function FeaturesSection() {
  const features = [
    { icon: <ShieldCheck size={32} />, title: "Scratch Resistant" },
    { icon: <Wind size={32} />, title: "Better Air Quality" },
    { icon: <Layers size={32} />, title: "Durable & Stylish" },
    { icon: <Star size={32} />, title: "Soundproof" },
    { icon: <Sparkles size={32} />, title: "Premium Finish" },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#faf7f5] to-[#f1ebe6]">
      {/* Quote Section */}
<motion.section
  className="relative w-full py-20 bg-gradient-to-b from-white via-[#f9f5f2] to-white overflow-hidden"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {/* Floating Gradient Circles */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#d4a373] opacity-20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#6b4226] opacity-10 rounded-full blur-3xl animate-bounce"></div>
  </div>

  {/* Content Card */}
  <div className="max-w-5xl mx-auto text-center bg-white shadow-2xl rounded-3xl px-4 md:px-6 lg:px-10 py-14 relative z-10 border border-[#e7e1dc]">
    <motion.h2
      className="text-3xl md:text-5xl font-serif italic text-[#8B5E3C] mb-8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      "CREATING BEAUTIFUL SPACES SINCE A DECADE."
    </motion.h2>

    <motion.p
      className="text-[#6b4226] text-lg md:text-xl leading-relaxed mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Baba Group has been a leading producer and exporter for over a decade,
      based in Rajasthan, India. We specialize in Quartz Powder, Grit and
      Engineered Quartz Slab with a splendid presence across the globe.
    </motion.p>

    <motion.p
      className="text-[#6b4226] text-lg md:text-xl leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      After a successful legacy in Quartz Powder, Grit & Engineered Quartz Stone,
      we are thrilled to launch our new product —{" "}
      <span className="font-semibold text-[#8B5E3C]">SPC Floors</span> by Baba
      Flooring Pvt Ltd, a proud subsidiary of{" "}
      <span className="font-bold">"BABA QUARTZ"</span>.
    </motion.p>
  </div>
</motion.section>


      {/* Glassmorphism Special Features with Awards */}
      <div className="relative w-full h-[75vh] overflow-hidden flex items-center justify-center">
        {/* Background */}
        <motion.img
          src={stoneImage}
          alt="floor background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Floating Award Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-card top-20 left-10">🏆 <p>Best Design 2023</p></div>
          <div className="floating-card top-60 left-0">🌍 <p>Global Excellence</p></div>
          <div className="floating-card top-40 right-10">💡 <p>Innovation Award</p></div>
          <div className="floating-card bottom-20 right-20">⭐ <p>Customer Choice</p></div>
        </div>

        {/* Center Box */}
        <motion.div
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 px-12 py-20 md:px-20 md:py-28 rounded-3xl shadow-2xl max-w-3xl text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-widest drop-shadow-lg animate-bounce">
            SPECIAL FEATURES
          </h2>
          <motion.div
            className="mt-6 w-40 mx-auto border-t-4 border-white/70"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Scrolling Marquee inside box */}
          <div className="absolute bottom-4 left-0 w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex text-white text-2xl md:text-4xl font-serif font-bold">
              <span className="px-8">
                Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish
              </span>
              <span className="px-8">
                Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-6 lg:px-10 py-16">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center text-[#8B5E3C] mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#6b4226]">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Scrolling Marquee bottom */}
      <div className="overflow-hidden bg-[#8B5E3C] py-4">
        <motion.div
          className="flex whitespace-nowrap text-white text-2xl md:text-4xl font-bold"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <span className="px-10">
            Soundproof • Scratch Resistant • Durable • Stylish • Safe Air Quality
          </span>
          <span className="px-10">
            Soundproof • Scratch Resistant • Durable • Stylish • Safe Air Quality
          </span>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 12px 20px;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
          box-shadow: 0 0 20px rgba(255,255,255,0.2);
          animation: float 6s ease-in-out infinite;
        }
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
  );
}
