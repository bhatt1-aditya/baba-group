import React from "react";

const steps = [
  {
    title: "01.Feeding & Mixing",
    description:
      "Raw materials are inspected, then fed into mixers and blended together.",
  },
  {
    title: "02.Molding",
    description:
      "The mixture is then poured into a mold and formed into slab sizes of 306×144 cm or 120×57 inches.",
  },
  {
    title: "03.Pressing",
    description:
      "The slab is then compacted by a special vacuum and vibration process at a pressure of 100 tons.",
  },
  {
    title: "04.Curing",
    description:
      "The slabs are moved to the curing kiln and heated to 90°C for 45 minutes which gives them the ultimate strength and solidity.",
  },
  {
    title: "05.Polishing",
    description:
      "Slabs are then gauged, calibrated and polished to a perfect finish in a wide range of colors and designs in one of our three textural surface finishes: Polished, Honed, or Textured.",
  },
  {
    title: "06.Quality Assurance",
    description:
      "Finally, the slabs pass through quality inspection to ensure our customers receive a top quality product.",
  },
  {
    title: "07.Labeling",
    description:
      "Each slab is then marked and labeled with all relevant information.",
  },
  {
    title: "08.Packaging & Shipment",
    description:
      "We do best quality packaging and timely manner shipments with live tracking.",
  },
];

const SimilarCristalloManufacturingProcess=()=> {
  return (
    <section className="md:px-6 px-4 lg:px-10 py-24  mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-light text-gray-400 mb-2">CRISTALLOO</h2>
      <h3 className="text-3xl md:text-4xl font-semibold mb-6">
        Manufacturing Process
      </h3>

      {/* Intro Text */}
      <p className="text-gray-600 mb-4">
        Cristalloo surfaces meet exacting standards of excellence from the
        initial procurement of raw materials to the final quality control check.
        Highly skilled and trained staff members ensure the quality of a product
        that is unrivaled in the industry today.
      </p>
      <p className="text-gray-600 mb-10">
        The manufacturing process begins with a rigorous inspection of all
        incoming raw materials. Cristalloo Surfaces and Countertops are
        manufactured through a highly automated, yet strictly monitored process
        that includes the following:
      </p>

      {/* Process Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-900">{step.title}</h4>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default SimilarCristalloManufacturingProcess;