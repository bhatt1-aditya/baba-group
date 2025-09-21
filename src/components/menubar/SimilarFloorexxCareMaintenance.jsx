import React from "react";

const SimilarFloorexxCareAndMaintenance = () => {
  return (
    <div className="mx-auto md:px-6 px-4 lg:px-10 py-24 text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-2">
          Care & Maintenance <br />
          of<span className="text-orange-500 font-bold"> FLOOREXX</span>{" "}
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
          SPC flooring of lower grade may swell or discolour when in contact
          with moisture in the long term. Moisture that traps under the SPC
          floor will encourage mould growth and cause odour.
        </li>
        <li>
          Heavy furniture, pet paws, sand or sharp objects will leave scratches
          and abrasions on the SPC flooring surface. 
        </li>
        <li>
          SPC flooring is produced from polyvinyl chloride (PVC) that causes the
          release of a volatile organic compound into the air, mainly when it is
          newly installed.
        </li>
        <li>
          Although SPC flooring can resist most stains, you should prevent
          strong chemicals from coming into direct contact with the SPC floor
          surface. Although the yellowing of SPC flooring can be due to many
          factors, chemical emits from rubber is a primary culprit. You could
          overcome this problem by replacing any rubber material with
          non-staining rubber material.
        </li>
        <li>
          Since SPC flooring is made of plastic material, it will release odour
          and toxic chemicals into the air when burned. Therefore, it is not
          recommended to be used in high heat or fire hazard areas like a
          commercial kitchen.
        </li>
      </ol>
    </div>
  );
};

export default SimilarFloorexxCareAndMaintenance;
