import React from "react";
import image1 from "../../../Assets/subcomponent_about_us/image1.png";
import image2 from "../../../Assets/subcomponent_about_us/image2.png";
const Aboutus = () => {
  return (
    <div className="py-24 mx-auto px-4 md:px-6 lg:px-10 ">
      <h1 className=" text-3xl font-bold mb-6 border-b-4 border-orange-500 inline-block">
        About Us
      </h1>

      <section className="bg-white text-gray-800  flex md:flex-row flex-col w-full gap-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 items-start md:w-[50%]">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-justify">
              Baba Super Minerals Pvt. Ltd., established in 2010, is a
              family-owned company & one of the largest manufacturers-exporter
              of northern India in the category of best quality of premium
              quartz surfaces used in residential and commercial construction
              and quartz slab material used in headquarters, floors, spas,
              airports, ceramics & industries (raw mineral-based). Headquartered
              in Rajasthan, since 2010, India. With the growing demand for
              engineered stone surfaces (due to their durability, aesthetics,
              and low maintenance), our company is positioned to cater
              operations, increase shares, and expand distribution both
              domestically & internationally.
            </p>
            <p className="mb-4 text-justify">
              The company started its operations in 2010 and since then
              continuously growing and steadily achieved good sales in domestic
              as well as in foreign markets. In May 2011, the company received
              its first National Award entitled "Special National Award MSME
              2011" in the Export category, which was presented by Hon’ble Union
              Minister of MSME Shri Virbhadra Singh. Then company received two
              Star Export House status on 25th March 2013 from DGFT, Government
              of India. Baba Super Minerals Pvt. Ltd. was again awarded in
              2014–2015 by Hon’ble Union Minister of Commerce & Industry Smt.
              Nirmala Sitharaman for the top 10 Exporters in the category of
              Non-Metallic Mineral Industry by Rajasthan Chamber of Commerce and
              Industry as Certificate of Commendation in the category of Top
              Exporters. The company has also obtained ISO 9001:2015
              Certification and follows standardized and high-level production
              standards. Baba Quartz has been certified under NSF for
              fabrication standards.
            </p>
            <p className="mb-4 text-justify">
              Baba Quartz is the only firm in Super White Quartz quarry at
              Rajsamand location along with own processing plant. Additionally,
              Company has a long-term contract with supplier of good quality raw
              material.
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

          <div>
            <p className="mb-4 text-justify">
              BABA QUARTZ is the prominent manufacturer of engineered Quartz
              Surfaces, Headquarter in Rajasthan province in India. We have
              independent distributors across all parts of world to serve our
              customers. With two state-of-the-art production units of 40000 sq
              meter each at Jaipur, production line for Quartz slabs & 12
              production line for Quartz grit & fillers, BABA QUARTZ has an
              annual capacity of over 75000 m² of quartz slabs & fillers.
            </p>
            <p className="mb-4 text-justify">
              BABA QUARTZ have latest facilities to handle export orders &
              container packing. Packing materials confirm international
              standards and finished slabs are wrapped with plastic for
              protection. We have our own Research & Development section with
              multiple facilities: Specification Measurement, Visual Parameter,
              Chemical Testing and Slice Analysis to Test the Stone as per ASTM
              Standards.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <img
              src={image1}
              alt="Baba Quartz Factory"
              className="rounded w-full shadow-lg"
            />
          </div>
          {/* Right Image */}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
