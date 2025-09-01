import React from "react";

const AwardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#6b4226] tracking-wide mb-12">
          AWARDS & <br /> ACHIEVEMENTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <img
            src="/images/award1.jpg"
            alt="Award 1"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
          <img
            src="/images/award2.jpg"
            alt="Award 2"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
          <img
            src="/images/award3.jpg"
            alt="Award 3"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
          <img
            src="/images/award4.jpg"
            alt="Award 4"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
          <img
            src="/images/award5.jpg"
            alt="Award 5"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
