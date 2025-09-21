import { motion } from "framer-motion";

const WallexInstallationGuide = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 md:px-6 lg:px-10">
      <motion.h1
        className="text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        WALLEX
      </motion.h1>
      <h2 className="text-xl text-center text-gray-700 mb-8">
        Installation Guideline.
      </h2>

      {/* General Preparations */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          General Preparations:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Before installing, examine the material during daylight hours to
            identify any visible faults or damage, such as color or gloss
            discrepancies, scratches, dents, and ensure the panels’ edges are
            straight and undamaged.
          </li>
          <li>
            Verify whether the substrate conditions meet the requirements
            outlined in the provided instructions and adhere to local building
            codes.
          </li>
        </ul>
      </section>

      {/* Indoor Environment */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Indoor Environment, Material Storage And Acclimation:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Exercise caution to avoid rough handling of your new Wallex Hybrid
            wall panels before installation.
          </li>
          <li>
            Due to the weight and bulkiness of the product, always employ proper
            lifting techniques during handling.
          </li>
          <li>
            The environment where the panels are installed significantly impacts
            successful installation and ongoing product performance.
          </li>
          <li>
            Install the panels exclusively in temperature-controlled
            environments. Maintain a constant temperature of 70-80°F (20-25°C).
          </li>
          <li>
            Post-installation, ensure that the panels are shielded from
            temperatures below 14°F (-10°C) or exceeding 140°F (60°C).
          </li>
          <li>
            Adhere to the adhesive manufacturer’s instructions regarding storage
            and preparation before installation.
          </li>
        </ul>
      </section>

      {/* General Information */}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          General Information:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Thoroughly examine the substrate, ensuring it meets specific
            criteria: it must be flat, level, and free of dust, grease, or
            moisture.
          </li>
          <li>
            Your Wallex Hybrid Wall panels are not suitable for outdoor
            installation, wet areas, or environments where moisture may
            compromise adhesion.
          </li>
          <li>
            The substrate must maintain plumb and square dimensions. Should it
            deviate, the installer must pattern scribe the panels to achieve a
            perfect fit.
          </li>
        </ul>
      </section>

      {/*
Dry environments: */}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Dry environments:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Acceptable substrates include framed walls with existing tiles or
            ceramic, drywall, cement board, OSB, or plywood. These substrates
            must be structurally sound, in compliance with local building codes,
            and equipped with appropriate moisture abatement measures.
          </li>
          <li>
            When installing over new drywall, it is necessary to tape and finish
            joints. Drywall sheets typically have tapered edges along the long
            ends, requiring filling to achieve a smooth, flat, and flush
            substrate.
          </li>
          <li>
            Prior to installation, remove electrical plates, vents, and fixtures
            attached to the wall. Please note: Longer screws may be required
            when reattaching electrical plates or fixtures post-installation.
          </li>
        </ul>
      </section>
      {/*
Damp environments (backsplash, laundry room, bathroom):*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Damp environments (backsplash, laundry room, bathroom):
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Suitable substrates include framed walls with existing tiles or
            ceramic, drywall, cement board, OSB, or plywood. These substrates
            must be structurally sound, adhere to local building codes, and
            include adequate moisture abatement measures.
          </li>
          <li>
            Ensure your Wallex Hybrid wall panel installation is fully
            waterproof by applying a 100% silicone sealant around the entire
            perimeter and within the panel's seams.
          </li>
        </ul>
      </section>
      {/*
DaWet environments (shower, tub, laundry room, direct or flowing water):*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Wet environments (shower, tub, laundry room, direct or flowing water):
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Please be aware that inadequate waterproofing in wet areas can
            result in significant structural damage. It is crucial to ensure
            that the substrate is waterproofed or "tanked in accordance with
            local building codes and regulations.
          </li>
          <li>
            Our Wallex Hybrid Wall panels achieve complete waterproofing when
            installed with a silicone sealer around the entire installation
            perimeter. However, it is essential to adhere to local building
            codes for wet environments such as showers and other areas with
            water exposure.
          </li>
          <li>
            For installations in wet environments, ensure the adhesive is evenly
            spread across the surface. Apply a sufficient amount of adhesive to
            establish a strong bond, and always conduct bond testing as a
            standard practice.
          </li>
        </ul>
      </section>
      <h1 className="text-3xl font-bold my-6">Before You Start→</h1>

      {/*
Tools Required*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Tools Required
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Protective eye wear, measuring tape, utility knife, level, hand
            roller, hand saw or circular saw/table saw/sabre jig saw, drill bit
            & jig saw (for cutting holes), caulking gun, adhesive for PVC panels
            (MS-polymer based adhesive such as Loctite Power Grab Ultimate,
            Titebond Titegrab Ultimate), silicone-based sealant for wet
            environments, matching trims (optional), rubber gloves.
          </li>
        </ul>
      </section>

      {/*
Cutting*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Cutting</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            For Smaller Formats (e.g., 457 x 914 mm/18 x 36 inch): To make cuts,
            measure and mark the panel accurately. Then, score and snap it using
            a sharp utility knife. Always use proper personal protective
            equipment (PPE) when handling sharp tools. If necessary, use
            sandpaper to smooth the snapped edges.
          </li>
          <li>
            For Larger Formats (e.g., 915 x 3048 mm / 36 x 120 inch): Standard
            woodworking tools like a table saw or circular saw equipped with a
            fine-tooth blade can provide a clean, smooth cut. Ensure you wear
            appropriate PPE and take necessary safety precautions when handling
            saw blades and sharp tools.
          </li>
        </ul>
      </section>
      {/*
Adhesive:*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Adhesive:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Adhesive Selection and Testing: Use an adhesive suitable for Wallex
            Hybrid wall panels
          </li>
          <li>
            (Recommended Glue Name- Fevicol SR 505) and conduct adhesion testing
            to ensure compatibility with the substrate. If you're unsatisfied
            with the results, refrain from installation and contact your
            supplier or the adhesive manufacturer for further assistance.
          </li>
          <li>
            Adhesive Application: Apply the adhesive in a zigzag pattern either
            onto the panel or the substrate. Ensure sufficient adhesive is
            applied to establish a strong bond, and always conduct bond testing
            as a precaution. In wet environment areas, spread the adhesive fully
            across the surface.
          </li>
          <li>
            Panel Installation: After applying the adhesive, position the tile
            onto the substrate. Adjust the tile's position as needed, and once
            satisfied, firmly push or roll to ensure complete adhesive transfer
            to the back of the tile.{" "}
          </li>
          <li>
            Cleanup: Promptly remove any excess glue residue using denatured
            alcohol applied to a clean cloth. Avoid pouring alcohol directly
            onto the surface, and never use detergents for cleanup.{" "}
          </li>
          <li>
            Installation of U-Trims: U-trims are utilized to finish the terminal
            end of panels when they're not adjoining anything. To install, apply
            a thin bead of adhesive on the inside channel of the trim and slide
            it into place underneath your tile. You may use painter's tape to
            hold the trim in place until the adhesive cure
          </li>
        </ul>
      </section>
      {/*
Installation:*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Installation:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Panel Orientation: Install your Wallex Hybrid wall panels from the
            bottom left to the top right of the designated surface, ensuring
            that the panels are facing up and outwards.
          </li>
          <li>
            Initial Panel Installation: Start by installing the first panel in
            the bottom row. Use a ledger board or create a level line at the top
            of each panel in the first row to maintain a level installation.
            Alternatively, mark a level line at the desired height for the first
            row and align the top of each panel accordingly. Ensure that the
            first panel fits properly and is level. If necessary, use temporary
            shims under each bottom panel to hold them in place while the
            adhesive sets.
          </li>
          <li>
            Adhesive Application: Apply adhesive to the back of the panel in
            accordance with the manufacturer's instructions. Typically, apply a
            1/4-inch/6mm bead of adhesive in a zigzag pattern, and a bead around
            the panel perimeter about 1 inch/25mm from the edges. Alternatively,
            follow the adhesive manufacturer's recommendations for troweling the
            adhesive onto the substrate.
          </li>
          <li>
            Panel Placement: Press the panel into place on the substrate,
            applying even pressure across the entire panel surface. Use shims or
            pins if necessary to hold panels in place until the adhesive sets.
          </li>
          <li>
            Cleanup: Immediately remove any visible excessive adhesive from the
            surface while it's still wet. Use denatured alcohol applied to a
            clean cloth, avoiding pouring directly onto the surface. Prevent
            adhesive residue from drying, as it may become difficult to clean
            and could potentially damage the panel surface
          </li>
        </ul>
      </section>
      {/*
Installing the Last Panel:*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Installing the Last Panel:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Without Trims: In a corner without trims, trim off the flange facing
            the corner to achieve a flush installation against the substrate.
          </li>
          <li>
            With Trims: Before installing the last panels in the row that will
            go into the corner, install inside corner trims into each corner
            using adhesive. Allow 24 hours for the adhesive to cure before
            proceeding. Ensure the V-trim is oriented with the deep channel
            facing the panel being installed.
          </li>
        </ul>
      </section>
      {/*
Important Note for Shower and Damp Areas:*/}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Important Note for Shower and Damp Areas:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            For installations in shower areas, around baths, or other very damp
            places, it is essential to apply a line of silicone sealant in the
            connections between the panels themselves and between the panels and
            support trims. This ensures a completely waterproof joint.
          </li>
          <li>
            Additionally, it is critical to apply a silicone bead between the
            panel and the edge of the shower or bath. While we guarantee that
            the panels themselves are waterproof, waterproofing each joint
            between the panels is the responsibility of the installer.
            Consequently, we cannot be held liable for any damage resulting from
            inadequate. waterproofing of the joints.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WallexInstallationGuide;
