import React from "react";

const CareAndMaintenance = () => {
  return (
    <div className="mx-auto md:px-6 px-4 lg:px-10 py-24 text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-2">
          Care & Maintenance <br />
          <span className="text-orange-500 font-bold">of BABA QUARTZ</span>{" "}
          Products.
        </h1>
        <a
          href="#"
          className="text-orange-500 hover:underline text-sm inline-block mt-3"
        >
          Watch Video &rsaquo;
        </a>
      </div>

      {/* Instructions */}
      <ol className="space-y-6 text-base leading-relaxed list-decimal list-inside">
        <li>
          Like all fine materials, Baba Quartz responds best when handled with
          due care and attention. Remember, it is always easier to wipe up a
          spill than it is to handle a dried-on stain. Just wipe away any
          spilled food before it turns into a permanent stain.
        </li>
        <li>
          Remember that detergents containing bleach and hard scouring granules
          may harm surfaces over time. Therefore, pay due attention in your
          detergent selection by never using cleaning products that contain soft
          or hard scouring granules such as Vim Scouring Powder or Cif Cream.
        </li>
        <li>
          Products with pH close to neutral or with reduced pH effect (general
          cleaning products which may be commercially available on shelves) may
          be used at all times. However, prolonged contact with decalcifiers and
          products containing decalcifying agents as well as oil solvents and
          products containing oil solvents must be avoided.
        </li>
        <li>
          Gently scrape away a plastic spatula any spills of paint, nail enamel,
          chewing gum, mustard and grease that become hard to remove when dried.
          Then cleanse the surface with water.
        </li>
        <li>
          Quartz, being one of the hardest minerals on earth, offers Baba Quartz
          an unparalleled strength and durability that prevent easy scratching
          and damage. Still, as with any surface, Baba Quartz can be permanently
          damaged by exposure to strong forces that undermine its physical
          properties. In order for your countertop to maintain its good looks
          for many years, always use a bread / chopping board and a table mat
          (trivet).
        </li>
      </ol>
    </div>
  );
};

export default CareAndMaintenance;
