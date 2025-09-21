import React from "react";

const TechnicalSpecifications = () => {
  const data = [
    { property: "Water Absorption", result: "<0.05%", method: "ASTM C97-09" },
    { property: "MOHS Hardness", result: "6.5-7", method: "MOHS Hardness Scale" },
    { property: "Thermal Shock", result: "No damaged passed 5 cycles", method: "ASTM C484" },
    { property: "Compressive Strength", result: "24000 psi", method: "ASTM C170" },
    { property: "Flexural Strength", result: "8500-9000 psi", method: "ASTM C880" },
    { property: "Moisture Absorption", result: "Negligible", method: "ASTM C484" },
    { property: "Abrasion Resistance", result: "89-190 mm3", method: "ASTM C1243" },
    { property: "Density", result: "2.4 g/cm3", method: "ASTM C373" },
    { property: "Cigarette Test", result: "Unaffected", method: "ANSI Z124.6" },
    { property: "Stain Resistance", result: "Unaffected", method: "ANSI Z124.6" },
    { property: "Bond Strength", result: "205 psi", method: "ASTM C482" },
    { property: "Wear Resistance", result: "Unaffected", method: "ANSI Z124.6" },
    { property: "Thermal Expansion", result: "1.2 × 10.5 Inch/℉", method: "ASTM C531" },
    { property: "Chemical Resistance", result: "Unaffected", method: "ASTM C650" },
    { property: "De-icing Resistance", result: "Unaffected", method: "ASTM C672" },
    { property: "Freeze Thaw Resistance", result: "No damaged passed 5 cycles", method: "ASTM C1026" },
    { property: "Surface Burning Characteristics", result: "17 (class A / I rating)", method: "ASTM E84" },
  ];

  return (
    <div className=" mx-auto md:px-6 px-4 lg:px-10 py-12 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-2">
          Technical Specifications <br />
          <span className="text-orange-500 font-bold">of BABA QUARTZ.</span>
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2 font-semibold">PROPERTIES</th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">RESULTS</th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">METHODS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{row.property}</td>
                <td className="border border-gray-300 px-4 py-2">{row.result}</td>
                <td className="border border-gray-300 px-4 py-2">{row.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
