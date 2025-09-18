import React from "react";
import PromotersImage from "../../Assets/componentImage/promoters.png";
import PromotersImage2 from "../../Assets/componentImage/promoters2.png";
const Promoters = () => {
  const promoters = [
    {
      id: 1,
      name: "Mr. Dheerajpal Gusai",
      title: "Chairman & Managing Director",
      image: PromotersImage,
      small_Image: PromotersImage,
      description:
        "Our proud standing & the leading role we play today in the markets is the fruitful outcome of many years of carefully planned hard, dedicated & exhausting work years interposed by large scale challenges, which were not but an incentive, motive and stimulant to attain further achievement, excellence & uniqueness. Since its origin, Baba Group has focused on a sole objective; namely, to attain leadership & a pioneering position to be the first choice that meets all expectations. Today the Group's brands have become distinguished & have a name that reflects quality & mastery not only in India, but in all Asia, Europe & North African countries as well.",
      sub_description: `Mr. Shree Gopal Goyal, joined family textile business in the year of 1982 in BABA FABRICS, and by year expanding business of bed sheet and getting a good response from the domestic market.${(
        <br />
      )}
But diversification is the law of business, so start the mining/crushing business from 2006 in the name of BABA MINERALS, at Nasirabad (Ajmer) with a very small unit.${(
        <br />
      )}

Group proud standing and the leading role, Company play today in the markets is the fruitful outcome of many years of carefully planned hard, dedicated and exhausting work years interposed by large-scale challenges, which were not but an incentive, motive and stimulant to attain further achievement, excellence and uniqueness.${(
        <br />
      )}

Today the Group's brands have become distinguished and have a name that reflects quality and mastery not only in the India, but in all Asia, Europe and North African countries as well. Undoubtedly, the trust placed in Company by the suppliers and consumers is a badge of honors that maximized the responsibility falling on his shoulders to always provide the best. The expansion strategy to entering the quartz slab segment is adopted by group since its inception has contributed largely to consolidating its role as a key driver for promoting the economic cycle, and has large-scale effect to reach the largest possible segment of consumers, as Company's existing products have reached today. Maximizing the production cycle and operating complex of factories with their peak capacity has increased capacity to cover local, regional and international needs. The outstanding success Group achieved today did not happen by accident; rather, it is attributable to God in the first place, and then to Company's dedicated, large-scale efforts exerted by highly qualified and trained manpower that work backstage quietly, patiently, and earnestly. They work in the framework of a clear strategic vision, having firm faith in that group's success depends on the individuals' success.${(
        <br />
      )}

Today Company has established itself as a market leader of international quartz stone market and that have contributed to the growth and development of the Indian mining sector.`,
    },
    {
      id: 2,
      name: "Mr. Dhuruv Gusai",
      title: "Executive Director",
      image: PromotersImage2,
      small_Image: PromotersImage2,
      description: `At Baba Group, we are driven by a passion for quality, innovation, and customer satisfaction. Our dedication has allowed us to consistently deliver exceptional products and service. The natural beauty and durability of quartz make it an ideal choice for a wide range of applications, from stunning countertops to elegant flooring. We are committed to using the most advanced techniques and technology to ensure that each piece we create is a masterpiece. We are proud of the reputation we have built for quality and integrity. We aim to be the "India's largest Quartz manufacturer". We invite you to explore our designs and discover the beauty and durability of quartz, and we are thrilled to partner with you on your next project.`,
      sub_description: `Mr. Abhishek Goyal, after successfully completing his graduation has joined family business, which he inclined to do so and taking it forward to new heights. He brought about a directional change by shifting Baba Minerals policy of only processing minerals from its own mines.

He firmly believes in honesty and hard work, an integral part of the continued success of the Baba Group. He foresees Baba Super Minerals as a leading minerals company based on the growth momentum it has achieved in a brief span of two years. His international exposure combined with his ethics of corporate governance will provide fresh insight on attaining the highest standards in the minerals business.
He is an avid traveler and loves exploring exotic locations in particular, whenever he finds time from work. With his hold and goodwill in the industry, he was able to build a strong network of business partners and dealers for the Company much before the start of production of proposed slab division. It is due to his ability that Baba Minerals was able to thrive in this market due to his insights that have been used by the Company to develop growth strategies.

Mrs. Manju Devi Goyal, firmly believes in honesty and hard work, so she take care about marketing, an integral part of the continued success of the Baba Group. She foresees Baba Super Minerals as a leading minerals company based on the growth momentum it has achieved in a brief span of two years. Her international exposure combined with her ethics of corporate governance will provide fresh insight on attaining the highest standards in the minerals business.

Mrs. Preeti Goyal, she takes care about company management for manage quality and laboratory, an integral part of the continued success of the Baba Group.

Mrs. Swati Agarwal, As a procurement director, she is directly involved in the sourcing and purchasing of products and services. Her role helps the organisation with save money, minimize costing and increase profits.

`,
    },
    {
      id: 3,
      name: "Mr. Kshitij Aggarwal",
      title: "Technical Director",
      image: PromotersImage,
      small_Image: PromotersImage,
      description:
        "Hi, I am Ankit Agarwal, and I am proud and honored to introduce you the FLOORREX Brand. We are producing future-based products that are heavyweight devices & furnishings that will not affect. FLOORREX is protected against dents, scratches, fall, paints, fading, gashes, and wear-through! Any clean-up is effortless. We are sure that THE FUTURE OF THE FLOORING IS FLOORREX!!!",
    sub_description:`Mr. Ankit Agarwal, with his bright vision he is strategically aligning the business towards a growth trajectory by focusing on improving sales infrastructure, upgrading marketing message, streamlining finance activities and focusing on human resources. He provides the inspiration and guidance behind product development in line with evolving requirements and aspirations of clients across the world. He focuses on widening the customer base, quality enhancement, technology up gradation and innovation, improving efficiency and performance, leverages his global business insight and enduring relationships with multiple clients to strengthen the visibility of the Floorrex brand globally.

His vision has transformed Floorrex into a rapidly growing globally acclaimed enterprise over the last decade, winning several accreditation. He assessing risks to the company and ensuring they are monitored and minimized by setting strategic goals and making sure they are measurable and describable.`
    },
  ];

  return (
    <div className=" px-4 md:px-6 lg:px-10 py-24 bg-white">
      <div>
        <h2 className="text-3xl mb-2 font-bold text-center  text-gray-800 uppercase tracking-wide">
          Our Promoters
        </h2>
        <p className="mb-12 text-center text-[#ed7326]">
          Discover the vision and values shared by our dedicated promoters and
          their commitment to excellence.
        </p>
      </div>
      <div className="space-y-16">
        {promoters.map((promoter, index) => (
          <div>
            <div
              key={promoter.id}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div className="bg-gray-100 rounded-lg overflow-hidden ">
                  <img
                    src={promoter.image}
                    alt={promoter.name}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <img
                    src={promoter.small_Image}
                    className="lg:h-60 w-full lg:w-60 object-contain"
                  />
                  <div className="my-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {promoter.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                      {promoter.title}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {promoter.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8  leading-relaxed text-justify">{promoter.sub_description}</div>
          </div>
        ))}
      </div>

      {/* Additional styling for professional look */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 italic">
          "Building dreams with dedication, delivering excellence with
          integrity"
        </p>
      </div>
    </div>
  );
};

export default Promoters;
