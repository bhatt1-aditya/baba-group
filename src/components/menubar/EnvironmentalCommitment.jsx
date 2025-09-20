import React from "react";
import image1 from "../../Assets/componentImage/environmentalcommitment1.png"
import image2 from "../../Assets/componentImage/environmentalcommitment2.png"
import image3 from "../../Assets/componentImage/environmentalcommitment3.png"
import image4 from "../../Assets/componentImage/environmentalcommitment4.png"
const EnvironmentalCommitment = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-6 lg:px-10 my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Environmental Commitment
        </h2>
        <p className="text-orange-600 italic mt-2">
          At Baba Quartz, our passion for protecting the environment is as strong as our dedication to creating world-class products. <br />
          This commitment goes beyond words—it is embedded into every stage of our operations.
        </p>
      </div>

      {/* Top 3 commitments */}
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-10">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">From start to finish</span>, our production processes are carefully monitored and continuously reviewed from a health, safety, and environmental perspective.
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            We take pride in being the first quartz manufacturing company to earn <span className="font-semibold">ISO 14001 certification</span>, a globally recognized standard for environmental management and performance.
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            We are equally committed to sustainability. Our recycled quartz surfaces contain up to <span className="font-semibold">42% reclaimed quartz</span>, significantly reducing the strain on the planet’s limited natural resources.
          </p>
        </div>
      </div>

      {/* Images row */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <img src={image1} alt="Commitment 1" className="rounded-lg shadow" />
        <img src={image2} alt="Commitment 2" className="rounded-lg shadow" />
        <img src={image3} alt="Commitment 3" className="rounded-lg shadow" />
        <img src={image4} alt="Commitment 4" className="rounded-lg shadow" />
      </div>

      {/* Bottom 2 sections */}
      <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
        <p className="text-gray-700">
          Our products meet the stringent Indian Greenguard standards, and we are accredited by the <span className="font-semibold">National Sanitation Foundation (NSF)</span> for surfaces safe enough to be used in laboratories, healthcare facilities, and food preparation environments.
        </p>
        <p className="text-gray-700">
          Beyond environmental responsibility, we are proud to be a responsible and supportive employer. At Baba Quartz, we ensure safe working conditions and foster a workplace culture built on respect, care, and opportunity for every employee.
        </p>
      </div>
    </section>
  );
};

export default EnvironmentalCommitment;
