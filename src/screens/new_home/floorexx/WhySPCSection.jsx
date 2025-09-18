import image from "../../../Assets/new_home/floorexx/floorexxing.png"
const WhySPCSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why <span className="text-orange-600">SPC Floorings?</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          FLOORREX is the only SPC producing company in India with an in-house
          source of raw material (CaCO₃) hence attractive Pricing & Quality
          Standards and uniformity.
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            "Representatives available worldwide",
            "HOMAG line German Technology",
            "20+Countries Supply chain",
            "Unilin Locking System",
            "Quality & Design",
            "Customer Centric",
            "Since 2 decades",
          ].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm border border-orange-400 rounded-full text-orange-700 hover:bg-orange-50 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={image}
          alt="SPC Flooring Production"
          className="object-contain lg:w-full xl:w-[50%]  rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default WhySPCSection;
