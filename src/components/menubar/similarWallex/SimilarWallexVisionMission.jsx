import React from "react";

const SimilarWallexVisionMission=()=> {
  return (
    <div className="min-h-screen md:mt-0 mt-4 bg-white flex flex-col items-center justify-center lg:px-10 md:px-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Vision Section */}
        <div className="">
          <h1 className="text-4xl font-bold mb-6 text-center">VISION<span className="text-orange-500">.</span></h1>
          <p className="text-gray-700 mb-6">
            Our company was founded on a beautiful ideal: We find joy in helping everyone make their dreams a reality. This purpose applies to our suppliers and customers, end-consumers, and our employees. We believe in our industry and its role in making the world a more beautiful place. As one of its leaders nationally, we have a responsibility to help in shaping the industry's future and ensure its growth. Our vision is to be the first brand of choice for flooring.
          </p>
          <p className="text-gray-700 mb-6">
            With the passage of time we would like to translate our vision into reality by accomplishing the following achievements:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To make persistent Team efforts to establish Global Marketing penetration.</li>
            <li>To uphold and sustain our existing Global Goodwill and Brand Equity value.</li>
            <li>To become a notable Market Leader among the similar players.</li>
            <li>Making living more happier with our top quality products.</li>
            <li>To make new innovations happen, rather than watching how things happen.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div>
          <h1 className="text-4xl text-center font-bold mb-6">MISSION<span className="text-orange-500">.</span></h1>
          <p className="italic text-gray-700 mb-6">
            "Maintaining a global viewpoint, we are dedicated to supplying products of the highest quality for worldwide customer satisfaction"
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is ambitious and wide-ranging, and attainable. We believe we can achieve sustained growth through the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Business Innovation</li>
            <li>A diverse assortment of affordable and accessible products</li>
            <li>Geographic Expansion</li>
            <li>Attentive partner support</li>
            <li>A culture of respect and teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SimilarWallexVisionMission;