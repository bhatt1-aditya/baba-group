import React from "react";
import newsImage from "../../Assets/componentImage/news1.png";

const NewsEventSection = () => {
  return (
    <div className="mx-auto px-4 my-28 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold text-center mb-2">News & Events</h2>
      <p className="text-center text-orange-500 mb-12">
        Stay informed with our latest developments and launches.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Text Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Introducing the Wallex Wall Panel Collection
          </h3>
          <p className="text-sm text-gray-500 mb-4">News &nbsp;•&nbsp; 5 mins read</p>
          <p className="text-gray-700 mb-6">
            Baba Group is proud to announce the official launch of the Wallex Wall Panel Signature Collection – a breakthrough in modern wall design solutions.
          </p>
          <p className="text-gray-700 mb-6">
            The Signature Collection is designed to meet the growing demand for innovative, sustainable, and stylish interiors across residential, commercial, and hospitality sectors. With a perfect balance of aesthetic appeal, durability, and functional versatility, Wallex panels redefine the way spaces are designed and experienced.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img src={newsImage} alt="Wallex Wall Panel" className="rounded-lg w-full shadow-md" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <img src={newsImage} alt="Additional View" className="rounded-lg w-full shadow-md" />

        <div>
          <p className="text-gray-700 mb-4">
            Crafted with advanced technology, each panel combines seamless finishes, rich textures, eco-conscious materials that not only elevate the design but also ensure long-lasting performance. The Wallex Signature Collection offers a wide variety of design choices, allowing architects, interior designers, and homeowners to create spaces that reflect individuality and global design trends.
          </p>

          <p className="italic text-gray-600 mb-4">
            "The Wallex Signature Collection represents our constant drive for innovation and excellence. This launch is not just about introducing a product—it’s about delivering a complete experience in interior design that resonates with modern lifestyles and global expectations." 
            <br />
            <span className="font-semibold">- Speaking on the launch, the Chairman of Baba Group stated</span>
          </p>

          <p className="text-gray-700">
            This launch marks another step forward in Baba Group’s mission to remain a global leader in engineered stone and surface solutions. With the Wallex Wall Panel Signature Collection, the company reaffirms its commitment to sustainability, design innovation, and customer satisfaction.
          </p>
        </div>
      </div>

      <p className="mt-12 text-gray-700 text-center">
        The collection is now available for global distribution, showcasing Baba Group’s ambition to continue expanding its footprint in international markets while staying true to its roots of quality craftsmanship and innovation.
      </p>
    </div>
  );
};

export default NewsEventSection;
