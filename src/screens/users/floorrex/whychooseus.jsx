import React from "react";
import { Lock, Ruler, Globe, Clock, Shield, Droplet, Bug, Wrench } from "lucide-react";

export default function FloorrexPage() {
  return (
    <div className="font-serif text-[#5a4632] bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-10 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-lg font-semibold text-[#8b5a2b] uppercase tracking-wide">
            Why Choose
          </h2>
          <h1 className="text-3xl font-bold text-[#8b5a2b] leading-snug">
            FLOORREX SPC <br /> PRODUCTS?
          </h1>
          <p className="text-sm mt-3 text-[#5a4632] max-w-md">
            FLOORREX is the only SPC producing company in India with an in-house source of raw material (CaCO3) hence attractive Pricing & Quality Standards and uniformity.
          </p>

          <div className="grid grid-cols-2 gap-y-4 mt-6 text-sm">
            <Feature icon={<Globe className="w-5 h-5" />} text="Customer Centric" />
            <Feature icon={<Lock className="w-5 h-5" />} text="Unilin Locking System" />
            <Feature icon={<Ruler className="w-5 h-5" />} text="Quality & Design" />
            <Feature icon={<Wrench className="w-5 h-5" />} text="HOMAG line German Technology" />
            <Feature icon={<Clock className="w-5 h-5" />} text="Since 2 decades" />
            <Feature icon={<Globe className="w-5 h-5" />} text="20+Countries Supply chain" />
            <Feature icon={<Globe className="w-5 h-5" />} text="20+Countries Supply chain" />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600607686163-1be1ebf3a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Floor Example"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Stone Polymer Composite */}
      <section className="px-6 md:px-20 py-120">
        <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Living Room"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white text-left">
            <h3 className="text-2xl font-bold uppercase">STONE POLYMER COMPOSITE</h3>
            <p className="mt-3 text-sm leading-relaxed max-w-2xl">
              A flooring that combines the look and feel of real wood with the durability of stone. It is a revolutionary solution that eliminates the limitations of traditional laminate and hardwood floors. It gives your space a beautiful makeover without any drawbacks of vinyl and laminate flooring. Plus, it is also easy to install and doesn't create dust, noise, or require a lot of effort.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          <IconFeature icon={<Shield className="w-10 h-10" />} label="Ultimate Durability" />
          <IconFeature icon={<Droplet className="w-10 h-10" />} label="Waterproof" />
          <IconFeature icon={<Bug className="w-10 h-10" />} label="Termite Resistant" />
          <IconFeature icon={<Wrench className="w-10 h-10" />} label="Quick & Easy Installation" />
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[#8b5a2b]">
      <span className="p-2 bg-[#f5f0eb] rounded-full">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function IconFeature({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-[#8b5a2b]">
      <div className="p-4 bg-[#f5f0eb] rounded-full shadow-md">{icon}</div>
      <p className="mt-3 text-sm font-semibold">{label}</p>
    </div>
  );
  
}
