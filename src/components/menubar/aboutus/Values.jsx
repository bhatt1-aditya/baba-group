import React from "react";

const Values = () => {
  const values = [
    { percent: "95%", title: "ENVIRONMENT FRIENDLY" },
    { percent: "98%", title: "CREATIVE & EXECUTION" },
    { percent: "99%", title: "TECHNOLOGY GIANTS" },
    { percent: "100%", title: "QUALITY PRODUCTION" },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">VALUES.</h2>
      <p className="max-w-4xl mx-auto text-gray-600 mb-12">
        Baba Group believes that a healthy environment is not only complementary 
        but also critical to a healthy business. Our mission is to develop a high 
        performance, high value production in order to satisfy our customers’ total needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#f97316"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="calc(283 - (283 * 95) / 100)"
                  strokeLinecap="round"
                  className="transform -rotate-90 origin-center"
                />
              </svg>
              <span className="absolute text-xl font-bold">{item.percent}</span>
            </div>
            <p className="mt-4 text-sm font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
