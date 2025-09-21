import React from "react";
import image1 from "../../Assets/menuImage/manufacturingImage.png"
const ManufacturingProcess = () => {
  const steps = [
    {
      title: "01. Feeding & Mixing",
      description:
        "Raw materials are inspected, then fed into mixers and blended together.",
    },
    {
      title: "02. Molding",
      description:
        "The mixture is then poured into a mold and formed into slab sizes of 306×144 cm or 120×57 inches.",
    },
    {
      title: "03. Pressing",
      description:
        "The slab is then compacted by a special vacuum and vibration process at a pressure of 100 tons.",
    },
    {
      title: "04. Curing",
      description:
        "The slabs are moved to the curing kiln and heated to 90ºC for 45 minutes which gives them the ultimate strength and solidity.",
    },
    {
      title: "05. Polishing",
      description:
        "Slabs are then gauged, calibrated and polished to a perfect finish in a wide range of colors and designs in one of our three textural surface finishes: Polished, Honed, or Textured.",
    },
    {
      title: "06. Quality Assurance",
      description:
        "Finally, the slabs pass through quality inspection to ensure our customers receive a top quality product.",
    },
    {
      title: "07. Labeling",
      description:
        "Each slab is then marked and labeled with all relevant information.",
    },
    {
      title: "08. Packaging & Shipment",
      description:
        "We do best quality packaging and timely manner shipments with live tracking.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 md:px-6 px-4 lg:px-10 flex flex-col gap-10">
      {/* Left Content */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-orange-500">BABA QUARTZ </span>
          Manufacturing Process
        </h2>
        <p className="text-gray-700 mb-4">
          Baba Quartz surfaces meet exacting standards of excellence from the
          initial procurement of raw materials to the final quality control
          check. Highly skilled and trained staff members ensure the quality of
          a product that is unrivaled in the industry today.
        </p>
        <p className="text-gray-700 mb-8">
          The manufacturing process begins with a rigorous inspection of all
          incoming raw materials. Baba Quartz Surfaces and Countertops are
          manufactured through a highly automated, yet strictly monitored process
          that includes the following:
        </p>

      </div>

      {/* Right Image */}
      <div className="flex md:flex-row flex-col justify-center md:gap-10 items-start">
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg text-gray-800">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <img
          src={image1}
          alt="Manufacturing process"
          className="rounded w-full md:mt-0 mt-4"
        />
      </div>
    </section>
  );
};

export default ManufacturingProcess;
