// FloorrexHero.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Ruler,
  Globe,
  Clock,
  Shield,
  Droplet,
  Bug,
  Wrench,
} from "lucide-react";

/**
 * Modern, responsive, animated redesign of your Floorrex/FLOORREX section.
 * - Parallax image on the right
 * - Animated headings & feature list
 * - Micro-interactions: hover pop, subtle 3D tilt, staggered reveals
 * - Responsive layout
 *
 * Requirements:
 * - TailwindCSS
 * - framer-motion
 * - lucide-react (or replace icons with your SVGs)
 */

export default function FloorrexPage() {
  return (
    <div className="font-serif text-[#5a4632] bg-white">
      <Hero />
      <StonePolymer />
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  // small parallax for image
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  function handleMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width; // -0.5 .. 0.5-ish
    const dy = (e.clientY - cy) / rect.height;
    setPos({ x: dx, y: dy });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-8 items-start">
      {/* LEFT - Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <span className="inline-block text-sm font-semibold text-[#8b5a2b] uppercase tracking-widest">
          Why Choose
        </span>

        <motion.h1
          className="text-3xl md:text-4xl font-extrabold leading-tight text-[#8b5a2b]"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          FLOORREX SPC <br /> PRODUCTS?
        </motion.h1>

        <motion.p
          className="text-sm text-[#5a4632] max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          FLOORREX is the only SPC producing company in India with an in-house
          source of raw material (CaCO3) hence attractive Pricing & Quality
          Standards and uniformity.
        </motion.p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Feature
            icon={<Globe className="w-5 h-5 text-[#8b5a2b]" />}
            title="Customer Centric"
          />
          <Feature
            icon={<Lock className="w-5 h-5 text-[#8b5a2b]" />}
            title="Unilin Locking System"
          />
          <Feature
            icon={<Ruler className="w-5 h-5 text-[#8b5a2b]" />}
            title="Quality & Design"
          />
          <Feature
            icon={<Wrench className="w-5 h-5 text-[#8b5a2b]" />}
            title="HOMAG German Tech"
          />
          <Feature
            icon={<Clock className="w-5 h-5 text-[#8b5a2b]" />}
            title="Since 2 decades"
          />
          <Feature
            icon={<Globe className="w-5 h-5 text-[#8b5a2b]" />}
            title="20+ Countries"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-full bg-[#8b5e3c] text-white font-medium shadow-md"
          >
            Request Samples
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-full border border-[#8b5e3c] text-[#8b5e3c] font-medium bg-white"
          >
            Find Distributor
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT - Image with parallax + subtle 3D */}
      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="flex items-center justify-center"
      >
        <motion.div
          style={{
            perspective: 1400,
          }}
          initial={{ rotateY: 0 }}
          className="relative w-full max-w-md"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600607686163-1be1ebf3a1e5?auto=format&fit=crop&w=900&q=80"
            alt="Floor Example"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            animate={{
              x: pos.x * 18,
              y: pos.y * 18,
              rotateY: pos.x * 6,
              rotateX: -pos.y * 4,
              scale: pos.x || pos.y ? 1.01 : 1,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            draggable={false}
          />

          {/* small caption chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-4 left-4 bg-white/90 text-[#5a4632] px-4 py-2 rounded-full text-sm font-medium shadow"
          >
            Premium SPC finish — low maintenance
          </motion.div>

          {/* micro animated badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white px-3 py-2 rounded-lg font-semibold shadow-lg"
          >
            20+ Countries
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------- STONE POLYMER COMPOSITE ----------------------- */
function StonePolymer() {
  const features = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8 text-white" />,
      label: "Ultimate Durability",
      color: "from-[#6b8b6d] to-[#4b7a5b]",
    },
    {
      id: 2,
      icon: <Droplet className="w-8 h-8 text-white" />,
      label: "Waterproof",
      color: "from-[#2fa3d6] to-[#0b7fb0]",
    },
    {
      id: 3,
      icon: <Bug className="w-8 h-8 text-white" />,
      label: "Termite Resistant",
      color: "from-[#c86b8b] to-[#a34e72]",
    },
    {
      id: 4,
      icon: <Wrench className="w-8 h-8 text-white" />,
      label: "Quick & Easy Installation",
      color: "from-[#e6a23c] to-[#c77b1b]",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-xl">
        {/* big hero image */}
        <div className="relative">
          <motion.img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Living Room"
            className="w-full h-96 object-cover"
            initial={{ scale: 1.02 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6 }}
          />
          {/* overlay card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6"
          >
            <div className="max-w-3xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                STONE POLYMER COMPOSITE
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed">
                A flooring that combines the look and feel of real wood with the
                durability of stone. It is a revolutionary solution that
                eliminates the limitations of traditional laminate and hardwood
                floors. It gives your space a beautiful makeover without any
                drawbacks of vinyl and laminate flooring. Plus, it is also easy
                to install and doesn't create dust, noise, or require a lot of
                effort.
              </p>
            </div>
          </motion.div>
        </div>

        {/* feature perks row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/0">
          {features.map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * idx, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${f.color}`}
              >
                {f.icon}
              </div>
              <p className="text-sm md:text-base font-medium text-[#5a4632] text-center">
                {f.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SMALL UI PARTS --------------------------- */
function Feature({ icon, title }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex items-center gap-3 text-[#8b5a2b]"
    >
      <div className="p-2 bg-[#f5f0eb] rounded-full shadow-sm">{icon}</div>
      <div className="text-sm">{title}</div>
    </motion.div>
  );
}

function IconFeature({ icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col items-center text-[#8b5a2b]"
    >
      <div className="p-4 bg-[#f5f0eb] rounded-full shadow-md">{icon}</div>
      <p className="mt-3 text-sm font-semibold">{label}</p>
    </motion.div>
  );
}
