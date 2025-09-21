import React from "react";
import image1 from "../../../Assets/subcomponent_about_us/image1.png";
import image2 from "../../../Assets/subcomponent_about_us/image2.png";
const SimilarFloorexxAbout = () => {
  return (
    <div className="pt-24 mx-auto px-4 md:px-6 lg:px-10 ">
      <h1 className=" text-3xl font-bold mb-6 border-b-4 border-orange-500 inline-block">
        About Us
      </h1>

      <section className="bg-white text-gray-800  flex md:flex-row flex-col w-full gap-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 items-start md:w-[50%]">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-justify">
              Baba Flooring Pvt Ltd is a family owned company & the
              Manufacturer-Exporter of rigid core Luxury Vinyl Flooring, a new
              era of LVT, additionally called Stone Plastic Composite or Stone
              Polymer Composite (SPC) by using the emblem call "FLOORREX." The
              company started its operations in 2023 and since then continuously
              growing rapidly and achieved good brand name in not only India but
              also in many countries of the world.
            </p>
            <p className="mb-4 text-justify">
              As Baba holds its quarry and sustainably source CaC03, the main
              ingredient of SPC products. FLOORREX is the only SPC producing
              company in India with in-house source of CaC03 which helps us to
              maintain consistent quality in our products with highest standards
              at very attractive prices. Our highly skilled team takes care of
              Production & Quality, ensuring to achieve international quality
              standards.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <img
              src={image2}
              alt="Baba Quartz Factory"
              className="rounded w-full shadow-lg"
            />
          </div>

          {/* Right Image */}
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:grid-cols-2 gap-12 md:w-[50%] items-start">
          {/* Left Content */}
          <div className="flex justify-center w-full">
            <img
              src={image2}
              alt="Baba Quartz Factory"
              className="rounded w-full shadow-lg"
            />
          </div>
          <div>
            <p className="mb-4 text-justify">
              Baba Group's cutting-edge products are available globally in over
              20 countries, and so for, Floorrex SPC products - crafted
              passionately and bringing you the excellence through our German
              Technology products at every home across the world. This company
              is certified as ISO 9001/ISO14001/ISO45001/CE/IGBC2023.
            </p>
            <p className="mb-4 text-justify">
              Presently factory is situated at Khasra no. 62,63, Tikawara road,
              Opp. Shrinagar industrial Zone, NH-79, Village: Shrinagar, Teh:
              Kishangarh, Dist. Ajmer (Rajasthan), India in 80,000 Sq. Meter
              area having 4 Extrusion Lines and Homag Line. Currently company
              has production capacity of 3.6 Million Sq. Meter per Annum.
            </p>
          </div>

          {/* Right Image */}
        </div>
      </section>
    </div>
  );
};

export default SimilarFloorexxAbout;
