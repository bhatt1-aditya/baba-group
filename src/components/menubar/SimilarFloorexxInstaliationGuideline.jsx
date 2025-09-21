import React from "react";
import image from "../../Assets/menuImage/SimilarFloorexxGuideline.png"
const steps = [
  {
    step: "Step 1.",
    title: "PREPARING THE SURFACE",
    width:"5xl",
    description: `Preparing the surface is one of the most important steps when installing vinyl flooring. Since it's a floating floor, LVT can be installed over a wood subfloor, concrete subfloor, or existing tile, so your subfloor must be solid and sound before moving on with the installation. Whatever you do, don't skip these best practices for luxury vinyl tile installation. Each subfloor type may require a few different preparations, but they all need to be as clean and level as possible so that your floating floor sits nicely on the surface. For rooms with permanent fixtures, put those in place first. Install any cabinets, vanities, or tubs in the space before laying LVT around them. The floor must be smooth, dry, dust free, free from oil, wax, adhesives, chemicals and other foreign materials.`,
  },
  {
    step: "Step 2.",
    width:"3xl",
    title: "PLANNING THE INSTALLATION",
    description: `For professional results, you'll want to plan appropriately. Start by measuring the room length divided by the size of luxury vinyl planks. Then, measure the room's width divided by the planks' width. Both measurements need to consider the 1/4-inch gap you'll leave around the room's perimeter. To get a balanced look, avoid length measurements less than 8 inches and width measurements less than half of the plank's width. If your calculations leave you with a smaller piece, then cut the first and last rows to be the same length or width to avoid only one skinny side or end piece.`,
  },
  {
    step: "Step 3.",
    width:"5xl",
    title: "INSTALLING THE FIRST ROW",
    description: `Once you have marked the proper measurements on your vinyl plank flooring, use a utility knife to score it and snap off the excess piece or a floor cutter to get a clean cut. Place your 1/4-inch spacers around the room to allow the planks to expand and contract over time.`,
    sub_description:`Place the first piece of the first row in the left-hand corner, and make sure that the tongue of the planks is facing the wall. Take your second plank and angle and click them together until they are completely locked. You will know they are when the flooring sits flat on the wood or concrete subfloor. Continue angling and clicking together your LVT until you are done with your first row. You can use paper to trace out the shapes for any irregular cut-outs that need to be notched into your planks. Then, mark the planks along the lines of the document and use your utility knife to cut into the plank. Now you have an accurately notched plank that fits around those little nooks and crannies.`
},
  {
    step: "Step 4.",
    width:"3xl",
    title: "INSTALLING THE SECOND ROW",
    description: `When starting your second row, you'll want to stagger it at least 8 inches from your first row. After you've measured, scored, and cut that first plank, angle and connect the plank on the short side first before joining the long sides. Use a tapping block when clicking planks together to help ensure a tight joint at the seam. To create a more natural look, install planks using a staggered pattern. If you have a wooden door casing, you'll want to cut it so your luxury vinyl can slide underneath it.`,
    sub_description:`However, never cut down a metal door casing. All cut edges will be finished with either new baseboard moulding or quarter-round so you won't see those unfinished edges. Add transitions for a seamless look for any installations that meet with other types of flooring.`
},
];

const SimilarFloorexxInstaliationGuideline = () => {
  return (
    <section className="md:px-6 px-4 lg:px-10 py-24 ">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-orange-600 text-center">
        FLOORREX
      </h2>
      <h3 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Installation Guideline.
      </h3>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Wood-look flooring resumes to gain traction, and luxury vinyl tile (LVT)
        sits at the top of the list! The awesome, durable, 100% waterproof
        flooring can be installed on any level or space, including those wet
        spaces like kitchens, washrooms, and laundry rooms. It permits
        continuous, seamless floors throughout your entire home or industry.
      </p>

      {/* Steps */}
      <div className="space-y-8 ">
        {steps.map((item, index) => (
          <div key={index} className={`bg-white max-w-${item.width} mx-auto rounded-xl shadow-md p-6 md:p-8`}>
            <p className="text-sm text-gray-500 font-medium">{item.step}</p>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">
              {item.title}
            </h4>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
            <p className="text-gray-700 leading-relaxed pt-3">{item.sub_description || null}</p>
          </div>
        ))}
      </div>
      <img src={image} className="mx-auto rounded my-4"/>
      <p className="text-red-500 text-center">Watch the video how to install for proper installation.</p>
    </section>
  );
};

export default SimilarFloorexxInstaliationGuideline;
